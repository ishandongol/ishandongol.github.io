import Container from "../../components/container"
import Layout from "../../components/layout"
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import PostTitle from '../../components/post-title'
import { getAllExperience } from "../../lib/api"
import PostBody from '../../components/post-body'
import TimelineRight from "../../components/timeline-right"
import TimelineLeft from "../../components/timeline-left"
import ExperienceData from "../../types/experience"

interface ExperienceProps {
   data: ExperienceData[];
   content: string;
}

const Experience = ({data}: ExperienceProps) => {
   return (
      <>
         <Layout>
            <Head>
               <title>Experience | {CMS_NAME}</title>
            </Head>
            <Container>
               <PostTitle>Experience</PostTitle>
               <div className="min-h-screen flex justify-center lg:my-24">
                  <div className="w-full mx-auto">
                     {data && data.map((exp,index) => {
                        if(index%2===0){
                        return <TimelineLeft {...exp}/>
                        }
                        return <TimelineRight {...exp}/>

                     })}
                  </div>
               </div>
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