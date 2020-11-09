import OneSignal, { useOneSignalSetup } from 'react-onesignal'
import config from './config'

export useOneSignalSetup

export default OneSignal.initialize(config.appId)
