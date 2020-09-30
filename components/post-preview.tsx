// import Avatar from './avatar'
import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../types/author'
import cn from 'classnames'

type Props = {
  title: string
  coverImage: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  excerpt,
  // author,
  slug,
}: Props) => {
  return (
    <Link as={`/portfolio/${slug}`} href="/portfolio/[slug]">
    <div className={cn('shadow-small px-4 py-5 cursor-pointer', {
      'hover:shadow-medium transition-shadow duration-200': slug,
    })}>
      <div className="mb-5">
        <CoverImage title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
          <a className="hover:underline">{title}</a>
      </h3>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      {/* <Avatar name={author.name} picture={author.picture} /> */}
    </div>
        </Link>
  )
}

export default PostPreview
