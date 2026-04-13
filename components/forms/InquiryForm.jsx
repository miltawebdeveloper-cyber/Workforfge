"use client";

import { useState } from "react";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

export default function InquiryForm() {
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (phone) => {
    // Remove the + sign as requested
    const formattedPhone = phone.replace("+", "");
    setFormData({ ...formData, phone: formattedPhone });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.phone.length < 5) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-slate-50 border border-slate-200 p-6 md:p-12 text-center space-y-5 md:space-y-6">
        <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl md:text-2xl font-black text-primary uppercase tracking-widest">Inquiry Received</h3>
        <p className="text-slate-600 font-light leading-relaxed max-w-xs mx-auto">
          Thank you for reaching out. Our concierge team will contact you shortly to discuss your requirements.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2159dc] hover:text-primary transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative z-0 space-y-6 md:space-y-8 text-left">
      <div className="group relative z-10 border-b border-primary/10 focus-within:border-[#2159dc] transition-colors">
        <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#2159dc] mb-2">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-transparent py-2.5 md:py-3 outline-none text-base md:text-lg font-light text-primary"
        />
      </div>

      <div className="group relative z-20 border-b border-primary/10 focus-within:border-[#2159dc] transition-colors pb-1">
        <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#2159dc] mb-2">Phone Number</label>
        <PhoneInput
          defaultCountry="in"
          value={formData.phone}
          onChange={handlePhoneChange}
          style={{
            '--react-international-phone-border-color': 'transparent',
            '--react-international-phone-background-color': '#fff',
            '--react-international-phone-text-color': '#000',
            '--react-international-phone-font-size': '16px',
            '--react-international-phone-dropdown-item-background-hover': '#f4f4f4',
            '--react-international-phone-dropdown-z-index': '30',
          }}
          inputStyle={{
            width: '100%',
            border: 'none',
            fontSize: '16px',
            fontWeight: '300',
            fontFamily: 'inherit',
            color: 'var(--color-primary)',
            background: 'transparent',
            paddingLeft: '10px'
          }}
          countrySelectorStyle={{
            buttonStyle: {
              border: 'none',
              background: 'transparent',
              padding: '0'
            },
            dropdownStyle: {
              background: '#fff',
              backgroundColor: '#fff',
              color: '#000',
              border: '1px solid #eee',
              borderRadius: '8px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              zIndex: 30,
              maxHeight: '240px',
              overflowY: 'auto'
            }
          }}
        />
      </div>

      <div className="group relative z-10 border-b border-primary/10 focus-within:border-[#2159dc] transition-colors">
        <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#2159dc] mb-2">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-transparent py-2.5 md:py-3 outline-none text-base md:text-lg font-light text-primary"
        />
      </div>

      <div className="group relative z-10 border-b border-primary/10 focus-within:border-[#2159dc] transition-colors">
        <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#2159dc] mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full bg-transparent py-2.5 md:py-3 outline-none text-base md:text-lg font-light h-12 md:h-16 resize-none text-primary"
        ></textarea>
      </div>

      {status === "error" && (
        <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest text-center">
          Something went wrong. Please check your details and try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 md:py-5 bg-primary text-white font-black uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-[#2159dc] transition-all text-[11px] md:text-xs shadow-xl active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}

