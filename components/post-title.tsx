import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  subTitle?: ReactNode
}

const PostTitle = ({ children,subTitle }: Props) => {
  return (
    <div className="mb-12">
      <h1 className="text-6xl text-sajilo md:text-7xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none  text-center md:text-left ">
      {children}
    </h1>
  {subTitle && <p className="text-lg pl-1 pt-2 text-center md:text-left text-gray-500">{subTitle}</p>}
    </div>
  )
}

export default PostTitle
