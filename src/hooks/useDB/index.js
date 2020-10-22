import React, { createContext, useContext } from 'react'
import 'firebase/firestore'

import firebase from 'services/firebase'

const DatabaseContext = createContext(null)

export const DatabaseProvider = ({ children }) => {
  const db = firebase.firestore()

  return (
    <DatabaseContext.Provider value={{ db }}>
      {children}
    </DatabaseContext.Provider>
  )
}

export const useDB = () => {
  return useContext(DatabaseContext)
}
