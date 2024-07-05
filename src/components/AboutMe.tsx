import React from 'react';

interface AboutMeProps {
  imagePath: string;
  zennLink: string;
  aboutTitle: string;
  aboutText1: string;
  aboutText2: string;
};

const AboutMe: React.FC<AboutMeProps> = ({ imagePath, zennLink, aboutTitle, aboutText1, aboutText2 }) => {
  const base = process.env.GITHUB_PAGES ? '/portfolio-app' : './';

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
          <a
            href={zennLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4"
          >
            <img src={`${base}/zenn-logo.png`} alt="zenn-logo" width="80px" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
