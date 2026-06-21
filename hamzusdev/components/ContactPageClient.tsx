"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Send, Terminal, Loader2 } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export default function ContactPageClient() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Local form validation
    const localErrors: FormErrors = {};
    if (!form.name.trim()) {
      localErrors.name = "Identifier / Name is required";
    }
    if (!form.email.trim()) {
      localErrors.email = "Routing / Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      localErrors.email = "Please input a valid email address";
    }
    if (!form.message.trim()) {
      localErrors.message = "Payload / Message is required";
    }

    if (Object.keys(localErrors).length > 0) {
      setErrors(localErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Initiate Protocol</h1>
        <p className="text-lg text-muted-foreground max-w-2xl font-light">
          Available for new opportunities, system architectures, or product consulting. Complete the formspree form to establish connection.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
        {/* Contact Coordinates & Social links */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Coordinates</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-light">
              Based in remote space, working across global time zones. Direct inquiries can also be routed using social links below.
            </p>
          </div>

          {/* Social Icons buttons list */}
          <div className="flex gap-4">
            <a
              href="https://github.com/hamzusdev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-border bg-background hover:border-accent text-muted-foreground hover:text-foreground transition-all duration-300 rounded-none flex items-center justify-center"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/hamzusdev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-border bg-background hover:border-accent text-muted-foreground hover:text-foreground transition-all duration-300 rounded-none flex items-center justify-center"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="p-4 border border-border bg-background hover:border-accent text-muted-foreground hover:text-foreground transition-all duration-300 rounded-none flex items-center justify-center"
              aria-label="Email Coordinates"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="pt-4 font-mono text-xs text-muted-foreground flex items-center gap-2">
            <Terminal className="w-4 h-4 text-accent" />
            <span>Secure Connection: TLS // secure.hamzus.dev</span>
          </div>
        </div>

        {/* Contact Submission Form */}
        <div className="space-y-6">
          {status === "success" && (
            <div className="p-4 border border-green-500/20 bg-green-500/5 text-green-600 text-sm font-mono rounded-none">
              &gt; Transmission Successful. Connection established.
            </div>
          )}

          {status === "error" && (
            <div className="p-4 border border-red-500/20 bg-red-500/5 text-red-600 text-sm font-mono rounded-none">
              &gt; Error: Transmission Failed. Verify Formspree configuration.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-xs font-mono text-muted-foreground uppercase">
                Identifier / Name
              </label>
              <input
                type="text"
                id="name"
                value={form.name}
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: undefined });
                }}
                className={`w-full bg-background border px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors rounded-none ${errors.name ? "border-red-500" : "border-border"
                  }`}
                placeholder="e.g. HAL 9000"
              />
              {errors.name && (
                <p className="text-[11px] font-mono text-red-500 mt-1">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-mono text-muted-foreground uppercase">
                Routing / Email Address
              </label>
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: undefined });
                }}
                className={`w-full bg-background border px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors rounded-none ${errors.email ? "border-red-500" : "border-border"
                  }`}
                placeholder="e.g. hal@discovery.one"
              />
              {errors.email && (
                <p className="text-[11px] font-mono text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-xs font-mono text-muted-foreground uppercase">
                Payload / Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => {
                  setForm({ ...form, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: undefined });
                }}
                className={`w-full bg-background border px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors rounded-none resize-none ${errors.message ? "border-red-500" : "border-border"
                  }`}
                placeholder="State your objectives..."
              />
              {errors.message && (
                <p className="text-[11px] font-mono text-red-500 mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 font-semibold hover:opacity-90 transition-opacity rounded-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-sm"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Dispatching Payload...
                </>
              ) : (
                <>
                  Dispatch Payload
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
