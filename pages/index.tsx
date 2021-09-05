import Container from '../components/container'
import Intro from '../components/intro'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import HomeLayout from '../components/home-layout'
const Index = () => {
  
  return (
    <>
      <HomeLayout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
        </Container>
      </HomeLayout>
    </>
  )
}

export default Index

