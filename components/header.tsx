import Link from 'next/link'
import Container from '../components/container'
import { useRouter } from 'next/router'
import { useState } from 'react'

interface HeaderProps {
  className?: string
}
interface HeaderItem {
  url: string;
  title: string;
  dynamic?: boolean;
}
const headerItems: HeaderItem[] = [
  { url: '/', title: 'Home' },
  { url: '/experience', title: 'Experience' },
  { url: '/portfolio', title: 'Portfolio', dynamic: true },
  { url: '/portfolio/sajilorecharge', title: 'Sajilo Recharge',dynamic:true },
]

const HeaderLink: React.FC<HeaderItem & { className: string }> = ({ url, title, className }) => {
  return (
    <Link href={url}>
      <a className={`block mt-4 lg:inline-block lg:mt-0 hover:text-gray-800 mr-4 ${className||''}`}>
        {title}
      </a>
    </Link>
  )
}
const Header: React.FC<HeaderProps> = ({ className }) => {
  const router = useRouter()
  const [toggled,setToggled] = useState<boolean>(false)
  return (
    <nav className={`z-10 flex items-center font-bold justify-between flex-wrap p-6 ${className || ''} sticky top-0 bg-white`}>
      <Container>
        {/* <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <a className="hover:underline h-8 subpixel-antialiased ">{'< ईशान डंगोल />'}</a>
        </Link>
      </div> */}
        <div className="block lg:hidden ">
          <button onClick={()=>{
            setToggled(!toggled)
          }} className="flex items-center px-3 py-2 border rounded text-gray-700 border-sajilo hover:text-gray-800 hover:border-gray-800">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className="block flex-grow lg:flex lg:items-center lg:w-auto lg:text-right">
          <div className={`text-sm lg:flex-grow ${toggled ? '':'hidden'} lg:inline`}>
            {headerItems.map((header,index) => {
              const { dynamic,url } = header;
              if(dynamic){
                return (
                  <HeaderLink key={url+index} {...header} className={router.asPath.includes(url) ? 'text-gray-900 border-b-4 border-sajilo' : 'text-gray-700'} />
                )
              }
              return (
                <HeaderLink  key={url+index} {...header} className={router.asPath === url ? 'text-gray-900 border-b-4 border-sajilo':'text-gray-700'} />
              )
            })}
            <Link href="/contact">
              <a className={`inline-block text-sm px-4 py-2 leading-none border rounded ${router.asPath === '/contact' ? ' bg-sajilo text-white' : 'text-gray-700'} hover:border-gray-800 hover:text-white hover:bg-gray-800 mt-4 lg:mt-0`}>Contact</a>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Header
