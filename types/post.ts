import Author from './author'

type PostType = {
  slug: string
  title: string
  subTitle:string
  date: string
  coverImage: string
  order: string
  role:string
  tag: string[]
  teamMembers: string[]
  duration: string
  author: Author
  excerpt: string
  privacyPolicy: boolean
  ogImage: {
    url: string
  }
  content: string
}

export default PostType
