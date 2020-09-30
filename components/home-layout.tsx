import Meta from './meta'
import Header from '../components/header'

type Props = {
    preview?: boolean
    children: React.ReactNode
}

const HomeLayout = ({ children }: Props) => {
   
    return (
        <>
            <Meta />
            <div className="h-auto lg:min-h-screen text-sajilo ">
                <Header />
                <main className="h-calculated">
                    {children}
                </main>
            </div>
        </>
    )
}

export default HomeLayout
