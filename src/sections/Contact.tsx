import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Check,
  Copy,
  ExternalLink,
  Github,
  Mail,
  Send,
} from 'lucide-react';
import { ContactInfo } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';

interface ContactProps {
  contact: ContactInfo;
}

export const Contact: React.FC<ContactProps> = ({ contact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [formPrepared, setFormPrepared] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Clipboard fallback ignored
    }
  };

  const buildMailtoHref = () => {
    const mailSubject = encodeURIComponent(subject.trim() || `Portfolio Inquiry from ${name.trim()}`);
    const mailBody = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`
    );
    return `mailto:${contact.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setErrorMessage('Please fill in your name, email, subject, and message.');
      setFormPrepared(false);
      return;
    }
    setErrorMessage('');
    setFormPrepared(true);
  };

  const handleCopyDraft = async () => {
    const formatted = `To: ${contact.email}\nFrom: ${name} <${email}>\nSubject: ${subject}\n\n${message}`;
    try {
      await navigator.clipboard.writeText(formatted);
      setCopiedDraft(true);
      setTimeout(() => setCopiedDraft(false), 2000);
    } catch {
      // Clipboard fallback ignored
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 border-t border-[#F4C8D5]/70 dark:border-white/[0.08]"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <SectionHeading
          number="05"
          title="Get In Touch"
          subtitle={contact.availabilityNote}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Links & Download CV */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl bg-white dark:bg-[#231C21] border border-[#F4C8D5] dark:border-white/[0.09] p-6 sm:p-8 shadow-[0_12px_32px_-18px_rgba(217,140,165,0.28)] space-y-6">
              <div>
                <h3 className="font-display text-xl font-semibold text-[#40313D] dark:text-[#FAF5F7] mb-5">
                  Direct Channels
                </h3>

                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#F4C8D5]/70 dark:border-white/[0.08]">
                    <div className="min-w-0">
                      <p className="text-xs text-[#6E5B68] dark:text-[#C7B6C1] mb-0.5">
                        Email
                      </p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#40313D] dark:text-[#FAF5F7] hover:text-[#B45D7B] dark:hover:text-[#E69FB5] truncate"
                      >
                        <Mail className="w-4 h-4 shrink-0 text-[#B45D7B] dark:text-[#E69FB5]" aria-hidden="true" />
                        <span className="truncate">{contact.email}</span>
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#F4C8D5] dark:border-white/[0.12] text-xs font-medium text-[#6E5B68] dark:text-[#C7B6C1] hover:text-[#40313D] dark:hover:text-[#FAF5F7] hover:bg-[#FCEEF2]/60 dark:hover:bg-[#2E242B] whitespace-nowrap shrink-0 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D98CA5]"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#B45D7B] dark:text-[#E69FB5]" aria-hidden="true" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* GitHub */}
                  <a
                    href={contact.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 group"
                  >
                    <div className="min-w-0">
                      <p className="text-xs text-[#6E5B68] dark:text-[#C7B6C1] mb-0.5">
                        GitHub
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-[#40313D] dark:text-[#FAF5F7] group-hover:text-[#B45D7B] dark:group-hover:text-[#E69FB5] truncate">
                        <Github className="w-4 h-4 shrink-0" aria-hidden="true" />
                        <span className="truncate">{contact.githubHandle}</span>
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-[#6E5B68] dark:text-[#C7B6C1] shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl bg-white dark:bg-[#231C21] border border-[#F4C8D5] dark:border-white/[0.09] p-6 sm:p-9 shadow-[0_12px_32px_-18px_rgba(217,140,165,0.28)] space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-[#40313D] dark:text-[#FAF5F7] mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FFF9F7] dark:bg-[#171316] border border-[#F4C8D5] dark:border-white/[0.12] text-sm text-[#40313D] dark:text-[#FAF5F7] placeholder:text-[#927E8B] focus:outline-none focus:border-[#D98CA5]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-[#40313D] dark:text-[#FAF5F7] mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FFF9F7] dark:bg-[#171316] border border-[#F4C8D5] dark:border-white/[0.12] text-sm text-[#40313D] dark:text-[#FAF5F7] placeholder:text-[#927E8B] focus:outline-none focus:border-[#D98CA5]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-sm font-medium text-[#40313D] dark:text-[#FAF5F7] mb-1.5"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Internship opportunity, collaboration, or question"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FFF9F7] dark:bg-[#171316] border border-[#F4C8D5] dark:border-white/[0.12] text-sm text-[#40313D] dark:text-[#FAF5F7] placeholder:text-[#927E8B] focus:outline-none focus:border-[#D98CA5]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-[#40313D] dark:text-[#FAF5F7] mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FFF9F7] dark:bg-[#171316] border border-[#F4C8D5] dark:border-white/[0.12] text-sm text-[#40313D] dark:text-[#FAF5F7] placeholder:text-[#927E8B] focus:outline-none focus:border-[#D98CA5] resize-y"
                />
              </div>

              {errorMessage && (
                <p role="alert" className="text-sm text-[#B91C1C] dark:text-[#FCA5A5]">
                  {errorMessage}
                </p>
              )}

              {formPrepared && (
                <div
                  role="status"
                  className="p-4 rounded-xl bg-[#FCEEF2]/80 dark:bg-[#1C161A] border border-[#F4C8D5] dark:border-white/[0.1] space-y-3"
                >
                  <p className="text-sm text-[#40313D] dark:text-[#FAF5F7] leading-relaxed">
                    No backend email service is connected to this static portfolio yet. Your message is ready to send via your email app or copy to clipboard:
                  </p>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <a
                      href={buildMailtoHref()}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#B45D7B] text-white hover:bg-[#9C4C68] text-xs sm:text-sm font-medium transition-colors whitespace-nowrap"
                    >
                      <Mail className="w-4 h-4" aria-hidden="true" />
                      <span>Open in Email App</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyDraft}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#F4C8D5] dark:border-white/[0.12] text-xs sm:text-sm font-medium text-[#40313D] dark:text-[#FAF5F7] hover:bg-white dark:hover:bg-[#231C21] transition-colors whitespace-nowrap"
                    >
                      {copiedDraft ? (
                        <>
                          <Check className="w-4 h-4 text-[#B45D7B] dark:text-[#E69FB5]" aria-hidden="true" />
                          <span>Message Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" aria-hidden="true" />
                          <span>Copy Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <p className="text-xs text-[#6E5B68] dark:text-[#C7B6C1]">
                  Static form: prepares a mailto draft without storing personal data.
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#B45D7B] text-white hover:bg-[#9C4C68] dark:bg-[#D98CA5] dark:text-[#1F161B] dark:hover:bg-[#E5A3B9] text-sm font-medium shadow-[0_8px_20px_-8px_rgba(180,93,123,0.45)] transition-all duration-200 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D98CA5]"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>Prepare Message</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
