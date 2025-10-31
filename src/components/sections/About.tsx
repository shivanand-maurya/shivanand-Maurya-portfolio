import React from 'react';
import Card from '../ui/Card';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <img src="/assets/images/profile-placeholder.png" alt="Shivanand Maurya" className="rounded-full mx-auto w-64 h-64 object-cover"/>
          </div>
          <div className="md:col-span-2">
            <Card>
              <p className="text-lg">
                3+ years in Full-Stack Development, Automation, and Web Technologies. Skilled in Java, Python, PowerShell, ServiceNow, React, Spring, Docker, Kubernetes, Power BI, and cloud platforms (Azure/AWS). Passionate about building automation that simplifies workflows and creating motivational tech content.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
