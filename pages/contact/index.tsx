import Container  from "../../components/container"
import Layout from "../../components/layout"
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'

const Contact = () => {
    return(
       <>
       <Layout>
       <Head>
          <title>Contact | {CMS_NAME}</title>
        </Head>
           <Container>
               Contact
           </Container>
       </Layout>
       </>
    )
}

export default Contact