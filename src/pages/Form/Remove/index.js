import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi'

import { Layout, Content, Title, Input } from 'ui'
import { Topbar, ActionButtons } from 'components'
import { useData, useDB } from 'hooks'
import { createTransaction } from 'sdk'

const FormRemove = () => {
  const history = useHistory()
  const { db } = useDB()
  const { user, banks, cards, setRehydrated } = useData()

  const [description, setDescription] = useState('')
  const [method, setMethod] = useState('money')
  const [value, setValue] = useState('')
  const [type, setType] = useState('')

  async function handleSubmit() {
    if (!description || !value || !method) {
      return
    }

    const remove = await createTransaction(db, user.uid, {
      type,
      method,
      value: Number(0 - value),
      title: description ? description : 'Entrada',
    })

    if (remove) {
      await setRehydrated(new Date().getTime())
      history.push('/app/account')
    }
  }

  return (
    <Layout>
      <Topbar navHidden={false} clickNav={() => history.push('/app/account')} />

      <Content justifyContent="center">
        <Title fontSize="md" fontWeight="500" mb="lg">
          Novo gasto
        </Title>

        <Input
          title="Descrição"
          mb="sm"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <div className="select">
          <select
            onChange={(e) => {
              setMethod(e.target.value)
              setType(e.target[e.target.selectedIndex].attributes.type.value)
            }}
          >
            <option type="money" value="money">
              Dinheiro
            </option>
            {banks &&
              banks.map((bank, key) => {
                return (
                  <option key={key} type="bank" value={bank.name}>
                    {bank.name}
                  </option>
                )
              })}
            {cards &&
              cards.map((card, key) => {
                return (
                  <option key={key} type="card" value={card.name}>
                    {card.name}
                  </option>
                )
              })}
          </select>
          <FiChevronDown size={22} />
        </div>

        <Input
          type="number"
          title="R$"
          mt="sm"
          mb="sm"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </Content>

      <ActionButtons hideAdd={true} onClickRemove={handleSubmit} />
    </Layout>
  )
}

export default FormRemove
