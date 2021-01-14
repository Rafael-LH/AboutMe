import React from 'react'
import SkillsComponent from './SkillsComponent'
import skillData from '../utilities/skills.json'

const Skills = () => (
  <>
    <div className="container-title-skills" id="skills">
      <h1 className='skills-title'>Skills</h1>
    </div>
    <div className="container-skills">
      <SkillsComponent className="frontend" title="Front-end" data={skillData.front} />
      <SkillsComponent className="backend" title="Back-end" data={skillData.back} />
      <SkillsComponent className="backend" title="Methodology" data={skillData.methodology} />
    </div>
  </>
)

export default Skills