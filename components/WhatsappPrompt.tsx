"use client"

import { useState, useEffect } from "react"

export default function WhatsAppPrompt() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const shown = localStorage.getItem("whatsappPromptShown")
    if (!shown) {
      setShow(true)
      localStorage.setItem("whatsappPromptShown", "true")
    }
  }, [])

  if (!show) return null

  return (
    <div className="fixed bottom-24 right-6 bg-white text-gray-900 p-4 rounded-lg shadow-lg max-w-xs z-50">
      <div className="flex items-start">
        <p className="flex-1 text-sm">
          Contactează-ne pe WhatsApp dacă dorești o ofertă personalizată!
        </p>
        <button
          onClick={() => setShow(false)}
          className="ml-2 text-gray-400 hover:text-gray-600"
          aria-label="Închide"
        >
          &times;
        </button>
      </div>
    </div>
  )
}
