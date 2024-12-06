import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      role: 'Web Development Operations Lead',
      company: 'Social Agent',
      location: 'Bangalore',
      period: 'August 2023 - Present',
      achievements: [
        'Oversee web developers and UI/UX designers, ensuring seamless collaboration and alignment across teams',
        'Streamline workflows and optimize processes to deliver high-quality, user-focused web solutions efficiently',
        'Ensure timely project delivery while upholding best practices in both design and development'
      ]
    },
    {
      role: 'Web Developer',
      company: 'Social Agent',
      location: 'Bangalore',
      period: 'November 2022 - July 2023',
      achievements: [
        'Developed and maintained client websites using React and Next.js',
        'Integrated backend services using Firebase and REST APIs',
        'Collaborated with design team for pixel-perfect implementations'
      ]
    }
  ];

  return (
    <div className="container flex flex-col md:flex-row">
      <div className="md:w-[50%] pb-12 md:pb-0">
        <div className="sticky top-32">
          <h1 className="heading-xl whitespace-pre-line">
            WORKING{'\n'}EXPERIENCE
          </h1>
        </div>
      </div>

      <div className="md:w-[50%] space-y-12">
        {experiences.map((experience, index) => (
          <div 
            key={index} 
            className="border-b border-primary/10 pb-12"
          >
            <div className="flex justify-between items-start mb-8">
              <h2 className="text-2xl font-semibold">
                {experience.role}
              </h2>
              <span className="text-primary/60 text-right">
                {experience.period}
              </span>
            </div>

            <div className="flex flex-col gap-2 mb-6">
              <div className="flex items-center gap-2">
                <span className="font-medium">{experience.company}</span>
                <span className="text-primary/60">•</span>
                <span className="text-primary/60">{experience.location}</span>
              </div>
            </div>

            <div className="text-primary/60 space-y-2">
              {experience.achievements.map((achievement, i) => (
                <p key={i} className="leading-relaxed">
                  {achievement}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;