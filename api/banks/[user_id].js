import 'src/firebase/firestore'
import firebase from '../../src/services/firebase'

export default async function handler(req, res) {
  const db = await firebase.firestore()
  const { user_id } = req.query

  const banks = []

  const snapshot = await db
    .collection('users')
    .doc(user_id)
    .collection('banks')
    .get()

  snapshot.forEach(function (doc) {
    banks.push(doc.data())
  })

  if (!banks || banks.length === 0) {
    res.status(401).json({ error: 'Not found' })
  }

  res.status(200).json(banks)
}
