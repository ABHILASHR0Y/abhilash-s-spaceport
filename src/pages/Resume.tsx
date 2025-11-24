import { Button } from '@/components/ui/button';
import { Download, ArrowLeft, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Resume = () => {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar - Hidden in print */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border print:hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
          <Button
            onClick={handlePrint}
            className="gap-2"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </div>
      </nav>

      {/* Resume Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 print:py-8">
        <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 print:border-none print:p-0">
          {/* Header */}
          <header className="mb-8 pb-6 border-b border-border">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Abhilash Roy
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Full-Stack Developer • IoT Enthusiast • MCA Student
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <a href="mailto:your.email@example.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                your.email@example.com
              </a>
              <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +91 XXXXXXXXXX
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Kerala, India
              </span>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-4 text-sm">
              <a href="https://github.com/abhilashroy2003" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-4 h-4" />
                github.com/abhilashroy2003
              </a>
              <a href="https://www.linkedin.com/in/abhilashroy03" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
                linkedin.com/in/abhilashroy03
              </a>
            </div>
          </header>

          {/* Education */}
          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-primary mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Master of Computer Applications (MCA)</h3>
                <p className="text-muted-foreground">ASIET, Kalady • Currently Pursuing</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Bachelor of Science in Computer Science</h3>
                <p className="text-muted-foreground">SSV College • Graduate</p>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-primary mb-4">Technical Skills</h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Frontend Development</h3>
                <p className="text-sm text-muted-foreground">HTML, CSS, JavaScript</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Backend Development</h3>
                <p className="text-sm text-muted-foreground">Python, Django</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Databases</h3>
                <p className="text-sm text-muted-foreground">MySQL, Supabase</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Tools & Technologies</h3>
                <p className="text-sm text-muted-foreground">Git, GitHub, Arduino, ESP32, API Integration, IoT</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Specializations</h3>
                <p className="text-sm text-muted-foreground">AI Basics, Full-Stack Development, Fintech, Algo Trading, Automation</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Languages</h3>
                <p className="text-sm text-muted-foreground">English, Hindi, Malayalam</p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-primary mb-4">Experience & Leadership</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">IEDC College Coordinator</h3>
                    <p className="text-sm text-muted-foreground italic">Innovation & Entrepreneurship Development Cell – ASIET</p>
                  </div>
                  <span className="text-sm text-primary font-semibold">2023 – 2025</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                  <li>Coordinated innovation-focused events, workshops, and ideathons across departments</li>
                  <li>Guided peers in project conceptualization and connected them to IEDC resources</li>
                  <li>Served as liaison between IEDC committee and students ensuring smooth communication</li>
                  <li>Assisted in organizing startup awareness programs, tech meetups, and idea-brainstorm sessions</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">NSS Volunteer</h3>
                    <p className="text-sm text-muted-foreground italic">National Service Scheme – ASIET</p>
                  </div>
                  <span className="text-sm text-primary font-semibold">2022 – 2023</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                  <li>Participated in community outreach programs including cleanliness drives and awareness campaigns</li>
                  <li>Assisted in organizing campus volunteering activities and event coordination</li>
                  <li>Supported public welfare initiatives such as blood donation camps and health awareness events</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Treasurer</h3>
                    <p className="text-sm text-muted-foreground italic">BSc Computer Science Association – SSV College</p>
                  </div>
                  <span className="text-sm text-primary font-semibold">2021 – 2022</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                  <li>Managed departmental funds and maintained financial records</li>
                  <li>Coordinated budgeting for academic and cultural events</li>
                  <li>Collaborated with core committee on planning student activities</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-primary mb-4">Key Projects</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Leafy Life Monitor</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  IoT-based plant monitoring system using ESP32 microcontroller with soil moisture sensors, 
                  temperature monitoring, and real-time alert notifications for plant care.
                </p>
                <p className="text-xs text-muted-foreground"><span className="font-semibold">Tech:</span> ESP32, Arduino, IoT, Sensors</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">FitZone Landing Page</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Modern, responsive fitness website with clean UI/UX design, interactive elements, 
                  and optimized performance for mobile and desktop platforms.
                </p>
                <p className="text-xs text-muted-foreground"><span className="font-semibold">Tech:</span> HTML, CSS, JavaScript</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Bookstore Management System</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Full-stack web application for managing book inventory, sales tracking, and customer 
                  management with database integration and admin dashboard.
                </p>
                <p className="text-xs text-muted-foreground"><span className="font-semibold">Tech:</span> Python, Django, MySQL</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Personal Portfolio Website</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Dark-themed space aesthetic portfolio with interactive particle animations, 
                  smooth transitions, and responsive design showcasing projects and skills.
                </p>
                <p className="text-xs text-muted-foreground"><span className="font-semibold">Tech:</span> React, TypeScript, Tailwind CSS</p>
              </div>
            </div>
          </section>

          {/* Areas of Interest */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-primary mb-4">Areas of Interest</h2>
            <p className="text-sm text-muted-foreground">
              IoT Development • Full-Stack Web Development • Fintech • Algorithmic Trading • 
              Cryptocurrency • Automation • Artificial Intelligence • Arduino/ESP32 Projects
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Resume;