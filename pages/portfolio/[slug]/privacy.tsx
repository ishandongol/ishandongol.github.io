import Container  from "../../../components/container"
import Layout from "../../../components/layout"
import Head from 'next/head'
import { CMS_NAME } from '../../../lib/constants'
import PostTitle  from '../../../components/post-title'
import {useRouter} from 'next/router'
import Breadcrumb from '../../../components/breadcrumbs'
import { getAllPortfolios, getPortfolioBySlug } from "../../../lib/api"

type Props = {
   post: {
      title:string,
      slug:string
   }
 }

const Privacy:React.FC<Props> = ({post}) => {
   const {slug,title} = post;
    return(
       <>
       <Layout>
       <Head>
          <title>Privacy Policy | {CMS_NAME}</title>
        </Head>
        
           <Container>
           <Breadcrumb items={[
                {title:'Portfolio',url:'/portfolio'},
                {title:title,url:`/portfolio/${slug}`},
                {title:'Privacy Policy',url:`/portfolio/${slug}/privacy`},
              ]}/>
              <div className="max-w-2xl mx-auto mb-20 pt-10">
           <PostTitle>Privacy Policy</PostTitle>
              <div className="row">
                <div className="col-sm-12">
                    <h3>Privacy Policy</h3>
                    <b>Effective date:</b> April 18, 2017
                    <br />
                    <br />
                    Welcome to {title} (&quot;{title}&quot;,&quot; we&quot;,&quot;us&quot;,
                    or&quot;our&quot;). {title} provides a fast and fun
                    way to recharge your mobile balance. Our app is not like
                    other e-banking app, it is a simple app that scans the pin
                    code from the recharge card with the help of phone rear
                    camera and runs the USSD code as per the carrier. Our app
                    currently support the two top carriers of Nepal, NTC and
                    Ncell. So, with {title} just scan and click Top-Up.
                    <br />
                    <br />
                    <ul>
                        <li>
                            Our Privacy Policy explains what data the app
                            collects and what it does with it.
                        </li>
                        <br />
                        <li>
                            By using our Service, you understand and agree that
                            we are providing a platform for you to recharge your
                            mobile phone with ease and fun. Our app is just a
                            tool that provides the service provided by the
                            Carriers (&quot;Newtork Providers&quot;). So,
                            Problems in the app might be from our side or
                            theirs. Have patience if you find a problem until it
                            is sorted out.
                        </li>
                        <br />
                        <li>
                            Our Policy applies to all visitors, users, and
                            others who access the Service (&quot;Users&quot;).
                        </li>
                        <br />
                    </ul>
                    <br />
                    <br />
                    <b>1. INFORMATION OUR APP COLLECTS</b>
                    <br />
                    <br />
                    <b>Information you provide:</b>
                    <br />
                    <br />
                    <ul>
                        <li>Your phone carrier.</li>
                        <li>
                            The USSD messages after you recharge your balance.
                            (If and only if the accessibility setting is turned
                            on).
                        </li>
                        <li>Collects the scanned pin code</li>
                    </ul>
                    <br />
                    <br />
                    <b>Analytics information:</b>
                    <br />
                    <br />
                    We use third-party analytics tools to help us measure trends
                    and crashes for our app.
                    <br />
                    <br />
                    <br />
                    <b>2. HOW OUR APP USES YOUR INFORMATION</b>
                    <br />
                    <br />
                    Our app collects the above-mentioned information just to
                    function as intended.
                    <br />
                    <br />
                    <ul>
                        <li>
                            collects the current phone carrier just to display
                            the options according to the detected carrier.
                        </li>
                        <li>
                            reads the USSD message to determine if the recharge
                            was successful or it failed.
                        </li>
                        <li>
                            collects the detected pin code so that user can
                            recharge their balance.
                        </li>
                    </ul>
                    <br />
                    <br />
                    <b>3. SHARING AND STORING OF YOUR INFORMATION</b>
                    <br />
                    <br />
                    We do not rent or sell your information to third parties.
                    Also, we do not share the detected pin code to others.
                    <br />
                    <br />
                    <br />
                    <b>4. YOUR CHOICES ABOUT YOUR INFORMATION</b>
                    <br />
                    <br />
                    <b>Accessibility settings:</b>
                    <br />
                    <br />
                    The app works even without the accessibility settings, so
                    you have the option to not enable accessibility settings.
                    <br />
                    <br />
                    <br />
                    <b>5. OTHER APPS AND SERVICES</b>
                    <br />
                    <br />
                    We are not responsible for the practices employed by any
                    websites or services linked to or from our app. Please
                    remember that when you share the pin code via other app, our
                    privacy policy does not apply to those third-party apps or
                    services.
                    <br />
                    <br />
                    <br />
                    <b>6. HOW TO CONTACT US</b>
                    <br />
                    <br />
                    If you have any questions about this Privacy Policy or our
                    app, pleas find the appropriate support channel in the about
                    section of the app.
                    <br />
                    <br />
                    <br />
                    <b>7. CHANGES TO OUR PRIVACY POLICY</b>
                    <br />
                    <br />
                    {title} may modify or update this Privacy Policy
                    from time to time, so please review it periodically. We may
                    provide you additional forms of notice of modifications or
                    updates as appropriate. Your continued use of {title} after any modification to this Privacy Policy will
                    constitute your acceptance of such modification.
                </div>
            </div>
              </div>
           </Container>
       </Layout>
       </>
    )
}

export default Privacy

type Params = {
   params: {
     slug: string
   }
 }

export async function getStaticProps({ params }: Params) {
   const post = getPortfolioBySlug(params.slug, [
     'title',
     'slug',
     "tag",
     'author'
   ])
 
   return {
     props: {
       post: {
         ...post
       },
     },
   }
 }

 export async function getStaticPaths() {
   const posts = getAllPortfolios(['slug'])
 
   return {
     paths: posts.map((posts) => {
       return {
         params: {
           slug: posts.slug,
         },
       }
     }),
     fallback: false,
   }
 }