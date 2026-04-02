import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, ExternalLink, Send } from "lucide-react";
import PageIntro from "@/components/PageIntro";
import { contactChannels, profile } from "@/content/site";
import { supabase } from "@/lib/supabase";
import { containerVariants, itemVariants } from "@/lib/motion";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus({ type: "loading", message: "Sending message..." });

    try {
      const { error } = await supabase.from("contact_messages").insert([
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
      ]);

      if (error) {
        throw error;
      }

      setStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      const message = error instanceof Error ? error.message : "Unknown error";
      setStatus({
        type: "error",
        message: `Message failed to send. ${message}`,
      });
    }
  };

  return (
    <div className="pb-8 pt-10">
      <section className="page-wrap">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <motion.div variants={itemVariants}>
            <PageIntro
              eyebrow="Contact"
              title="Open to research collaborations, product roles, and conversations worth having."
              description="The form works best for project inquiries or role discussions. Direct channels are listed alongside it if you prefer a faster route."
            />

            <div className="editorial-list mt-10">
              {contactChannels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                  className="grid gap-3 py-5 md:grid-cols-[140px_1fr_auto]"
                >
                  <span className="mono text-[0.64rem] text-[color:var(--muted)]">
                    {channel.label}
                  </span>
                  <span className="text-xl text-[color:var(--ink)]">
                    {channel.value}
                  </span>
                  <ExternalLink className="h-4 w-4 self-center text-[color:var(--muted)]" />
                </a>
              ))}
            </div>

            <div className="paper-strip mt-10 rounded-[2rem] p-6 sm:p-8">
              <p className="mono text-[0.68rem] text-[color:var(--muted)]">
                Availability
              </p>
              <p className="display-line mt-5 text-[color:var(--ink)]">
                Remote-friendly now, preparing for Toronto in Fall 2026.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="button-outline"
                >
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="button-solid"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="paper-strip rounded-[2rem] p-6 sm:p-8 lg:p-10">
              <span className="kicker">Form</span>
              <h2 className="section-title mt-6 text-[color:var(--ink)]">
                Say hello.
              </h2>
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mono text-[0.64rem] text-[color:var(--muted)]">
                      Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-3 w-full border-b border-[color:var(--line-strong)] bg-transparent px-0 py-3 text-lg text-[color:var(--ink)] outline-none placeholder:text-[color:var(--muted)]"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className="mono text-[0.64rem] text-[color:var(--muted)]">
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-3 w-full border-b border-[color:var(--line-strong)] bg-transparent px-0 py-3 text-lg text-[color:var(--ink)] outline-none placeholder:text-[color:var(--muted)]"
                      placeholder="name@example.com"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mono text-[0.64rem] text-[color:var(--muted)]">
                    Subject
                  </span>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="mt-3 w-full border-b border-[color:var(--line-strong)] bg-transparent px-0 py-3 text-lg text-[color:var(--ink)] outline-none placeholder:text-[color:var(--muted)]"
                    placeholder="What is this about?"
                  />
                </label>

                <label className="block">
                  <span className="mono text-[0.64rem] text-[color:var(--muted)]">
                    Message
                  </span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={7}
                    className="mt-3 w-full resize-none border border-[color:var(--line)] bg-[rgba(249,244,236,0.62)] px-4 py-4 text-lg text-[color:var(--ink)] outline-none placeholder:text-[color:var(--muted)]"
                    placeholder="Tell me about the work, the role, or the problem you want to solve."
                  />
                </label>

                {status.type !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 text-sm"
                    style={{
                      color:
                        status.type === "success"
                          ? "#2f6643"
                          : status.type === "error"
                            ? "#9e3d2a"
                            : "var(--muted)",
                    }}
                  >
                    {status.type === "success" && <CheckCircle className="h-4 w-4" />}
                    {status.type === "error" && <AlertCircle className="h-4 w-4" />}
                    {status.type === "loading" && (
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    )}
                    <span>{status.message}</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status.type === "loading"}
                  className="button-solid w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status.type === "loading" ? (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  {status.type === "loading" ? "Sending..." : "Send message"}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
