import React from 'react';

// Define types for team members
interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedInUrl: string;
}

// Leadership team data
const leadershipTeam: TeamMember[] = [
  {
    name: 'Anubhav Srivastava',
    role: 'S&T',
    image: '/path-to-image-1.jpg', // Replace with actual image path
    linkedInUrl: '#',
  },
  {
    name: 'Baquer Bengalivala',
    role: 'Finance',
    image: '/path-to-image-2.jpg', // Replace with actual image path
    linkedInUrl: '#',
  },
  {
    name: 'Bibhishan Mule',
    role: 'Regulatory',
    image: '/path-to-image-3.jpg', // Replace with actual image path
    linkedInUrl: '#',
  },
  {
    name: 'Dheeraj Talreja',
    role: 'President',
    image: '/path-to-image-4.jpg', // Replace with actual image path
    linkedInUrl: '#',
  },
  {
    name: 'Dhaval Gandhi',
    role: 'Commercial Director',
    image: '/path-to-image-5.jpg', // Replace with actual image path
    linkedInUrl: '#',
  },
  {
    name: 'Preeti Sharma',
    role: 'HR Director',
    image: '/path-to-image-6.jpg', // Replace with actual image path
    linkedInUrl: '#',
  },
  {
    name: 'Sameer Gupta',
    role: 'Operations Head',
    image: '/path-to-image-7.jpg', // Replace with actual image path
    linkedInUrl: '#',
  },
  {
    name: 'Rakesh Kumar',
    role: 'Legal Head',
    image: '/path-to-image-8.jpg', // Replace with actual image path
    linkedInUrl: '#',
  },
];

const LeadershipTeam: React.FC = () => {
  return (
    <div className="bg-white py-16 px-6 lg:px-24">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-blue-700">
          The <span className="text-blue-900">India Leadership</span> Team
        </h2>
        <p className="mt-2 text-gray-500 text-lg">The minds shaping our future</p>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Together, the leadership team is actualizing our commitments to excellence, innovation, and sustainability within the walls of AAK
          India, South Asia, and Sub-Saharan Africa.
        </p>
      </div>

      {/* Scrolling Team Members with Custom Scrollbar */}
      <div className="mt-12 overflow-x-auto custom-scrollbar">
        <div className="flex space-x-8">
          {leadershipTeam.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-sm text-center min-w-[200px] max-w-[200px]"
            >
              {/* Team Member Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-40 object-cover rounded-lg"
              />

              {/* Name and Role */}
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="mt-2 text-gray-500">{member.role}</p>

              {/* LinkedIn Icon */}
              <a href={member.linkedInUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src="/path-to-linkedin-icon.svg" // Replace with actual LinkedIn icon path
                  alt="LinkedIn"
                  className="w-6 h-6 mt-4 mx-auto"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeam;
