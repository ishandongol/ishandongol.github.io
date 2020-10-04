import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../../components/container'
import PostBody from '../../../components/post-body'
import PostHeader from '../../../components/post-header'
import Layout from '../../../components/layout'
import { getPortfolioBySlug, getAllPortfolios } from '../../../lib/api'
import PostTitle from '../../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../../lib/constants'
import markdownToHtml from '../../../lib/markdownToHtml'
import PostType from '../../../types/post'
import Link from 'next/link'
import Breadcrumb from '../../../components/breadcrumbs'
type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | {CMS_NAME}
                </title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <Breadcrumb items={[
                {title:'Portfolio',url:'/portfolio'},
                {title:post.title,url:`/portfolio/${post.slug}`},
              ]}/>
              <PostHeader
                title={post.title}
                subTitle={post.subTitle}
                coverImage={post.coverImage}
                author={post.author}
              />
              <PostBody content={post.content} />
              {post.privacyPolicy && <Link href="/portfolio/sajilorecharge/privacy"><a className={'ml-4'}>Privacy Policy</a></Link>}
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPortfolioBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'privacyPolicy',
    'coverImage',
    'subTitle'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
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
