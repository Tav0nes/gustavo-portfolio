"use client";
import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mwvnknnk", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 text-left">
      <div>
        <label htmlFor="name" className="text-sm font-medium">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 w-full rounded-lg border border-border bg-surface px-4 py-2 text-foreground placeholder:text-muted-strong focus:border-accent focus:outline-none"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 w-full rounded-lg border border-border bg-surface px-4 py-2 text-foreground placeholder:text-muted-strong focus:border-accent focus:outline-none"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="mt-1 w-full rounded-lg border border-border bg-surface px-4 py-2 text-foreground placeholder:text-muted-strong focus:border-accent focus:outline-none resize-none"
          placeholder="Your message..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-accent px-8 py-3 text-sm font-medium text-highlight transition-colors hover:bg-accent-hover disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
      {status === "success" && (
        <p className="text-sm text-accent">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}