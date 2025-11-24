import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import leafyMonitorImg from '@/assets/project-leafy-monitor.jpg';
import ssvDiscoveryImg from '@/assets/project-ssv-discovery.jpg';
import sharespotImg from '@/assets/project-sharespot.jpg';

const projects = [
  {
    title: 'Leafy Life Monitor',
    subtitle: 'Smart automated plant watering and fertilizing system',
    description: 'Leafy Life Monitor is a smart plant-care system that automates watering and nutrient dispensing using an ESP microcontroller and soil moisture sensors. It monitors moisture and triggers watering/nutrient delivery when levels fall below set thresholds, supports manual control, logs events with timestamps, and provides a simple web interface for insights.',
    tech: ['ESP8266/ESP32', 'Arduino IDE', 'HTML/CSS/JavaScript', 'JSON logging', 'Git'],
    github: 'Will add later',
    live: null,
    image: leafyMonitorImg,
  },
  {
    title: 'ShareSpot',
    subtitle: 'Peer-to-peer platform for lending, borrowing, buying, and selling resources',
    description: 'ShareSpot is a community resource-sharing site allowing local lending, borrowing, buying, and selling. Built with PHP and MySQL, it focuses on categorized listings, secure transactions, and a dedicated lending workflow to reduce waste and increase accessibility.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'XAMPP'],
    github: 'Will add later',
    live: null,
    image: sharespotImg,
  },
  {
    title: 'SSV Discovery',
    subtitle: 'AI-enhanced campus recruitment platform for SSV College',
    description: 'SSV Discovery is a Django recruitment portal with structured student profiles, skill filters, and a Natural Language Search powered by spaCy NLP. Built with Django, MySQL, Bootstrap and hosted on a Linux server, it streamlines recruiter workflows and reduces manual resume screening.',
    tech: ['Django', 'Python', 'spaCy', 'MySQL', 'Bootstrap', 'Git'],
    github: 'Will add later',
    live: null,
    image: ssvDiscoveryImg,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Selected Projects
          </h2>
          <p className="text-xl text-muted-foreground">IoT, Web & AI</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedProject(project)}
              className="bg-card border border-border rounded-2xl overflow-hidden hover-glow cursor-pointer transition-all"
            >
              {/* Project image */}
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.subtitle}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-muted-foreground text-xs">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-3xl bg-card border-border">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-foreground">
              {selectedProject?.title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {selectedProject?.subtitle}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Project image */}
            <div className="w-full h-64 rounded-xl overflow-hidden">
              <img 
                src={selectedProject?.image} 
                alt={selectedProject?.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-2">Description</h4>
              <p className="text-muted-foreground leading-relaxed">
                {selectedProject?.description}
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-primary/10 text-foreground rounded-lg border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              <Button
                variant="outline"
                className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                disabled={selectedProject?.github === 'Will add later'}
              >
                <Github className="mr-2 h-4 w-4" />
                {selectedProject?.github === 'Will add later' ? 'GitHub (Coming Soon)' : 'View Code'}
              </Button>
              {selectedProject?.live && (
                <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
