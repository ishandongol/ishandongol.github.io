import Link from 'next/link'
import Container from '../components/container'
import { useRouter } from 'next/router'
import { useState } from 'react'
import HeaderLogo from './header-logo'

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
    <nav className={`z-10 flex items-center font-bold justify-between flex-wrap  pt-5 pb-5 lg:p-6 ${className || ''} sticky top-0 bg-white`}>
      <Container>
        
        <div className="flex lg:hidden">
        <div className="flex-auto text-left py-1 text-xl">
          <HeaderLogo/>
          </div>
          <button onClick={()=>{
            setToggled(!toggled)
          }} className="flex items-center px-3 py-2 border rounded text-gray-700 border-sajilo-yellow hover:text-gray-800 hover:border-gray-800 font-bold">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
          
        </div>
        <div className="inline flex-grow lg:flex lg:items-center lg:w-auto lg:text-right">
        <div className="lg:inline-block lg:align-middle hidden text-2xl">
        <HeaderLogo/>
        </div>
          <div className={`text-sm lg:flex-grow ${toggled ? '':'hidden'} lg:inline`}>
            {headerItems.map((header,index) => {
              const { dynamic,url } = header;
              if(dynamic){
                return (
                  <HeaderLink key={url+index} {...header} className={router.asPath.includes(url) ? 'text-gray-900 border-b-2 py-1 border-sajilo-yellow' : 'text-gray-700'} />
                )
              }
              return (
                <HeaderLink  key={url+index} {...header} className={router.asPath === `${url}/` || router.asPath === `${url}` ? 'text-gray-900 border-b-2 py-1 border-sajilo-yellow':'text-gray-700'} />
              )
            })}
            <a href="https://ishandongol.github.io/ishan_dongol_2018.pdf" target="_blank" className="inline-block text-sm px-4 py-2 leading-none border-2 rounded-full mr-4 hover:shadow-md text-gray-700"  rel="noreferrer noopener" >Résumé</a>
            <Link href="/contact">
              <a className={`inline-block text-sm px-4 py-2 leading-none border-2 border-sajilo-yellow rounded-full ${router.asPath === '/contact' || router.asPath === '/contact/' ? ' bg-sajilo-yellow text-sajilo' : 'text-gray-700'} hover:shadow-md mt-4 lg:mt-0`}>Contact</a>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Header
