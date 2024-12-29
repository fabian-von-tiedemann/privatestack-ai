import { motion } from 'framer-motion';
import { Brain, Briefcase, Shield, Code } from 'lucide-react';
import { SectionHeader } from '../ui/section-header';

const team = [
  {
    name: 'David Holmlund',
    role: 'Chief AI Officer och AI Coach',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    description: 'Med över 15 års erfarenhet inom AI och maskininlärning leder David vårt tekniska team och hjälper kunder att maximera värdet av AI i sina organisationer.',
    icon: Brain,
  },
  {
    name: 'Fabian von Tiedemann',
    role: 'Försäljning och AI Coach',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    description: 'Fabian kombinerar sin djupa förståelse för AI med en passion för att hjälpa företag hitta rätt lösningar för deras unika behov.',
    icon: Briefcase,
  },
  {
    name: 'Aka Ryu',
    role: 'Senior AI Developer and Cybersecurity',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    description: 'Med expertis inom både AI-utveckling och cybersäkerhet säkerställer Aka att våra lösningar möter de högsta säkerhetskraven.',
    icon: Shield,
  },
  {
    name: 'Vilgot Sjöman',
    role: 'AI Developer',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    description: 'Vilgot driver utvecklingen av våra AI-modeller och plattformsintegrationer med fokus på prestanda och användarvänlighet.',
    icon: Code,
  },
];

export function Team() {
  return (
    <>
      <SectionHeader
        title="Vårt Team"
        description="Ett dedikerat team av experter inom AI, säkerhet och affärsutveckling"
        className="mb-16"
      />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full">
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-6">
              <div className="flex justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <member.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">
                {member.name}
              </h3>
              <p className="text-base leading-7 text-primary">
                {member.role}
              </p>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {member.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}