import cn from 'classnames'
import Link from 'next/link'

type Props = {
  title: string
  src: string
  slug?: string
  shadow?:boolean
  roundedTop?:boolean
}

const CoverImage = ({ title, src, slug,shadow,roundedTop }: Props) => {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('w-screen', {'shadow-small ':shadow}, {
        'hover:shadow-medium transition-shadow duration-200': slug,
      },{'rounded-t-lg':roundedTop})}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/portfolio/${slug}`} href="/portfolio/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
