import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Welcome from 'pages/Welcome'
import OnboardingBank from 'pages/OnboardingBank'
import OnboardingCard from 'pages/OnboardingCard'
import OnboardingMoney from 'pages/OnboardingMoney'
import OnboardingFinish from 'pages/OnboardingFinish'

import Account from 'pages/Account'
import History from 'pages/History'
import Control from 'pages/Control'
import Soon from 'pages/Soon'

import FormAdd from 'pages/Form/Add'
import FormRemove from 'pages/Form/Remove'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/onboarding/bank" component={OnboardingBank} />
        <Route path="/onboarding/card" component={OnboardingCard} />
        <Route path="/onboarding/money" component={OnboardingMoney} />
        <Route path="/onboarding/finish" component={OnboardingFinish} />

        <Route path="/app/account" component={Account} />
        <Route path="/app/history" component={History} />
        <Route path="/app/control" component={Control} />
        <Route path="/app/soon" component={Soon} />

        <Route path="/app/form/add" component={FormAdd} />
        <Route path="/app/form/remove" component={FormRemove} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
