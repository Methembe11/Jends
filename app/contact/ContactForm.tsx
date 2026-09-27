"use client";

import { useState, type FormEvent } from "react";
import { brand, whatsapp } from "@/lib/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Status = "idle" | "sending" | "sent" | "error";

const controlClass =
  "block w-full rounded-xs border border-line bg-surface px-4 text-body text-ink transition-colors duration-200 outline-none placeholder:text-ink-muted/70 focus:border-surface-inverse";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });

  const update = (field: keyof typeof values, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
  };

  const mailtoHref = () => {
    const subject = `Safari enquiry from ${values.name.trim()}`;
    const body = `${values.message.trim()}\n\n— ${values.name.trim()}\n${values.email.trim()}`;
    return `mailto:${brand.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const found: Record<string, string> = {};
    if (values.name.trim().length < 2) {
      found.name = "Please enter your name.";
    }
    if (!EMAIL_RE.test(values.email.trim())) {
      found.email = "Please enter a valid email address.";
    }
    if (values.message.trim().length < 10) {
      found.message = "Please tell us a little more (at least 10 characters).";
    }

    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");

    try {
      await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
    } catch {
      // The enquiry still reaches us through the visitor's mail app below.
    }

    setStatus("sent");
    window.location.href = mailtoHref();
  }

  if (status === "sent") {
    return (
      <div className="rounded-xs border border-line bg-surface-sunken p-6 lg:p-8">
        <h3 className="font-display text-card text-ink">Thank you</h3>
        <p className="mt-3 text-body text-ink-muted">
          Your email app should now be opening with your enquiry. If it did not
          open, use the button below, or reach us on WhatsApp or by phone.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={mailtoHref()}
            className="inline-flex min-h-12 items-center justify-center rounded-[50vw] border border-surface-inverse bg-surface-inverse px-6 py-3 text-btn text-ink-inverse transition-colors duration-200"
          >
            Open in your email app
          </a>
          <a
            href={whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-[50vw] border border-surface-inverse bg-transparent px-6 py-3 text-btn text-ink transition-colors duration-200 hover:bg-surface-inverse hover:text-ink-inverse"
          >
            Message on WhatsApp
          </a>
          <a
            href={brand.phoneHref}
            className="inline-flex min-h-12 items-center justify-center rounded-[50vw] border border-surface-inverse bg-transparent px-6 py-3 text-btn text-ink transition-colors duration-200 hover:bg-surface-inverse hover:text-ink-inverse"
          >
            Call {brand.phone}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(event) => update("company", event.target.value)}
        />
      </div>

      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-meta font-semibold text-ink"
        >
          Name <span className="text-error">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={values.name}
          onChange={(event) => update("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`${controlClass} h-12`}
        />
        {errors.name ? (
          <p id="name-error" className="mt-2 text-meta text-error">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-meta font-semibold text-ink"
        >
          Email <span className="text-error">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={values.email}
          onChange={(event) => update("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`${controlClass} h-12`}
        />
        {errors.email ? (
          <p id="email-error" className="mt-2 text-meta text-error">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-meta font-semibold text-ink"
        >
          Message <span className="text-error">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${controlClass} resize-y py-3`}
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-meta text-error">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-12 items-center justify-center rounded-[50vw] border border-surface-inverse bg-surface-inverse px-6 py-3 text-btn text-ink-inverse transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending" : "Send enquiry"}
        </button>
        <a
          href={whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-[50vw] border border-surface-inverse bg-transparent px-6 py-3 text-btn text-ink transition-colors duration-200 hover:bg-surface-inverse hover:text-ink-inverse"
        >
          WhatsApp instead
        </a>
      </div>

      <p role="status" aria-live="polite" className="text-meta text-ink-muted">
        {status === "sending"
          ? "Preparing your enquiry…"
          : "We aim to reply the same working day."}
      </p>
    </form>
  );
}
