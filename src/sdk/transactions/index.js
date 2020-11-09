// transactions sdk

export function createTransaction(database, userId, transactionData) {
  if (!userId || !database || !transactionData) {
    return false
  }

  try {
    database
      .collection('users')
      .doc(userId)
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

export async function getTransactions(database, userId) {
  const transactions = []

  const snapshot = await database
    .collection('users')
    .doc(userId)
    .collection('transactions')
    .orderBy('time', 'desc')
    .get()

  snapshot.forEach(function (doc) {
    transactions.push(doc.data())
  })

  return transactions
}

export function getTotalBalance(transactions) {
  if (transactions.length === 0) {
    return 0
  }

  return transactions
    .map((tsx) => {
      return parseFloat(tsx.value)
    })
    .reduce((a, b) => a + b)
}

export function getBankBalance(transactions) {
  if (transactions.length === 0) {
    return 0
  }

  let result = transactions.filter((tsx) => {
    return tsx.type.toLowerCase().trim() === 'bank' ? tsx : false
  })

  if (result.length > 0) {
    result = result.map((tsx) => {
      return parseFloat(tsx.value)
    })
  }

  if (result.length > 0) {
    result = result.reduce((a, b) => a + b)
  }

  return result
}

export function getCardBalance(transactions) {
  if (transactions.length === 0) {
    return 0
  }

  return transactions
    .filter((tsx) => {
      return tsx.type.toLowerCase().trim() === 'card' ? tsx : false
    })
    .map((tsx) => {
      return parseFloat(tsx.value)
    })
    .reduce((a, b) => a + b)
}

export function getMoneyBalance(transactions) {
  if (transactions.length === 0) {
    return 0
  }

  return transactions
    .filter((tsx) => {
      return tsx.type.toLowerCase().trim() === 'money' ? tsx : false
    })
    .map((tsx) => {
      return parseFloat(tsx.value)
    })
    .reduce((a, b) => a + b)
}
