import 'firebase/firestore'
import firebase from '../../src/services/firebase'

export default async function handler(req, res) {
  const db = await firebase.firestore()
  const { user_id } = req.query

  const transactions = []

  const snapshot = await db
    .collection('users')
    .doc(user_id)
    .collection('transactions')
    .orderBy('time', 'desc')
    .get()

  snapshot.forEach(function (doc) {
    transactions.push(doc.data())
  })

  if (!transactions || transactions.length === 0) {
    res.status(401).json({ error: 'Not found' })
  }

  res.status(200).json(transactions)
}
