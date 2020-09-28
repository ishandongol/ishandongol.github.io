import Link from 'next/link'

interface HeaderProps{
  className?:string
}
const Header:React.FC<HeaderProps> = ({className}) => {
  return (
    <header className={`flex items-center justify-between px-4 py-3 ${className}`}>
    <div>
      <Link href="/">
      <a className="hover:underline h-8">{'< ईशान डंगोल />'}</a>
        </Link>
    </div>
    <div>
      <button type="button" className="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
        </svg>
      </button>
    </div>
  </header>
  )
}

export default Header
