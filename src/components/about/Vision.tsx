import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

interface VisionProps {
  className?: string;
}

export function Vision({ className }: VisionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("bg-gray-50 rounded-2xl p-8 h-full", className)}
    >
      <h2 className="text-2xl font-bold text-gray-900">Vår drivkraft</h2>
      <p className="mt-4 text-lg text-gray-600">
        Vi vill skapa en värld där företag kan utveckla och använda AI-lösningar utan att 
        behöva kompromissa med säkerhet, dataintegritet eller flexibilitet. Vår mission 
        är att ge er full kontroll över er AI-resa, med teknik som ständigt förbättras 
        och anpassas till era behov.
      </p>
    </motion.div>
  );
}