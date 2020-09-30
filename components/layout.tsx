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
      <div className="min-h-screen text-sajilo">
      <Header className="mb-4 md:mb-20" />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
