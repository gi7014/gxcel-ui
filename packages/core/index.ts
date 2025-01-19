import { makeInstaller } from '@gxcel-ui/utils'
import { library } from '@fortawesome/fontawesome-svg-core' 
import { fas } from '@fortawesome/free-solid-svg-icons'
import components from './components'
import '@gxcel-ui/theme/index.css'

library.add(fas)
const installer = makeInstaller(components)

export * from '@gxcel-ui/components'
export default installer