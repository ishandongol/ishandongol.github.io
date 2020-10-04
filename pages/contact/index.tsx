import Container from "../../components/container"
import Layout from "../../components/layout"
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import PostTitle from '../../components/post-title'
import Breadcrumb from '../../components/breadcrumbs'
import {Badge} from '../../components/badge'
interface Social{
   icon:string;
   link:string;
   id:string;
}
const social:Social[] = [
   {
       "icon": "facebook-square",
       "link": "https://www.facebook.com/dongol.ishan",
       "id": "dongol.ishan"
   },
   {
       "icon": "instagram",
       "link": "https://www.instagram.com/is.an.official/",
       "id": "is.an.official"
   },
   {
       "icon": "twitter-square",
       "link": "https://twitter.com/lognod",
       "id": "lognod"
   },
   {
       "icon": "github",
       "link": "https://github.com/ishandongol",
       "id": "ishandongol"
   },
   {
       "icon": "linkedin",
       "link": "https://www.linkedin.com/in/lognod/",
       "id": "lognod"
   }
]
const Contact = () => {
   const pageTitle = 'Contact'
   return (
      <>
         <Layout>
            <Head>
               <title>{pageTitle} | {CMS_NAME}</title>
            </Head>
            <Container>
               <Breadcrumb items={[
                  { title: 'Home', url: '/' },
                  { title: pageTitle, url: `/contact` },
               ]} />
               <PostTitle subTitle="Just a click away.">{pageTitle}</PostTitle>
               <div className="bg-white mt-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-xl rounded-lg shadow-sm hover:shadow-medium mx-auto mb-20">
                  <div className="relative h-40">
                     <img className="absolute h-full w-full object-cover" src="/assets/media/smart-panas.png" />
                  </div>
                  <div className="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
                     <img className="object-cover w-full h-full" src="/assets/media/ishan.jpg" />
                  </div>
                  <div className="mt-16">
                     <h1 className="text-lg text-center font-semibold">
                        Ishan Dongol
        </h1>
        <h2 className="text-lg text-center font-medium">ईशान डंगोल</h2>
                     <p className="text-sm text-gray-600 text-center">
                        ishandongol@gmail.com
        </p>
        <p className="text-sm text-gray-600 text-center font-bold">
                        +977-9860299228
        </p>
                  </div>
                  <div className="mt-6 pt-3 md:flex md:flex-wrap mx-6 border-t text-center">
                  {social.map((profile) => {
                     return(
                      <a href={profile.link} className="mr-2 my-6 md:my-3 block md:flex-auto w-full md:w-auto" target="_blank" rel="noreferrer noopener"><Badge key={profile.link} color="bg-gray-200 text-gray-700" ><i className={`lab la-${profile.icon}`}> </i> {profile.id}</Badge> </a>
                     )
                  })}
                  </div>
               </div>
            </Container>
         </Layout>
      </>
   )
}

export default Contact