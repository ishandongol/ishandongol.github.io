import Container from './container'
import {skills} from '../lib/constants'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <div  className=" lg:w-3/4">
          <h3 className="text-3xl lg:text-5xl font-bold tracking-tighter text-sajilo leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4">
           the full stack developer you would <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-10 w-10 inline-block text-sajilo-yellow">
  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
</svg> to work with.
          </h3>
          <div className="inline-flex">
          {skills.map((skill) =>{
  return(
    <i className={`flex-1 text-gray-700 text-center pr-4 pt-6 text-6xl lab la-${skill.name}`}></i>
  )
})}
          </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/4">
            <Link href="/contact">
            <a
              className="mx-3 bg-sajilo hover:bg-white hover:text-sajilo border border-sajilo text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 rounded"
            >
              Contact Now
            </a>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
