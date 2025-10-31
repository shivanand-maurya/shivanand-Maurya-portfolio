import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const projects = [
  { name: 'Project 1', description: 'A brief description of project 1.', image: '/assets/images/project-placeholder.png' },
  { name: 'Project 2', description: 'A brief description of project 2.', image: '/assets/images/project-placeholder.png' },
  { name: 'Project 3', description: 'A brief description of project 3.', image: '/assets/images/project-placeholder.png' },
  { name: 'Project 4', description: 'A brief description of project 4.', image: '/assets/images/project-placeholder.png' },
  { name: 'Project 5', description: 'A brief description of project 5.', image: '/assets/images/project-placeholder.png' },
  { name: 'Project 6', description: 'A brief description of project 6.', image: '/assets/images/project-placeholder.png' },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map(project => (
            <Card key={project.name}>
              <img src={project.image} alt={project.name} className="rounded-t-lg"/>
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="mb-4">{project.description}</p>
                <Button>View Case Study</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
