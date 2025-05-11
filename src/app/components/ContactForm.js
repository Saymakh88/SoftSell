"use client";
import React, { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple frontend validation
    const { name, email, company, type, message } = form;
    if (!name || !email || !company || !type || !message) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    setLoading(true);

    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        company: "",
        type: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <section id="contact" className="py-16 bg-white px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-black">Contact Us</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto grid gap-4 bg-gray-200 p-6 rounded-lg shadow"
      >
        {error && <p className="text-red-500 font-medium">{error}</p>}
        {submitted && (
          <p className="text-green-600 font-medium">
            ✅ Your message has been sent successfully!
          </p>
        )}

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="p-3 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="p-3 border rounded"
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
          className="p-3 border rounded"
        />
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="p-3 border rounded"
        >
          <option value="">Select License Type</option>
          <option value="office">Microsoft Office</option>
          <option value="adobe">Adobe Suite</option>
          <option value="antivirus">Antivirus</option>
        </select>
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          className="p-3 border rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className={`${
            loading
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          } text-white py-2 px-4 rounded font-semibold transition`}
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
