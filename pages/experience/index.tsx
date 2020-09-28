import Container  from "../../components/container"
import Layout from "../../components/layout"
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'

const Experience = () => {
    return(
       <>
       <Layout>
       <Head>
          <title>Experience | {CMS_NAME}</title>
        </Head>
           <Container>
               Experience
           </Container>
       </Layout>
       </>
    )
}

export default Experience