import React, { useState, useEffect, useRef } from 'react';
import styles from '../App.module.scss';

interface ProjectsProps {
  id: string;
  title: string;
  appName: string;
  image1: string;
  image2: string;
  description: string;
  comment: string;
};

const Projects: React.FC<ProjectsProps> = ({ id, title, appName, image1, image2, description, comment }) => {
  const [isHovered, setIsHovered] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      const resizeTextarea = () => {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
      };

      resizeTextarea();
      textarea.addEventListener('input', resizeTextarea);
      window.addEventListener('resize', resizeTextarea);

      return () => {
        textarea.removeEventListener('input', resizeTextarea);
        window.removeEventListener('resize', resizeTextarea);
      };
    }
  }, []);

  return (
    <section className="bg-background bg-white pt-16 pb-8 my-4" id={id}>
      <h2 className="text-3xl col-span-3 font-bold mb-0">{title}</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col md:col-span-1 md:mr-3">
          <h3 className="text-2xl font-semibold mb-4">{appName}</h3>
          <p className="text-muted-foreground text-base mx-2 md:ml-5">{description}</p>
        </div>
        <div
          className="relative flex-shrink-0 md:col-span-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(!isHovered)}
        >
          <img
            src={image1}
            alt="Project Image 1"
            className={`h-auto rounded-lg shadow-lg md:absolute md:top-4 md:left-1 transform transition-transform duration-300 ${
              isHovered ? 'z-0 scale-95' : 'z-10 md:scale-100 scale-95'
            }`}
          />
          <img
            src={image2}
            alt="Project Image 2"
            className={`h-auto rounded-lg shadow-lg md:relative md:top-9 md:left-1 transform transition-transform duration-300 ${
              isHovered ? 'z-10 md:scale-100 scale-95' : 'z-0 scale-95'
            } relative`}
          />
        </div>
      </div>
      <textarea
        ref={textareaRef}
        className={`mt-8 md:mt-20 text-sm md:px-10 ${styles.textareaStyle}`}
        aria-label="Comment"
        value={comment}
        readOnly
      />
    </section>
  );
};

export default Projects;
