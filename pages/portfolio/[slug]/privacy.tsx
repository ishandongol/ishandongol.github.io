import Container  from "../../../components/container"
import Layout from "../../../components/layout"
import Head from 'next/head'
import { CMS_NAME } from '../../../lib/constants'
import PostTitle  from '../../../components/post-title'
import {useRouter} from 'next/router'

const Privacy = () => {
   const router = useRouter()
   debugger
    return(
       <>
       <Layout>
       <Head>
          <title>Privacy Policy | {CMS_NAME}</title>
        </Head>
           <Container>
           <PostTitle>Privacy Policy</PostTitle>
    <p>{router.query.slug}</p>
           </Container>
       </Layout>
       </>
    )
}

export default Privacy