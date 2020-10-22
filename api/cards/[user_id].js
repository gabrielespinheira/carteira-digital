import 'firebase/firestore'
import firebase from '../../src/services/firebase'

export default async function handler(req, res) {
  const db = await firebase.firestore()
  const { user_id } = req.query

  const cards = []

  const snapshot = await db
    .collection('users')
    .doc(user_id)
    .collection('cards')
    .get()

  snapshot.forEach(function (doc) {
    cards.push(doc.data())
  })

  if (!cards || cards.length === 0) {
    res.status(401).json({ error: 'Not found' })
  }

  res.status(200).json(cards)
}
