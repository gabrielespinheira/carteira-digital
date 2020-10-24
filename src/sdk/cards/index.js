// cards sdk

export function createCard(database, userId, cardName, cardData) {
  if (!userId || !database || !cardName || !cardData) {
    return false
  }

  try {
    database
      .collection('users')
      .doc(userId)
      .collection('cards')
      .doc(cardName)
      .set(cardData)

    return true
  } catch (err) {
    console.log(err)

    return false
  }
}

export async function getCards(database, userId) {
  if (!userId || !database) {
    return []
  }

  const cards = []

  try {
    const snapshot = await database
      .collection('users')
      .doc(userId)
      .collection('cards')
      .get()

    snapshot.forEach(function (doc) {
      cards.push(doc.data())
    })
  } catch (err) {
    console.log(err)

    return false
  }

  return cards
}
