import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      image: 'project1.jpg',
      liveLink: 'https://live-project1.com',
      repoLink: 'https://github.com/james/project1',
    },
    {
      title: 'Project 2',
      image: 'project2.jpg',
      liveLink: 'https://live-project2.com',
      repoLink: 'https://github.com/james/project2',
    },
    // Add more projects
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
