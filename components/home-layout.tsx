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
            <div className="max-h-screen">
                <main>{children}</main>
            </div>
        </>
    )
}

export default HomeLayout
