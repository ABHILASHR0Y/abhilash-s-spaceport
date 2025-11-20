import { MapPin, GraduationCap, Languages, Sparkles } from 'lucide-react';

const facts = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kerala, India',
  },
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'BSc CS Graduate • MCA Student at ASIET, Kalady',
  },
  {
    icon: Languages,
    label: 'Languages',
    value: 'English, Hindi, Malayalam',
  },
  {
    icon: Sparkles,
    label: 'Interests',
    value: 'IoT • Full-Stack • Fintech • Algo Trading • Crypto • Automation • AI • Web Dev • Arduino/ESP',
  },
];

const QuickFacts = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {facts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover-glow transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-xl">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      {fact.label}
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">
                      {fact.value}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickFacts;
