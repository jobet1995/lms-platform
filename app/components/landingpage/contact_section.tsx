'use client';

import React from 'react';
import ContactForm from '../ContactForm';
import { Mail, MessageCircle, MapPin, Phone } from 'lucide-react';
import SectionTitle from '../SectionTitle';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-base-100">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <SectionTitle 
          title="Have questions? Let's talk."
          subtitle="Our team is here to help you get the most out of ElevateLMS. Drop us a message and we'll respond within 24 hours."
          tag="Contact Us"
          alignment="center"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                 <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-base-content text-lg mb-1">Email Us</h4>
                <p className="text-base-content/60">hello@elevatelms.org</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center shrink-0">
                 <MessageCircle size={24} />
              </div>
              <div>
                <h4 className="font-bold text-base-content text-lg mb-1">Chat Support</h4>
                <p className="text-base-content/60">Average response: 2 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center shrink-0">
                 <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-base-content text-lg mb-1">Call Us</h4>
                <p className="text-base-content/60">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-info/10 text-info rounded-xl flex items-center justify-center shrink-0">
                 <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-base-content text-lg mb-1">Headquarters</h4>
                <p className="text-base-content/60">San Francisco, CA</p>
              </div>
            </div>
          </div>

          {/* Contact Form Container */}
          <div className="lg:col-span-2 bg-base-100 rounded-[2.5rem] border border-base-content/5 p-8 sm:p-12 shadow-2xl shadow-primary/5 animate-fade-in-up">
             <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
