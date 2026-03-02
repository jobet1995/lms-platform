'use client';

import React, { useState } from 'react';
import { Mail, MessageSquare, HelpCircle, Phone, Send, CheckCircle2, ChevronDown } from 'lucide-react';

const FAQS = [
  { q: 'Are all courses really free?', a: 'Yes! All core course content on ElevateLMS is completely free — no credit card needed.' },
  { q: 'How do I get a certificate?', a: 'Complete all lessons and the final quiz in a course to earn a shareable certificate of completion.' },
  { q: 'Can I learn at my own pace?', a: 'Absolutely. All courses are self-paced with no deadlines. Progress is saved automatically.' },
  { q: 'Do instructors respond to questions?', a: 'Each course has a discussion forum monitored by instructors and community TAs.' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 min-h-[calc(100vh-80px)] flex items-center justify-center px-6 sm:px-12 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="relative max-w-3xl mx-auto -mt-16 sm:-mt-24">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
            <Mail className="h-4 w-4" /> Contact Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-base-content mb-4">
            We&apos;d love to
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> hear from you</span>
          </h1>
          <p className="text-base-content/60 max-w-xl mx-auto text-lg leading-relaxed">
            Have a question, suggestion, or want to collaborate? Reach out — we typically reply within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="container mx-auto px-6 sm:px-12 pt-4 pb-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: <Mail className="h-6 w-6 text-primary" />, title: 'Email', detail: 'hello@elevatelms.io', id: 'contact-form' },
            { icon: <MessageSquare className="h-6 w-6 text-emerald-500" />, title: 'Live Chat', detail: 'Available 9AM–6PM (Mon–Fri)', id: 'chat' },
            { icon: <HelpCircle className="h-6 w-6 text-amber-500" />, title: 'FAQ', detail: 'Find quick answers below', id: 'faq' },
            { icon: <Phone className="h-6 w-6 text-base-content/50" />, title: 'Phone', detail: '+1 (800) 555-0198', id: 'phone' },
          ].map((card) => (
            <a
              key={card.title}
              href={`#${card.id}`}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-base-content/8 bg-base-100 hover:border-primary/30 hover:shadow-lg transition-all text-center group"
            >
              <div className="p-3 rounded-xl bg-base-content/5 group-hover:bg-primary/10 transition-colors">{card.icon}</div>
              <p className="font-bold text-base-content">{card.title}</p>
              <p className="text-xs text-base-content/50">{card.detail}</p>
            </a>
          ))}
        </div>

        {/* Main grid: form + sidebar */}
        <div className="grid lg:grid-cols-[1fr_340px] gap-10 items-start">
          {/* Form */}
          <div id="contact-form" className="rounded-2xl border border-base-content/10 bg-base-100 p-8 shadow-sm">
            <h2 className="text-xl font-bold text-base-content mb-6">Send a Message</h2>
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-12 text-center">
                <CheckCircle2 className="h-14 w-14 text-emerald-500" />
                <h3 className="text-xl font-bold text-base-content">Message Sent!</h3>
                <p className="text-sm text-base-content/60">We&apos;ll get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="mt-2 px-5 py-2 rounded-xl border border-base-content/15 text-sm font-semibold hover:border-primary/30 hover:text-primary transition-all">
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-base-content/50 mb-1.5 block">Name *</label>
                    <input
                      required value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="input input-bordered w-full text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-base-content/50 mb-1.5 block">Email *</label>
                    <input
                      required type="email" value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="input input-bordered w-full text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-base-content/50 mb-1.5 block">Subject *</label>
                  <input
                    required value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="What&apos;s this about?"
                    className="input input-bordered w-full text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-base-content/50 mb-1.5 block">Message *</label>
                  <textarea
                    required value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    placeholder="Tell us everything..."
                    className="textarea textarea-bordered w-full text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-focus transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5"
                >
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            {/* Live chat */}
            <div id="chat" className="rounded-2xl border border-base-content/10 bg-base-100 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10"><MessageSquare className="h-5 w-5 text-emerald-500" /></div>
                <div>
                  <p className="font-bold text-base-content">Live Chat</p>
                  <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" /> Online now
                  </span>
                </div>
              </div>
              <p className="text-sm text-base-content/60 mb-4">Our team is available Monday–Friday, 9AM–6PM EST.</p>
              <button className="w-full py-2.5 rounded-xl bg-emerald-500 text-white font-bold text-sm hover:bg-emerald-600 transition-all">
                Start Chat
              </button>
            </div>

            {/* Phone */}
            <div id="phone" className="rounded-2xl border border-base-content/10 bg-base-100 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-base-content/5"><Phone className="h-5 w-5 text-base-content/50" /></div>
                <p className="font-bold text-base-content">Call Us</p>
              </div>
              <p className="text-xl font-extrabold text-base-content mb-1">+1 (800) 555-0198</p>
              <p className="text-xs text-base-content/50">Mon–Fri · 9AM–6PM EST</p>
            </div>
          </aside>
        </div>

        {/* FAQ */}
        <section id="faq" className="mt-4">
          <h2 className="text-2xl font-extrabold text-base-content mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3 max-w-2xl">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-xl border border-base-content/10 bg-base-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex items-center justify-between w-full px-5 py-4 text-left"
                >
                  <span className="text-sm font-bold text-base-content">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-base-content/40 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <p className="px-5 pb-4 text-sm text-base-content/65 leading-relaxed">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
