import Container from '../components/container'
import Intro from '../components/intro'
import Header from '../components/header'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'
import HomeLayout from '../components/home-layout'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <HomeLayout>
        <Head>
          <title>Home | {CMS_NAME}</title>
        </Head>
        <Container>
      <Header/>
          <Intro />
        </Container>
      </HomeLayout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
