import React, { createContext, useState, useEffect, useContext } from 'react'
import firebase from 'services/firebase'
import 'firebase/auth'
import cookie from 'js-cookie'

import { useDB } from 'hooks/useDB'

const DataContext = createContext(null)

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const { db } = useDB()

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  useEffect(() => {
    async function loadUser() {
      const storagedUser = JSON.parse(await localStorage.getItem('@app:user'))
      if (storagedUser) {
        setUser(storagedUser)
      }
    }

    loadUser()
  }, [])

  useEffect(() => {
    async function saveUser() {
      try {
        await localStorage.setItem('@app:user', JSON.stringify(user))

        if (user && typeof cookie.get('user_id') !== 'undefined') {
          cookie.set('user_id', user.uid, { expires: 7 })
        }
      } catch (err) {
        console.log(err)
      }
    }

    saveUser()
  }, [user])

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
    setUser(null)

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
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => {
  return useContext(DataContext)
}
