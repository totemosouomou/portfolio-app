import React from 'react';

interface SkillsProps {
  milestones: string[];
};

const Skills: React.FC<SkillsProps> = ({ milestones }) => {

  const skillsData = [
    {
      name: 'Linux',
      description: 'Experienced in using Linux, particularly Windows Subsystem for Linux (Ubuntu).',
      svgPath: (
        <>
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </>
      ),
    },
    {
      name: 'React',
      description: 'Experienced in building web applications with React.',
      svgPath: (
        <>
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
          <line x1="12" x2="12" y1="22" y2="15.5"></line>
          <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
          <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
          <line x1="12" x2="12" y1="2" y2="8.5"></line>
        </>
      ),
    },
    {
      name: 'Laravel',
      description: 'Experienced in building server-side applications with Laravel.',
      svgPath: (
        <>
          <rect x="16" y="16" width="6" height="6" rx="1"></rect>
          <rect x="2" y="16" width="6" height="6" rx="1"></rect>
          <rect x="9" y="2" width="6" height="6" rx="1"></rect>
          <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
          <path d="M12 12V8"></path>
        </>
      ),
    },
    {
      name: 'MySQL',
      description: 'Experienced in designing and implementing relational databases.',
      svgPath: (
        <>
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
          <path d="M3 12A9 3 0 0 0 21 12"></path>
        </>
      ),
    },
  ];

  return (
    <section className="bg-background bg-white py-12" id="skills">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <div key={index} className="bg-gray-100 bg-opacity-75 rounded-lg p-4 flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 mb-2"
              >
                {skill.svgPath}
              </svg>
              <h3 className="text-lg font-bold">{skill.name}</h3>
              <p className="text-muted-foreground text-sm">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
        <ul className="pt-10 pl-10 w-full pr-0">
          {milestones.map((milestone, index) => (
            <li key={index}>{milestone}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;