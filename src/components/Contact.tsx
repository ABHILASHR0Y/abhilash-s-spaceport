import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { toast } from 'sonner';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters'),
  email: z.string()
    .trim()
    .email('Invalid email address')
    .max(255, 'Email must be less than 255 characters'),
  subject: z.string()
    .trim()
    .min(1, 'Subject is required')
    .max(200, 'Subject must be less than 200 characters'),
  message: z.string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
  honeypot: z.string().max(0, 'Invalid submission'),
});

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
    honeypot: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validate form data
    const validation = contactSchema.safeParse(formData);
    
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(fieldErrors);
      toast.error('Please fix the errors in the form');
      return;
    }
    
    // Check honeypot (spam prevention)
    if (formData.honeypot) {
      toast.error('Invalid submission detected');
      return;
    }
    
    setIsSubmitting(true);
    
    // Formspree endpoint - user will need to set this up
    const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
    
    try {
      const { honeypot, ...submitData } = validation.data;
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });
      
      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      } else {
        toast.error('Failed to send message. Please try emailing directly.');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try emailing directly.');
    } finally {
      // Rate limiting: disable submit for 5 seconds
      setTimeout(() => setIsSubmitting(false), 5000);
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
                  maxLength={100}
                />
                {errors.name && (
                  <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                )}
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
                  maxLength={255}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                )}
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
                  maxLength={200}
                />
                {errors.subject && (
                  <p className="text-sm text-red-500 mt-1">{errors.subject}</p>
                )}
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
                  maxLength={2000}
                />
                {errors.message && (
                  <p className="text-sm text-red-500 mt-1">{errors.message}</p>
                )}
              </div>

              {/* Honeypot field for spam prevention - hidden from users */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-6 rounded-xl hover-glow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
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
