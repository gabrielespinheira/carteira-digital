// transactions sdk

export function createTransaction(database, user, transactionData) {
  if (!user || !database || !transactionData) {
    return false
  }

  try {
    database
      .collection('users')
      .doc(user.uid)
      .collection('transactions')
      .add({
        ...transactionData,
        value: Number(transactionData.value),
        time: new Date().getTime(),
      })
    return true
  } catch (e) {
    console.log(e)
  }
}

export function getTotalBalance(transactions) {
  return transactions
    .map((tsx) => {
      return parseFloat(tsx.value)
    })
    .reduce((a, b) => a + b)
}

export function getBankBalance(transactions) {
  return transactions
    .filter((tsx) => {
      return tsx.type === 'bank' ? tsx : false
    })
    .map((tsx) => {
      return parseFloat(tsx.value)
    })
    .reduce((a, b) => a + b)
}

export function getCardBalance(transactions) {
  return transactions
    .filter((tsx) => {
      return tsx.type === 'card' ? tsx : false
    })
    .map((tsx) => {
      return parseFloat(tsx.value)
    })
    .reduce((a, b) => a + b)
}

export function getMoneyBalance(transactions) {
  return transactions
    .filter((tsx) => {
      return tsx.type === 'money' ? tsx : false
    })
    .map((tsx) => {
      return parseFloat(tsx.value)
    })
    .reduce((a, b) => a + b)
}
