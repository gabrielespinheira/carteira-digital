import React, { createContext, useEffect, useContext } from 'react'
import firebase from 'services/firebase'
import 'firebase/auth'

import { useDB, usePersistedState } from 'hooks'

import { getTransactions, getCards, getBanks } from 'sdk'

const DataContext = createContext(null)

export const DataProvider = ({ children }) => {
  const { db } = useDB()
  const [user, setUser] = usePersistedState('@app:user', {})
  const [transactions, setTransactions] = usePersistedState(
    '@app:transactions',
    []
  )
  const [cards, setCards] = usePersistedState('@app:cards', [])
  const [banks, setBanks] = usePersistedState('@app:banks', [])

  useEffect(() => {
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
  }, [db, setBanks, setCards, setTransactions, user])

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  async function handleSignInGoogle() {
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

    const checkOnboarding = await userRef.get().then(async (doc) => {
      if (!doc.exists) {
        userAuth.onboarding = false

        userRef.set(userAuth).then(() => {
          return { success: true, redirect: '/onboarding/bank' }
        })
      }

      if (doc.data() && !doc.data().onboarding) {
        return { success: true, redirect: '/onboarding/bank' }
      }

      return false
    })

    if (checkOnboarding) {
      return checkOnboarding
    }

    return { success: true, redirect: '/app/account' }
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
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => {
  return useContext(DataContext)
}
