// banks sdk

export function createBank(database, userId, bankName, bankData) {
  if (!userId || !database || !bankName || !bankData) {
    return false
  }

  try {
    database
      .collection('users')
      .doc(userId)
      .collection('banks')
      .doc(bankName)
      .set(bankData)

    return true
  } catch (err) {
    console.log(err)

    return false
  }
}

export async function getBanks(database, userId) {
  if (!userId || !database) {
    return []
  }

  const banks = []

  try {
    const snapshot = await database
      .collection('users')
      .doc(userId)
      .collection('banks')
      .get()

    snapshot.forEach(function (doc) {
      banks.push(doc.data())
    })
  } catch (err) {
    console.log(err)

    return false
  }

  return banks
}
