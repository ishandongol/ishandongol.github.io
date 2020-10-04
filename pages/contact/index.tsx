import Container  from "../../components/container"
import Layout from "../../components/layout"
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import PostTitle  from '../../components/post-title'
import Breadcrumb  from '../../components/breadcrumbs'
const Contact = () => {
   const pageTitle = 'Contact'
    return(
       <>
       <Layout>
       <Head>
          <title>{pageTitle} | {CMS_NAME}</title>
        </Head>
           <Container>
           <Breadcrumb items={[
                {title:'Home',url:'/'},
                {title:pageTitle,url:`/contact`},
              ]}/>
           <PostTitle>{pageTitle}</PostTitle>
           </Container>
       </Layout>
       </>
    )
}

export default Contact