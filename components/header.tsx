import Link from 'next/link'
import Container from '../components/container'
import {useRouter} from 'next/router'

interface HeaderProps {
  className?: string
}
interface HeaderItem {
  url: string;
  title: string;
  dynamic?:boolean;
}
const headerItems: HeaderItem[] = [
  { url: '/', title: 'Home' },
  { url: '/experience', title: 'Experience' },
  { url: '/portfolio', title: 'Portfolio',dynamic:true },
  { url: '/portfolio/dynamic-routing', title: 'Sajilo Recharge' },
]
const Header: React.FC<HeaderProps> = ({ className }) => {
  const router = useRouter()
  return (
    <nav className={`flex items-center justify-between flex-wrap p-6 ${className || ''}`}>
      <Container>
      {/* <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <a className="hover:underline h-8 subpixel-antialiased ">{'< ईशान डंगोल />'}</a>
        </Link>
      </div> */}
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-700 border-gray-700 hover:text-gray-800 hover:border-gray-800">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div className="block flex-grow lg:flex lg:items-center lg:w-auto text-right">
        <div className="text-sm lg:flex-grow">
          {headerItems.map((header) => {
            const { url, title, dynamic } = header;
            return (
              <Link href={url}>
                <a className={`block mt-4 lg:inline-block lg:mt-0 hover:text-gray-800 mr-4 ${dynamic ? (router.asPath.includes(url) ? 'text-gray-900 border-b-4 border-blue-500' : 'text-gray-700') : router.asPath === url ? 'text-gray-900 border-b-4 border-blue-500':'text-gray-700'}`}>
                  {title}
                </a>
              </Link>
            )
          })}
          <Link href="/contact">
          <a className={`inline-block text-sm px-4 py-2 leading-none border rounded ${router.asPath === '/contact' ? ' bg-blue-500 text-white':'text-gray-700'} hover:border-gray-800 hover:text-white hover:bg-gray-800 mt-4 lg:mt-0`}>Contact</a>
        </Link>
        </div>
      </div>
      </Container>
    </nav>
  )
}

export default Header
