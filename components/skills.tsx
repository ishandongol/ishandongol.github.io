
import { skills } from '../lib/constants'

const Skills = () => {
  return (
    <div className="mb-12 lg:mb-0 lg:inline-flex text-center">
              {skills.map((skill) => {
                return (
                  <i className={`flex-1 hover:text-sajilo-yellow text-gray-700 text-center pl-2 pr-2 pt-4 lg:pt-6 lg:pl-0 lg:pr-4 text-3xl lg:text-6xl lab la-${skill.name}`}></i>
                )
              })}
            </div>
  )
}

export default Skills
