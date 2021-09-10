
import { skills } from '../lib/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  findIconDefinition
} from '@fortawesome/fontawesome-svg-core'
const Skills = ({ star, containerClassName, iconClassName }: { star?: boolean, containerClassName?: string, iconClassName?: string }) => {
  const filteredSkills = star ? skills.filter((skill) => skill.star) : skills
  return (
    <div className={`${containerClassName || 'mb-12 lg:mb-0 lg:inline-flex text-center'}`}>
      {filteredSkills.map((skill,index) => {
        return (
          <FontAwesomeIcon key={skill.name+index} className={`${iconClassName || 'flex-1 hover:text-sajilo-yellow text-gray-700 text-center pl-2 pr-2 pt-4 lg:pt-6 lg:pl-0 lg:pr-6 text-6xl lg:text-7xl'}`} icon={findIconDefinition({prefix:'fab',iconName:skill.name as any})}/>
        )
      })}
    </div>
  )
}

export default Skills
