import { FC, useRef, useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useLanguage } from "../contexts/LanguageContext"
import emailjs from "emailjs-com"
import { Send } from "lucide-react"
import { toast } from "sonner"

const Contact: FC = () => {
  const { t } = useLanguage()
  const [loading, setLoading] = useState(false)

  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (loading) return

    setLoading(true)

    emailjs
      .sendForm(
        "service_byitqao",
        "template_f1u3265",
        e.currentTarget,
        "jqAFiqmvjSNfRV0u6"
      )
      .then(
        () => {
          toast.success(t.contact.success)
          if (emailRef.current) emailRef.current.value = ""
          if (messageRef.current) messageRef.current.value = ""
        },
        (error) => {
          toast.error(t.contact.error)
          console.error(error)
        }
      )
      .finally(() => setLoading(false))
  }

  return (
    <section id="contact" className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-primary">
            {t.contact.title} 📧
          </h2>
        </div>

        <form onSubmit={sendEmail} className="max-w-2xl mx-auto space-y-6">
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold text-gray-700">
              {t.contact.emailLabel}
            </label>
            <Input
              id="email"
              required
              type="email"
              name="email"
              placeholder={t.contact.emailLabel}
              ref={emailRef}
              className="bg-white border border-gray-300 focus:ring-1 focus:outline-none focus:ring-tertiary focus:border-tertiary"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-semibold text-gray-700">
              {t.contact.messageLabel}
            </label>
            <textarea
            required
              id="message"
              name="message"
              ref={messageRef}
              rows={5}
              placeholder={t.contact.messageLabel}
              className="w-full rounded-md border border-gray-300 bg-white p-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-tertiary focus:border-tertiary"
            ></textarea>
          </div>

          <div className="flex justify-center pt-4">
          <Button
              type="submit"
              disabled={loading}
              className="px-6 py-3 text-base font-medium cursor-pointer bg-primary text-white hover:opacity-90 transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? t.contact.sending || "Envoi en cours..." : t.contact.sendButton}
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
