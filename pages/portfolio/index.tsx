import Container  from "../../components/container"
import Layout from "../../components/layout"
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import PostTitle  from '../../components/post-title'

const Portfolio = () => {
    return(
       <>
       <Layout>
       <Head>
          <title>Portfolio | {CMS_NAME}</title>
        </Head>
           <Container>
               <PostTitle>Portfolio</PostTitle>
           </Container>
       </Layout>
       </>
    )
}

export default Portfolio