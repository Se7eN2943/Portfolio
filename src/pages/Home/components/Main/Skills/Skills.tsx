import { FC } from 'react'

import CSSLogo from '../../../../../assets/img/CSSLogo.png'
import GitLogo from '../../../../../assets/img/GitLogo.png'
import HTMLLogo from '../../../../../assets/img/HTMLLogo.png'
import JSLogo from '../../../../../assets/img/JSLogo.png'
import SASSLogo from '../../../../../assets/img/SASSLogo.png'
import ReactLogo from '../../../../../assets/img/ReactLogo.png'
import ReduxLogo from '../../../../../assets/img/ReduxLogo.png'

const SkillSquer = (props: { logo: string, title: string }) => {
  const { logo, title } = props
  return (
    <div className="main_skills__squer">
      <div className="skill_logo">
        <img className="skill_logo__img" src={logo} alt="" />
      </div>
      <div className="skill_title">
        {title}
      </div>
    </div>
  )
}



const Skills: FC = () => {

  return (
    <div className="main_skills">
      <SkillSquer logo={CSSLogo} title='CSS 3' />
      <SkillSquer logo={HTMLLogo} title='HTML 5' />
      <SkillSquer logo={JSLogo} title='JavaScript ES6' />
      <SkillSquer logo={SASSLogo} title='SASS/SCSS' />
      <SkillSquer logo={ReactLogo} title='React JS/TS' />
      <SkillSquer logo={ReduxLogo} title='Redux/Redux Tool Kit' />
      <SkillSquer logo={GitLogo} title='Git Hub/Git Lub' />
    </div>


  )
}

export default Skills
