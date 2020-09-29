import Container  from "../../components/container"
import Layout from "../../components/layout"
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import PostTitle  from '../../components/post-title'
import { getAllPortfolios } from "../../lib/api"
import Post from '../../types/post'
import MorePortfolio from '../../components/more-stories'
import HeroPortfolio from '../../components/hero-post'

type Props = {
    allPosts: Post[]
  }

const Portfolio = ({allPosts}:Props) => {
    const heroProtfolio = allPosts.find((post) => post.slug === 'sajilorecharge')
    const morePortfolio = allPosts.filter((post) => post.slug !== 'sajilorecharge')
    return(
       <>
       <Layout>
       <Head>
          <title>Portfolio | {CMS_NAME}</title>
        </Head>
           <Container>
               <PostTitle>Portfolio</PostTitle>
               {heroProtfolio && (
            <HeroPortfolio
              title={heroProtfolio.title}
              coverImage={heroProtfolio.coverImage}
              author={heroProtfolio.author}
              slug={heroProtfolio.slug}
              excerpt={heroProtfolio.excerpt}
            />
          )}
          {morePortfolio.length > 0 && <MorePortfolio posts={morePortfolio} />}
           </Container>
       </Layout>
       </>
    )
}

export default Portfolio

export const getStaticProps = async () => {
    const allPosts = getAllPortfolios([
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