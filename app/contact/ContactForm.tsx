"use client";

import { useState } from "react";

type Field = {
  id: string;
  label: string;
  type: "text" | "email" | "textarea";
};

const fields: Field[] = [
  { id: "name", label: "Name", type: "text" },
  { id: "email", label: "Email", type: "email" },
  { id: "message", label: "Message", type: "textarea" },
];

const controlClass =
  "block w-full rounded-[6px] border border-black/25 form-field px-3 text-[16px] leading-6 text-black outline-none focus:border-gold";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="flex flex-col gap-[18px] bg-white"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      {fields.map((field) => {
        const isTextarea = field.type === "textarea";
        return (
          <div key={field.id}>
            <label
              htmlFor={field.id}
              className="block h-[24px] text-[16px] leading-6 font-medium text-black"
            >
              {field.label}
              <span className="text-[rgb(220,38,38)]">*</span>
            </label>
            <div className={isTextarea ? "h-[130px] pt-[6px]" : "h-[56px] pt-[6px]"}>
              {isTextarea ? (
                <textarea
                  id={field.id}
                  name={field.id}
                  required
                  rows={4}
                  className={`${controlClass} h-[118px] resize-y`}
                />
              ) : (
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  required
                  className={`${controlClass} h-[44px]`}
                />
              )}
            </div>
            <div className="h-[16px]" aria-hidden="true" />
          </div>
        );
      })}
      <div>
        <button
          type="submit"
          className="inline-block rounded-[6px] border border-gold bg-gold px-[14px] py-[10px] text-[16px] leading-6 font-medium text-white transition-colors duration-200 hover:border-gold-light hover:bg-gold-light"
        >
          <span>Submit</span>
        </button>
      </div>
      {submitted ? (
        <p role="status" className="text-[16px] leading-[27.2px] text-gold">
          Thank you for reaching out. We will be in touch shortly.
        </p>
      ) : null}
    </form>
  );
}
