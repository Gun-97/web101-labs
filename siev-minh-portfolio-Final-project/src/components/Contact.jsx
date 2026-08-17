import { useState } from "react";
import { Github, Linkedin, Facebook, Mail, Send, Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { personal } from "../data/siteData";

const SOCIALS = [
  ["GitHub", Github, personal.social.github],
  ["LinkedIn", Linkedin, personal.social.linkedin],
  ["Facebook", Facebook, personal.social.facebook],
  ["Email", Mail, personal.social.email],
];

function Field({ label, children }) {
  return (
    <label className="block text-sm font-medium text-slate-400">
      {label}
      {children}
    </label>
  );
}

export default function Contact() {
  const [status, setStatus] = useState("idle");

  function submit(e) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="CONTACT"
          title="Let's build something together"
          description="Have a project, an internship opportunity, or just want to say hi? My inbox is open."
        />

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Contact form */}
          <form
            onSubmit={submit}
            className="glass col-span-3 rounded-2xl p-6 sm:p-8"
          >
            {/* Name and Email fields */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Name">
                <input
                  name="name"
                  required
                  className="form-input"
                  placeholder="Your name"
                />
              </Field>
              <Field label="Email">
                <input
                  name="email"
                  type="email"
                  required
                  className="form-input"
                  placeholder="you@example.com"
                />
              </Field>
            </div>

            {/* Subject field */}
            <div className="mt-5">
              <Field label="Subject">
                <input
                  name="subject"
                  required
                  className="form-input"
                  placeholder="What's this about?"
                />
              </Field>
            </div>

            {/* Message field */}
            <div className="mt-5">
              <Field label="Message">
                <textarea
                  name="message"
                  required
                  rows="5"
                  className="form-input resize-none"
                  placeholder="Tell me about your idea..."
                />
              </Field>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3.5 text-base font-semibold text-slate-950 transition hover:scale-[1.01] sm:w-auto"
            >
              {status === "sent" ? (
                <>
                  <Check className="h-4 w-4" />
                  Message sent
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send message
                </>
              )}
            </button>
          </form>

          {/* Social links */}
          <div className="col-span-2 flex flex-col justify-between gap-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold text-white">Get in touch</h3>
              <div className="mt-4 space-y-3">
                {SOCIALS.map(([name, Icon, href]) => (
                  <a
                    key={name}
                    href={href}
                    className="flex items-center gap-3 text-slate-400 transition hover:text-cyan-300"
                  >
                    <Icon className="h-5 w-5 text-cyan-400" />
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
