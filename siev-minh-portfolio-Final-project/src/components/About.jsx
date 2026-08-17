import { MapPin, GraduationCap, Code2, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { personal } from "../data/siteData";

export default function About() {
  const cards = [
    { icon: MapPin, label: "Location", value: personal.location },
    { icon: GraduationCap, label: "University", value: personal.university },
    { icon: Code2, label: "Major", value: personal.major },
    { icon: Sparkles, label: "Interests", value: "Web Apps, Databases, DSA" },
  ];

  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="ABOUT ME"
          title="Getting to know me"
        />

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div className="reveal">
            <h3 className="font-display text-3xl font-semibold text-white">
              A student who likes turning ideas into working software
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-slate-400">
              {personal.about}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              {personal.aboutExtra}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {cards.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="glass reveal rounded-2xl p-5 transition hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <Icon className="h-6 w-6 text-cyan-400" />
                <p className="mt-4 text-sm uppercase tracking-wider text-slate-500">
                  {label}
                </p>
                <p className="mt-1 text-base font-medium text-slate-200">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
