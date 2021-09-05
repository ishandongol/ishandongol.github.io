// import Avatar from './avatar'
import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../types/author'
import cn from 'classnames'
import {Badge} from './badge'
type Props = {
  title: string
  coverImage: string
  excerpt: string
  author: Author
  slug: string
  role: string
}

const PostPreview = ({
  title,
  coverImage,
  excerpt,
  // author,
  role,
  slug,
}: Props) => {
  return (
    <Link as={`/portfolio/${slug}`} href="/portfolio/[slug]">
    <div className={cn('shadow cursor-pointer rounded-lg pb-4', {
      'hover:shadow-medium transition-shadow duration-200': slug,
    })}>
      <div className="mb-5">
        <CoverImage isSmall roundedTop title={title} src={coverImage} />
      </div>
      <h3 className="px-5 text-3xl  mb-3 leading-snug">
          <a className="hover:underline font-medium">{title}</a>
      </h3>
      
      <p className="px-5 text-lg leading-relaxed mb-4 text-gray-600">{excerpt}</p>
      <div className="px-5 mb-3">
      {role && <Badge color="bg-gray-200 text-gray-700" className="mr-2 mb-3"><span className="font-light">Role: </span>{role}</Badge>}

      </div>
    </div>
        </Link>
  )
}

export default PostPreview
