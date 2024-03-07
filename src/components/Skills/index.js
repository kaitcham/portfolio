import React from 'react';
import Wrapper from './SkillsStyles';
import JavaScriptIcon, {
  NestJSIcon,
  TypeScriptIcon,
  TailwindIcon,
  GraphqlIcon,
  ReactIcon,
  NodeIcon,
  PostgressIcon,
} from '../../assets/icons';

const Skills = () => (
  <Wrapper id="skills" className="container">
    <h2>Skills</h2>
    <div className="skill-items">
      <TailwindIcon />
      <JavaScriptIcon />
      <TypeScriptIcon />
      <ReactIcon />
      <NodeIcon />
      <NestJSIcon />
      <GraphqlIcon />
      <PostgressIcon />
    </div>
  </Wrapper>
);

export default Skills;
