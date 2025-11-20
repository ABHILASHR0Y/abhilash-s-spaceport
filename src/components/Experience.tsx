import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'IEDC — College Coordinator',
    organization: 'Innovation & Entrepreneurship Development Cell – ASIET',
    period: '2023 – 2025',
    responsibilities: [
      'Coordinated innovation-focused events, workshops, and ideathons across departments.',
      'Guided peers in project conceptualization and connected them to IEDC resources.',
      'Served as liaison between the IEDC committee and students, ensuring smooth communication.',
      'Assisted in organizing startup awareness programs, tech meetups, and idea-brainstorm sessions.',
    ],
  },
  {
    role: 'NSS Volunteer',
    organization: 'National Service Scheme – ASIET',
    period: '2022 – 2023',
    responsibilities: [
      'Participated in community outreach programs including cleanliness drives and awareness campaigns.',
      'Assisted in organizing campus volunteering activities and event coordination.',
      'Supported public welfare initiatives such as blood donation camps and health awareness events.',
    ],
  },
  {
    role: 'BSc CS Dept. Association — Treasurer',
    organization: 'BSc Computer Science Association – SSV College',
    period: '2021 – 2022',
    responsibilities: [
      'Managed departmental funds and maintained financial records.',
      'Coordinated budgeting for academic and cultural events.',
      'Collaborated with the core committee on planning student activities.',
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-center mb-12 text-foreground">
          Experience & Campus Roles
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-2xl p-8 hover-glow transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-primary font-semibold">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 italic">
                    {exp.organization}
                  </p>
                  
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIdx) => (
                      <li
                        key={respIdx}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
