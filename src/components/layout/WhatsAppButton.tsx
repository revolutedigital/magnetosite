"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5515997166881?text=Olá! Gostaria de mais informações sobre os produtos Magneto."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  );
}
