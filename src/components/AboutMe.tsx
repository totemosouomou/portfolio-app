import React from 'react';

interface AboutMeProps {
  imagePath: string;
  aboutTitle: string;
  aboutText1: string;
  aboutText2: string;
};

const AboutMe: React.FC<AboutMeProps> = ({ imagePath, aboutTitle, aboutText1, aboutText2 }) => {
  return (
    <section id="about" className="bg-gray-100 bg-opacity-75 py-12">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src={imagePath}
            width={500}
            height={500}
            alt="Profile Image"
            className="mx-auto rounded-full w-64 h-64 object-cover"
          />
        </div>
        <div className="space-y-4 mx-2">
          <h2 className="text-3xl font-bold">{aboutTitle}</h2>
          <p className="text-muted-foreground text-sm">
            {aboutText1}
          </p>
          <p className="text-muted-foreground text-sm">
            {aboutText2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
