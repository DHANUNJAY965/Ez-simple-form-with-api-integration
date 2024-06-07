import React from 'react';
import ServiceCard from './ServiceCard';
import { FiFilm, FiFileText, FiBarChart2, FiCpu, FiGlobe, FiPenTool } from 'react-icons/fi';

const Services = () => {
  const services = [
    { title: 'Presentation Design', description: 'Lorem ipsum dolor sit amet...', icon: <FiFileText /> },
    { title: 'Audio - Visual Production', description: 'Lorem ipsum dolor sit amet...', icon: <FiFilm /> },
    { title: 'Translation Services', description: 'Lorem ipsum dolor sit amet...', icon: <FiGlobe /> },
    { title: 'Graphic Design', description: 'Lorem ipsum dolor sit amet...', icon: <FiPenTool /> },
    { title: 'Research & Analytics', description: 'Lorem ipsum dolor sit amet...', icon: <FiBarChart2 /> },
    { title: 'Data Processing', description: 'Lorem ipsum dolor sit amet...', icon: <FiCpu /> },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-10">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default Services;
