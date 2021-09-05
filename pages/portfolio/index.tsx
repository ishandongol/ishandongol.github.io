import Container  from "../../components/container"
import Layout from "../../components/layout"
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import PostTitle  from '../../components/post-title'
import { getAllPortfolios } from "../../lib/api"
import Post from '../../types/post'
import MorePortfolio from '../../components/more-stories'
import Breadcrumb from '../../components/breadcrumbs'
type Props = {
    allPosts: Post[]
  }

const Portfolio = ({allPosts}:Props) => {
  const pageTitle = 'Portfolio'
    return(
       <>
       <Layout>
       <Head>
          <title>{pageTitle} | {CMS_NAME}</title>
        </Head>
           <Container>
           <Breadcrumb items={[
                {title:'Home',url:'/'},
                {title:pageTitle,url:`/portfolio`},
              ]}/>
               <PostTitle subTitle="Creations that might interest you.">{pageTitle}</PostTitle>
          {allPosts.length > 0 && <MorePortfolio posts={allPosts.sort((a,b) => parseInt(a.order||'0',10) <  parseInt(b.order||'0',10) ? -1:1
          )} />}
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
      'order',
      'role',
      'coverImage',
      'excerpt',
    ])
  
    return {
      props: { allPosts },
    }
  }