import Container from "../../components/container"
import Layout from "../../components/layout"
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import PostTitle from '../../components/post-title'
import Breadcrumb from '../../components/breadcrumbs'
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
               <div className="bg-white mt-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-lg rounded-lg shadow-sm hover:shadow-medium mx-auto mb-20">
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
        <p className="text-sm text-gray-600 text-center">
                        +977-9860299228
        </p>
                  </div>
                  <div className="mt-6 pt-3 flex flex-wrap mx-6 border-t">
                     <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
                        User experience
        </div>
                     <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
                        VueJS
        </div>
                     <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
                        TailwindCSS
        </div>
                     <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
                        React
        </div>
                     <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
                        Painting
        </div>
                  </div>
               </div>
            </Container>
         </Layout>
      </>
   )
}

export default Contact