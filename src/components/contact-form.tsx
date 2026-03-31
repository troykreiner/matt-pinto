"use client";

import { useEffect, useState } from "react";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

function getErrors(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.firstName.trim()) {
    errors.firstName = "First name is required.";
  }

  if (!values.lastName.trim()) {
    errors.lastName = "Last name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.subject.trim()) {
    errors.subject = "Subject is required.";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const errors = getErrors(values);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const completed = window.sessionStorage.getItem("contact-form-submitted");

    if (completed === "true") {
      setIsComplete(true);
      setSubmitSuccess(
        "Your message has been sent. Matt will review it and get back to you soon."
      );
    }
  }, []);

  function updateField(field: keyof FormValues, value: string) {
    if (isComplete) {
      return;
    }

    setValues((current) => ({ ...current, [field]: value }));
    setSubmitError("");
    setSubmitSuccess("");
  }

  function markTouched(field: keyof FormValues) {
    if (isComplete) {
      return;
    }

    setTouched((current) => ({ ...current, [field]: true }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isComplete) {
      return;
    }

    const nextTouched = {
      firstName: true,
      lastName: true,
      email: true,
      subject: true,
      message: true,
    } satisfies Record<keyof FormValues, boolean>;

    setTouched(nextTouched);
    setSubmitError("");
    setSubmitSuccess("");

    if (Object.keys(errors).length > 0) {
      setSubmitError("Please complete all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const payload = (await response.json()) as { error?: string; ok?: boolean };

      if (!response.ok) {
        throw new Error(payload.error ?? "Something went wrong. Please try again.");
      }

      setValues(initialValues);
      setTouched({});
      setIsComplete(true);
      setSubmitSuccess(
        "Your message has been sent. Matt will review it and get back to you soon."
      );

      if (typeof window !== "undefined") {
        window.sessionStorage.setItem("contact-form-submitted", "true");
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong. Please try again.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  function fieldClass(field: keyof FormValues) {
    const isInvalid = touched[field] && errors[field];
    return `contact-input${isInvalid ? " is-invalid" : ""}`;
  }

  if (isComplete) {
    return (
      <section className="contact-complete" aria-live="polite">
        <p className="contact-complete-eyebrow">Message Sent</p>
        <h2 className="contact-complete-title">Thanks for reaching out.</h2>
        <p className="contact-complete-copy">
          Your message has been sent successfully. Matt will review it and get back
          to you soon.
        </p>
      </section>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <fieldset className="contact-fieldset">
        <legend className="sr-only">Name</legend>
        <div className="contact-grid contact-grid--two">
          <label className="contact-field">
            <span className="contact-label">
              First Name <small>(required)</small>
            </span>
            <input
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={(event) => updateField("firstName", event.target.value)}
              onBlur={() => markTouched("firstName")}
              className={fieldClass("firstName")}
              aria-invalid={Boolean(touched.firstName && errors.firstName)}
              aria-describedby={errors.firstName ? "contact-firstName-error" : undefined}
            />
            {touched.firstName && errors.firstName ? (
              <span id="contact-firstName-error" className="contact-error">
                {errors.firstName}
              </span>
            ) : null}
          </label>

          <label className="contact-field">
            <span className="contact-label">
              Last Name <small>(required)</small>
            </span>
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={(event) => updateField("lastName", event.target.value)}
              onBlur={() => markTouched("lastName")}
              className={fieldClass("lastName")}
              aria-invalid={Boolean(touched.lastName && errors.lastName)}
              aria-describedby={errors.lastName ? "contact-lastName-error" : undefined}
            />
            {touched.lastName && errors.lastName ? (
              <span id="contact-lastName-error" className="contact-error">
                {errors.lastName}
              </span>
            ) : null}
          </label>
        </div>
      </fieldset>

      <label className="contact-field">
        <span className="contact-label">
          Email <small>(required)</small>
        </span>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={(event) => updateField("email", event.target.value)}
          onBlur={() => markTouched("email")}
          className={fieldClass("email")}
          aria-invalid={Boolean(touched.email && errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
        />
        {touched.email && errors.email ? (
          <span id="contact-email-error" className="contact-error">
            {errors.email}
          </span>
        ) : null}
      </label>

      <label className="contact-field">
        <span className="contact-label">
          Subject <small>(required)</small>
        </span>
        <input
          type="text"
          name="subject"
          value={values.subject}
          onChange={(event) => updateField("subject", event.target.value)}
          onBlur={() => markTouched("subject")}
          className={fieldClass("subject")}
          aria-invalid={Boolean(touched.subject && errors.subject)}
          aria-describedby={errors.subject ? "contact-subject-error" : undefined}
        />
        {touched.subject && errors.subject ? (
          <span id="contact-subject-error" className="contact-error">
            {errors.subject}
          </span>
        ) : null}
      </label>

      <label className="contact-field">
        <span className="contact-label">
          Message <small>(required)</small>
        </span>
        <textarea
          name="message"
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          onBlur={() => markTouched("message")}
          className={`${fieldClass("message")} contact-input--textarea`}
          aria-invalid={Boolean(touched.message && errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
        />
        {touched.message && errors.message ? (
          <span id="contact-message-error" className="contact-error">
            {errors.message}
          </span>
        ) : null}
      </label>

      {submitError ? <p className="contact-status contact-status--error">{submitError}</p> : null}
      {submitSuccess ? <p className="contact-status contact-status--success">{submitSuccess}</p> : null}

      <button type="submit" className="contact-submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
