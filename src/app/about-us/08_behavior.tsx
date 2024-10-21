import React from "react";
import Image from "next/image";

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
    name: "Anubhav Srivastava",
    role: "S&T",
    image: "/assets/about-us/leader1.png",
    linkedInUrl: "#",
  },
  {
    name: "Baquer Bengalivala",
    role: "Finance",
    image: "/assets/about-us/leader2.png",
    linkedInUrl: "#",
  },
  {
    name: "Bibhishan Mule",
    role: "Regulatory",
    image: "/assets/about-us/leader3.png",
    linkedInUrl: "#",
  },
  {
    name: "Dheeraj Talreja",
    role: "President",
    image: "/assets/about-us/leader4.png",
    linkedInUrl: "#",
  },
  {
    name: "Dhaval Gandhi",
    role: "Commercial Director",
    image: "/assets/about-us/leader5.png",
    linkedInUrl: "#",
  },
  {
    name: "Preeti Sharma",
    role: "HR Director",
    image: "/assets/about-us/leader6.png",
    linkedInUrl: "#",
  },
  {
    name: "Sameer Gupta",
    role: "Operations Head",
    image: "/assets/about-us/leader7.png",
    linkedInUrl: "#",
  },
  {
    name: "Rakesh Kumar",
    role: "Legal Head",
    image: "/assets/about-us/leader8.png",
    linkedInUrl: "#",
  },
  {
    name: "Rakesh Kumar",
    role: "Legal Head",
    image: "/assets/about-us/leader9.png",
    linkedInUrl: "#",
  },
  {
    name: "Rakesh Kumar",
    role: "Legal Head",
    image: "/assets/about-us/leader10.png",
    linkedInUrl: "#",
  },
  {
    name: "Rakesh Kumar",
    role: "Legal Head",
    image: "/assets/about-us/leader11.png",
    linkedInUrl: "#",
  },
  {
    name: "Rakesh Kumar",
    role: "Legal Head",
    image: "/assets/about-us/leader12.png",
    linkedInUrl: "#",
  },
];

const LeadershipTeam: React.FC = () => {
  return (
    <div className="bg-white py-16 px-6 lg:px-24">
      {/* Header Section */}
      <div className="w-container xlg:max-w-screen-xl max-w-screen-lg gsap-fade-in text-center">
        <h2 className="text-4xl text-blue">
          <span className="text-blue font-worksans">The</span>{" "}
          <span className="text-blue font-playfairSemibold">
            India Leadership
          </span>{" "}
          <span className="text-blue font-worksans">Team</span>
        </h2>
        <p className="mt-2 text-blue font-worksans">
          The minds shaping our future
        </p>
        <p className="mt-6 font-worksans max-w-2xl mx-auto">
          Together, the leadership team is actualizing our commitments to
          excellence, innovation, and sustainability within the walls of AAK
          India, South Asia, and Sub-Saharan Africa.
        </p>
      </div>

      {/* Scrolling Team Members with Custom Scrollbar */}
      <div className="relative mt-12">
  {/* Outer container with scrollbar */}
  <div className="overflow-x-auto custom-scrollbar">
    {/* Inner container with team cards */}
    <div className="flex space-x-8 whitespace-nowrap">
      {leadershipTeam.map((member, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-sm text-center min-w-[250.26px] max-w-[250.26px] h-[380.38px]"
        >
          {/* Team Member Image */}
          <Image
            src={member.image}
            alt={member.name}
            width={1000}
            height={1000}
            className="object-cover rounded-lg"
          />

          {/* Name and LinkedIn Icon */}
          <div className="flex items-center justify-between mt-4">
            <h3 className="text-xl font-playfairSemibold text-gray-800">
              {member.name}
            </h3>
            <a
              href={member.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn profile of ${member.name}`}
            >
              <Image
                src="/assets/about-us/linkedIn.png" // Replace with actual LinkedIn icon path
                alt="LinkedIn"
                width={24} // Adjust width and height if needed
                height={24}
                className="w-6 h-6"
              />
            </a>
          </div>

          {/* Role */}
          <p className="mt-2 font-worksans text-left px-0">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  );
};

export default LeadershipTeam;
