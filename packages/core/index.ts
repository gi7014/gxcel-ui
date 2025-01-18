import { makeInstaller } from '@gxcel-ui/utils'
import components from './components'
import '@gxcel-ui/theme/index.css'

const installer = makeInstaller(components)

export * from '@gxcel-ui/components'
export default installer