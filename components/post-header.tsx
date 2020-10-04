import Avatar from './avatar'
import CoverImage from './cover-image'
import {Badge} from './badge'
import PostTitle from './post-title'
import Author from '../types/author'

type Props = {
  title: string
  subTitle?:string
  coverImage: string
  // date: string
  author: Author
  duration?: string
  role?: string
  teamMembers?: string[]
}

const PostHeader = ({ title, coverImage, author,subTitle,duration ,role,teamMembers}: Props) => {
  return (
    <>
      <PostTitle alignLeft subTitle={subTitle}>{title}</PostTitle>
      {(role || duration) && <div className="mb-8 md:mb-12 flex flex-wrap">
      {role && <Badge color="bg-gray-200 text-gray-700" className="mr-2 mb-3"><span className="font-light">Role: </span>{role}</Badge>}
      {duration && <Badge color="bg-gray-200 text-gray-700" className="mr-2 mb-3"><span className="font-light">Duration: </span>{duration}</Badge>}
      {teamMembers && teamMembers.length > 0 && <Badge color="bg-gray-200 text-gray-700" className="mr-2 mb-3"><span className="font-light">Team: </span>{teamMembers.length}</Badge>}
      </div>}
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage shadow title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        {/* <div className="mb-6 text-lg">
          <DateFormater dateString={date} />
        </div> */}
      </div>
    </>
  )
}

export default PostHeader
