import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  subTitle?: ReactNode
  alignLeft?: boolean;
  additionalHeaderClass?: string;
}

const PostTitle = ({ children,subTitle,alignLeft ,additionalHeaderClass}: Props) => {
  return (
    <div className="mb-12">
      <h1 className={`text-6xl text-sajilo md:text-7xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none ${additionalHeaderClass || ''}  ${alignLeft?'text-left':'text-center md:text-left'}`}>
      {children}
    </h1>
  {subTitle && <p className={`text-lg pl-1 pt-2 font-bold ${alignLeft?'text-left':'text-center md:text-left'} text-gray-500`}>{subTitle}</p>}
    </div>
  )
}

export default PostTitle
