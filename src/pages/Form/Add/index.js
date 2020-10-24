import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Layout, Content, Title, Input } from 'ui'
import { Topbar, ActionButtons } from 'components'
import { useData, useDB } from 'hooks'
import { createTransaction } from 'sdk'

const FormAdd = () => {
  const history = useHistory()
  const { db } = useDB()
  const { user } = useData()
  const banks = []

  const [description, setDescription] = useState('')
  const [type, setType] = useState('money')
  const [value, setValue] = useState('')

  function handleSubmit() {
    if (!description || !value || !type) {
      return
    }

    createTransaction(db, user.uid, {
      type: type === 'money' ? 'money' : 'bank',
      method: type,
      value: Number(value),
      title: description ? description : 'Entrada',
    })
  }

  return (
    <Layout>
      <Topbar navHidden={false} clickNav={() => history.push('/app/account')} />

      <Content justifyContent="center">
        <Title fontSize="md" fontWeight="500" mb="lg">
          Adicionar entrada
        </Title>

        <Input
          title="Descrição"
          mb="sm"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <select onChange={(e) => setType(e.target.value)}>
          <option value="money">Dinheiro</option>
          {banks &&
            banks.map((bank, key) => {
              return (
                <option key={key} value={bank.name}>
                  {bank.name}
                </option>
              )
            })}
        </select>

        <Input
          title="R$"
          mt="sm"
          mb="sm"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </Content>

      <ActionButtons hideRemove={true} onClickAdd={handleSubmit} />
    </Layout>
  )
}

export default FormAdd
