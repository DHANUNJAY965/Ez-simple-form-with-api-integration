import React from 'react';

const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-blue-900 text-white p-8 rounded-lg shadow-md">
    <div className="flex items-center space-x-4">
      <div>{icon}</div>
      <div className="text-xl font-semibold">{title}</div>
    </div>
    <div className="mt-4">{description}</div>
  </div>
);

export default ServiceCard;
