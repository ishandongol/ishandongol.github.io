import Footer from './footer'
import Meta from './meta'
import Header from '../components/header'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
      <Header className="mb-20 shadow" />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
