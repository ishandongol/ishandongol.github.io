import Container  from "../../components/container"
import Layout from "../../components/layout"
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import PostTitle  from '../../components/post-title'
const Contact = () => {
    return(
       <>
       <Layout>
       <Head>
          <title>Contact | {CMS_NAME}</title>
        </Head>
           <Container>
           <PostTitle>Contact</PostTitle>
           </Container>
       </Layout>
       </>
    )
}

export default Contact