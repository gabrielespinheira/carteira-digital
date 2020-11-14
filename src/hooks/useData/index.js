import React, { createContext, useEffect, useContext } from 'react'
import firebase from 'services/firebase'
import 'firebase/auth'

import { useDB, usePersistedState } from 'hooks'

import { getTransactions, getCards, getBanks } from 'sdk'

const DataContext = createContext(null)

export const DataProvider = ({ children }) => {
  const { db } = useDB()
  const [rehydrate, setRehydrated] = usePersistedState(
    'rehydrate',
    new Date().getTime()
  )
  const [user, setUser] = usePersistedState('user', {})
  const [transactions, setTransactions] = usePersistedState('transactions', [])
  const [cards, setCards] = usePersistedState('cards', [])
  const [banks, setBanks] = usePersistedState('banks', [])

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  // load transactions, cards and banks
  useEffect(() => {
    console.log('rehydrated')

    if (!navigator.onLine) {
      console.log('offline')
      return
    }

    if (user?.uid) {
      async function loadTransactions() {
        const responseTransactions = await getTransactions(db, user.uid)
        setTransactions(responseTransactions)
      }

      async function loadCards() {
        const responseCards = await getCards(db, user.uid)
        setCards(responseCards)
      }

      async function loadBanks() {
        const responseBanks = await getBanks(db, user.uid)
        setBanks(responseBanks)
      }

      loadTransactions()
      loadCards()
      loadBanks()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [db, user, rehydrate])

  const handleSignInGoogle = async () => {
    const googleResponse = await auth.signInWithPopup(provider)

    if (!googleResponse || !googleResponse.user) {
      return { success: false, redirect: '/' }
    }

    const userAuth = {
      uid: googleResponse.user.uid,
      name: googleResponse.user.displayName,
      email: googleResponse.user.email,
      avatar: googleResponse.user.photoURL,
    }

    await setUser(userAuth)
    const userRef = db.collection('users').doc(userAuth.uid)

    return await userRef.get().then(async (doc) => {
      if (doc.exists && doc.data() && doc.data().onboarding === true) {
        return { success: true, redirect: '/app/account' }
      }

      userAuth.onboarding = false

      userRef.set(userAuth).then(() => {
        return { success: true, redirect: '/onboarding/bank' }
      })

      return { success: true, redirect: '/onboarding/bank' }
    })
  }

  const handleLogout = async () => {
    await localStorage.clear()
    await auth.signOut()
    setUser({})

    return { success: true, redirect: '/' }
  }

  return (
    <DataContext.Provider
      value={{
        signed: !!user,
        user,
        setUser,
        handleSignInGoogle,
        handleLogout,
        transactions,
        cards,
        banks,
        setRehydrated,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => {
  return useContext(DataContext)
}
