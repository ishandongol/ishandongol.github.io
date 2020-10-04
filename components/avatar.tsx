type Props = {
  name: string
  picture: string
  email?: string
}

const Avatar = ({ name, picture,email }: Props) => {
  return (
    <div className="flex items-center">
      <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div>
      <div className="text-xl font-bold">{name}</div>
      <div className="text-sm font-sm text-gray-600">
      <a target="_blank"  rel="noreferrer noopener" href={`mailto:${email || 'ishandongol@gmail.com'}?subject=Contact%20|%20Portfolio%20|%20Blog`}>{email || 'ishandongol@gmail.com'}</a>
      </div>
      </div>
    </div>
  )
}

export default Avatar
