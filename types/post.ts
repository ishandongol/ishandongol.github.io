import Author from './author'

type PostType = {
  slug: string
  title: string
  subTitle:string
  date: string
  coverImage: string
  author: Author
  excerpt: string
  privacyPolicy: boolean
  ogImage: {
    url: string
  }
  content: string
}

export default PostType
