import Container from "../../components/container"
import Layout from "../../components/layout"
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import PostTitle from '../../components/post-title'
import { getAllExperience } from "../../lib/api"
import PostBody from '../../components/post-body'
import TimelineRight from "../../components/timeline-right"
import TimelineLeft from "../../components/timeline-left"

interface ExperienceProps {
   data: any;
   content: string;
}
const Experience = (props: ExperienceProps) => {
   return (
      <>
         <Layout>
            <Head>
               <title>Experience | {CMS_NAME}</title>
            </Head>
            <Container>
               <PostTitle>Experience</PostTitle>
               <div className="min-h-screen flex justify-center">
                  <div className="w-2/3 mx-auto">
                  {/* <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-sajilo-yellow leading-none text-center z-10 bg-white font-thin">
        </div> */}
                  {/**repeat */}
                     <TimelineLeft/>
                     <TimelineRight/>
                  {/** till here */}
                  </div>
               </div>
               <PostBody content={props.content} />
            </Container>
         </Layout>
      </>
   )
}

export default Experience

export const getStaticProps = async () => {
   const { data, content } = getAllExperience()

   return {
      props: { data, content },
   }
}