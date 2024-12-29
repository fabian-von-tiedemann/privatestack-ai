import { motion } from 'framer-motion';
import { Container } from './Container';
import { SectionHeader } from './ui/section-header';

const testimonials = [
  {
    quote: "Med privatestack.ai har vi kunnat bygga säkra och effektiva AI-lösningar som ger verkligt värde för vår verksamhet.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    author: "Pinmeto",
    title: "Digital Marketing Platform"
  },
  {
    quote: "Plattformen har hjälpt oss att effektivisera våra processer och förbättra vår kundservice markant.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    author: "Sandå Måleri",
    title: "Måleriföretag"
  },
  {
    quote: "Med privatestack.ai har vi kunnat demokratisera AI-användningen i organisationen. Nu har alla medarbetare tillgång till de kraftfullaste verktygen, vilket har accelererat vår digitala transformation.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    author: "Håll Sverige Rent",
    title: "Miljöorganisation"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 sm:py-32">
      <Container>
        <SectionHeader
          title="Kundexempel"
          description="Upptäck hur organisationer använder privatestack.ai för att accelerera sin AI-resa"
          className="mb-16"
        />
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <motion.figure
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5"
            >
              <blockquote className="text-gray-900">
                <p className="text-lg font-semibold leading-7">"{testimonial.quote}"</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-3">
                <img
                  src={testimonial.image}
                  className="h-12 w-12 rounded-full object-cover"
                  alt={testimonial.author} />
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.title}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}