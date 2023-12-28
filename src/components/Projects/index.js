import React from 'react';
import { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From Eat-ease to FinURL. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton active={toggle === 'allprojects'} value="allprojects" onClick={() => setToggle('allprojects')}>
            All Projects
          </ToggleButton>
          {/* Comment out the other sections
          <ToggleButton active={toggle === 'web app'} value="web app" onClick={() => setToggle('web app')}>
            WEB APP'S
          </ToggleButton>
          <ToggleButton active={toggle === 'android app'} value="android app" onClick={() => setToggle('android app')}>
            ANDROID APP'S
          </ToggleButton>
          <ToggleButton
            active={toggle === 'machine learning'}
            value="machine learning"
            onClick={() => setToggle('machine learning')}
          >
            MACHINE LEARNING
          </ToggleButton>
          */}
        </ToggleButtonGroup>
        <Divider />
        <CardContainer>
          {projects
            .filter((item) => toggle === 'all' || item.category === toggle)
            .map((project) => (
              <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
