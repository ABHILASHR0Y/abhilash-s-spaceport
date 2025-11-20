import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { toast } from 'sonner';

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/ABHILASHR0Y',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/abhilash-roy-a73427276?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/its.abhiie._?igsh=MW1xOGExNjE0Zzlq&utm_source=qr',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:abhilashr661@gmail.com',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formspree endpoint - user will need to set this up
    const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
    
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try emailing directly.');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try emailing directly.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-center mb-4 text-foreground">
          Contact
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm open to collaboration, freelance work, and internship opportunities. Drop a message.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-background border-border rounded-xl"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background border-border rounded-xl"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-background border-border rounded-xl"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-background border-border rounded-xl min-h-32"
                  placeholder="Your message..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-6 rounded-xl hover-glow"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors border border-primary/20 hover-glow"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold text-foreground">
                        {social.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border border-border rounded-2xl p-8">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Note:</span> To enable the contact form, 
                you'll need to set up a Formspree account and add your form endpoint. 
                For now, you can reach me directly via email or social media links above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
