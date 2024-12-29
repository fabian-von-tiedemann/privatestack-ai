import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { ContactButton } from "../ui/contact-button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Namnet måste vara minst 2 tecken.",
  }),
  email: z.string().email({
    message: "Ogiltig e-postadress.",
  }),
  message: z.string().min(10, {
    message: "Meddelandet måste vara minst 10 tecken.",
  }),
})

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data)
    // TODO: Implement form submission
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-2xl shadow-lg p-8 h-full"
    >
      <h2 className="text-2xl font-bold text-gray-900">Hör av er</h2>
      <p className="mt-4 text-lg text-gray-600">
        Har ni frågor, behöver ni support eller vill ni diskutera ett kommande projekt? 
        Vi finns här för er.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Namn</FormLabel>
                <FormControl>
                  <Input placeholder="Ditt namn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-post</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Din e-postadress" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Meddelande</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Skriv ditt meddelande här..." 
                    className="min-h-[120px]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <ContactButton 
            className="w-full"
            title="Kontakta oss"
            description="Fyll i formuläret så återkommer vi så snart som möjligt"
          >
            Skicka meddelande
          </ContactButton>
        </form>
      </Form>

      <div className="mt-8 space-y-4 text-sm text-gray-600">
        <p>
          <strong>E-post:</strong>{' '}
          <a href="mailto:kontakt@privatestack.ai" className="text-blue-600 hover:text-blue-500">
            kontakt@privatestack.ai
          </a>
        </p>
        <p>
          <strong>Support:</strong>{' '}
          <a href="mailto:support@privatestack.ai" className="text-blue-600 hover:text-blue-500">
            support@privatestack.ai
          </a>
        </p>
      </div>
    </motion.div>
  )
}