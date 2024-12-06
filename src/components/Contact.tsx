import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Get In Touch</h2>
        
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="text-center p-6 rounded-lg bg-purple-50 dark:bg-gray-800">
            <Mail className="w-8 h-8 mx-auto mb-4 text-purple-600" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a
              href="mailto:aarushi.goyal@example.com"
              className="text-purple-600 dark:text-purple-400 hover:underline"
            >
              aarushi.goyal@example.com
            </a>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-purple-50 dark:bg-gray-800">
            <MapPin className="w-8 h-8 mx-auto mb-4 text-purple-600" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-600 dark:text-gray-400">San Francisco, CA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;