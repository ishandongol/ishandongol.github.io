import Link from 'next/link'

export const HeaderLogo:React.FC = () => {
    return(
        <Link href="/">
          <a className="hover:underline h-8 subpixel-antialiased text-sajilo "><span className="text-sajilo-yellow mr-1">{'<'}</span>{'ईशान डंगोल'}<span className="text-sajilo-yellow ml-1">{'/>'}</span></a>
        </Link>
    )
}

export default HeaderLogo