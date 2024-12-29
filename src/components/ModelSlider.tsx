import { motion } from 'framer-motion';
import { Container } from './Container';

const models = [
  { name: 'OpenAI', logo: 'OpenAI' },
  { name: 'Anthropic', logo: 'Anthropic' },
  { name: 'Google', logo: 'Google' },
  { name: 'Microsoft Copilot', logo: 'Microsoft' },
  { name: 'Meta', logo: 'Meta' },
  { name: 'Mistral', logo: 'Mistral' },
  { name: 'Hugging Face', logo: 'HuggingFace' },
  { name: 'Flux', logo: 'Flux' },
  { name: 'Recraft', logo: 'Recraft' },
  { name: 'RunwayML', logo: 'RunwayML' },
];

export function ModelSlider() {
  return (
    <section className="py-12 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-lg font-semibold text-gray-900">
            Stöd för AI & modelltjänster
          </h2>
        </motion.div>

        <div className="mt-8 relative">
          <div className="relative w-full overflow-hidden">
            <div className="flex space-x-12 animate-scroll">
              {[...models, ...models].map((model, index) => (
                <div
                  key={index}
                  className="flex-none w-40 h-16 bg-gray-100 rounded-lg flex items-center justify-center"
                >
                  <span className="text-sm font-medium text-gray-900">{model.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
        </div>
      </Container>
    </section>
  );
}