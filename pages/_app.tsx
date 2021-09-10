import { AppProps } from 'next/app'

import { config,library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
library.add(fab)
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
