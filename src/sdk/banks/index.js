// banks sdk

export function createBank(database, user, bankName, bankData) {
  if (!user || !database || !bankName || !bankData) {
    return false
  }

  try {
    database.collection('users').doc(user.uid).collection('banks').doc(bankName).set(bankData)

    return true
  } catch (e) {
    console.log(e)

    return false
  }
}
