import cn from 'classnames'
import Link from 'next/link'

type Props = {
  title: string
  src: string
  slug?: string
  shadow?:boolean
  roundedTop?:boolean
  isSmall?:boolean
}

const CoverImage = ({ title, src, slug,shadow,roundedTop,isSmall }: Props) => {
  const image = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      style={{
        maxHeight: isSmall ? '185.33px' : undefined
      }}
      alt={`Cover Image for ${title}`}
      className={cn('w-screen',{'object-cover':isSmall}, {'shadow-small ':shadow}, {
        'hover:shadow-medium transition-shadow duration-200': slug,
      },{'rounded-t-lg':roundedTop},{'rounded-lg':!roundedTop})}
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
