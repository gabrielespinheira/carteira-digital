// cards sdk

export function createCard(database, user, cardName, cardData) {
  if (!user || !database || !cardName || !cardData) {
    return false
  }

  try {
    database.collection('users').doc(user.uid).collection('cards').doc(cardName).set(cardData)

    return true
  } catch (e) {
    console.log(e)

    return false
  }
}
