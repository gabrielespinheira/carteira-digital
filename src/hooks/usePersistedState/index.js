import { useState, useEffect } from 'react'
import { Store, get, set } from 'idb-keyval'

export default function usePersistedState(key, defaultValue) {
  const databaseStore = new Store('carteira-digital', 'carteira-digital')

  const [state, setState] = useState(defaultValue)

  const loadState = async () => {
    get(key, databaseStore).then((val) => {
      if (typeof val === 'undefined') {
        setState(defaultValue)
        return
      }

      setState(val)
    })
  }

  useEffect(() => {
    loadState()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    set(key, state, databaseStore)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, state])
  return [state, setState]
}
