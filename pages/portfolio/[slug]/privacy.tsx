import Container  from "../../../components/container"
import Layout from "../../../components/layout"
import Head from 'next/head'
import { CMS_NAME } from '../../../lib/constants'
import PostTitle  from '../../../components/post-title'
import {useRouter} from 'next/router'
import Breadcrumb from '../../../components/breadcrumbs'
const Privacy = () => {
   const router = useRouter()
   const {slug} = router.query;
    return(
       <>
       <Layout>
       <Head>
          <title>Privacy Policy | {CMS_NAME}</title>
        </Head>
        
           <Container>
           <Breadcrumb items={[
                {title:'Portfolio',url:'/portfolio'},
                {title:'Sajilo Recharge',url:`/portfolio/${slug}`},
                {title:'Privacy Policy',url:`/portfolio/${slug}/privacy`},
              ]}/>
           <PostTitle>Privacy Policy</PostTitle>
    <p>{slug}</p>
           </Container>
       </Layout>
       </>
    )
}

export default Privacy