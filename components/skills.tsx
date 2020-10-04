
import { skills } from '../lib/constants'

const Skills = ({ star, containerClassName, iconClassName }: { star?: boolean, containerClassName?: string, iconClassName?: string }) => {
  const filteredSkills = star ? skills.filter((skill) => skill.star) : skills
  return (
    <div className={`${containerClassName || 'mb-12 lg:mb-0 lg:inline-flex text-center'}`}>
      {filteredSkills.map((skill) => {
        return (
          <i className={`${iconClassName || 'flex-1 hover:text-sajilo-yellow text-gray-700 text-center pl-2 pr-2 pt-4 lg:pt-6 lg:pl-0 lg:pr-4 text-3xl lg:text-6xl'} lab la-${skill.name}`}></i>
        )
      })}
    </div>
  )
}

export default Skills
