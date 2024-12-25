"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/iamaarushigoyal',
    color: 'text-[#0077B5] hover:text-[#0077B5]/80'
  },
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/iamaarushigoyal',
    color: 'text-white hover:text-white/80'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/aarushi_goyal',
    color: 'text-[#1DA1F2] hover:text-[#1DA1F2]/80'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/iamaarushigoyal',
    color: 'text-[#E4405F] hover:text-[#E4405F]/80'
  }
];

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Contact Me
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Card className="hover:bg-card/70 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" />
                  </div>
                  <div>
                    <Input placeholder="Subject" />
                  </div>
                  <div>
                    <Textarea placeholder="Your Message" rows={5} />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="hover:bg-card/70 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 p-3 rounded-lg bg-card/50 hover:bg-card transition-colors ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:bg-card/70 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Location</h3>
                <p className="text-muted-foreground">Bengaluru, India</p>
                <p className="text-muted-foreground">Available for remote work worldwide</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}