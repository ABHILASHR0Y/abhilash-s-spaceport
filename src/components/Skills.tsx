const skillCategories = [
  {
    category: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    category: 'Backend',
    skills: ['Python', 'Django'],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'Supabase'],
  },
  {
    category: 'Tools & Hardware',
    skills: ['Git', 'GitHub', 'Arduino', 'ESP32', 'API Integration', 'IoT'],
  },
  {
    category: 'Other',
    skills: ['AI Basics'],
  },
];

const Skills = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-center mb-12 text-foreground">
          Skills
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-2xl p-6 hover-glow transition-all"
            >
              <h3 className="font-heading text-lg font-semibold text-primary mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1.5 bg-primary/10 text-foreground text-sm rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
