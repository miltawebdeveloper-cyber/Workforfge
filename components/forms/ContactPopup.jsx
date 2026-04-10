"use client";

import { useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import InquiryForm from "./InquiryForm";

export default function ContactPopup({ isOpen, onClose }) {
  // Lock body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
          />

          {/* Panel */}
          <m.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
                aria-label="Close popup"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>

              {/* Header */}
              <div className="px-8 pt-8 pb-4">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-highlight mb-2">
                  Get in Touch
                </p>
                <h3 className="text-2xl font-black text-primary tracking-tight">
                  Request Pricing Details
                </h3>
                <p className="text-sm text-slate-500 font-light mt-2">
                  Fill in your details and our team will get back to you soon.
                </p>
              </div>

              {/* Form */}
              <div className="px-8 pb-8">
                <InquiryForm />
              </div>
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
}

