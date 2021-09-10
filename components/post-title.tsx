import { ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  findIconDefinition
} from '@fortawesome/fontawesome-svg-core'

type Props = {
  children?: ReactNode
  subTitle?: ReactNode
  alignLeft?: boolean;
  url?:string;
  additionalHeaderClass?: string;
}

const PostTitle = ({ children,subTitle,alignLeft=true ,additionalHeaderClass,url}: Props) => {
  return (
    <div className="mb-12">
      <h1 className={`text-6xl text-sajilo md:text-7xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none ${additionalHeaderClass || ''}  ${alignLeft?'text-left':'text-center md:text-left'}`}>
       { url ? <a href={url} target="_blank" rel="noreferrer">{children}
       <FontAwesomeIcon icon={findIconDefinition({prefix:'fas',iconName:'external-link-alt' as any})} className="ml-4 mb-2 text-sm text-gray-500"/>
       <i className="ml-2 las la-external-link-alt text-4xl text-gray-500"/>

</a> : children}
    </h1>
  {subTitle && <p className={`text-lg pl-1 pt-2 font-bold ${alignLeft?'text-left':'text-center md:text-left'} text-gray-500`}>{subTitle}</p>}
    </div>
  )
}

export default PostTitle
