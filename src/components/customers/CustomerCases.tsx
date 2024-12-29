import { motion } from 'framer-motion';
import { Container } from '../Container';

const testimonials = [
  {
    quote: "Med privatestack.ai kunde vi förverkliga vår AI-strategi utan att kompromissa med datasäkerheten. Lösningen gav oss total kontroll över våra modeller och data.",
    author: "Kund A",
  },
  {
    quote: "Tack vare den flexibla arkitekturen kunde vi snabbt anpassa oss när våra behov förändrades. Ingen inlåsning, bara frihet att växa.",
    author: "Kund B",
  },
];

export function CustomerCases() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Våra kunder litar på privatestack.ai
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Organisationer inom finans, industri, teknik och offentlig sektor har valt 
            privatestack.ai för att säkert skala upp sin AI-användning. Vår kundbas 
            sträcker sig från medelstora företag som tar sina första AI-steg, till 
            globala koncerner som redan hanterar komplexa AI-flöden.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5"
            >
              <blockquote className="text-gray-900">
                <p className="text-lg font-semibold leading-7">"{testimonial.quote}"</p>
              </blockquote>
              <figcaption className="mt-6">
                <div className="font-semibold">{testimonial.author}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="aspect-[3/2] w-full bg-gray-100 rounded-lg"
              aria-label="Customer logo placeholder"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}