import Meta from './meta'
import Header from '../components/header'
import Footer from './footer'
// import {useEffect} from 'react'

type Props = {
    preview?: boolean
    children: React.ReactNode
}

const HomeLayout = ({ children }: Props) => {
    // useEffect(() => {
    //     const onScroll = () => {
    //         if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //             document.getElementById("myP").className = "test";
    //           } else {
    //             document.getElementById("myP").className = "";
    //           }
    //     }
    //     window.addEventListener('scroll',onScroll)
    //     return () => {
    //         window.removeEventListener('scroll',onScroll)
    //     }
    // }, [])
    return (
        <>
            <Meta />
            <div className="min-h-screen text-sajilo">
                <Header/>
                <main className="h-calculated">{children}</main>
            </div>
      <Footer />

        </>
    )
}

export default HomeLayout
