import { config } from '@tamagui/config/v3'
import { TamaguiProvider, createTamagui } from '@tamagui/core'

const tamaguiConfig = createTamagui(config)

type Conf = typeof tamaguiConfig

declare module '@tamagui/core' {

  interface TamaguiCustomConfig extends Conf {}

}
export default tamaguiConfig
