"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Mesaj trimis cu succes!",
      description: "Vă vom contacta în cel mai scurt timp.",
    })
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleWhatsApp = () => {
    const message = `Salut! Doresc să iau legătura cu voi pentru o solicitare de ofertă.`
    const whatsappUrl = `https://wa.me/40721379761?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contactează-ne</h1>
        <p className="text-xl text-gray-600">Suntem aici să te ajutăm cu toate nevoile tale de construcție</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Trimite-ne un Mesaj</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nume *</label>
                  <Input name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <Input name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telefon *</label>
                  <Input name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subiect</label>
                  <Input name="subject" value={formData.subject} onChange={handleChange} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mesaj *</label>
                <Textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descrie proiectul tău și materialele necesare..."
                  required
                />
              </div>

              <div className="space-y-3">
                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                  Trimite Mesajul
                </Button>

                <Button type="button" onClick={handleWhatsApp} variant="outline" className="w-full bg-transparent">
                  Contactează pe WhatsApp
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Informații de Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Adresa</h3>
                <p className="text-gray-600">
                  Strada Exemplu nr. 123
                  <br />
                  București, România
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Telefon</h3>
                <p className="text-gray-600">+40 721 379 761</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">david.gunescu@izopresto.ro</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Program</h3>
                <p className="text-gray-600">
                  Luni - Vineri: 08:00 - 18:00
                  <br />
                  Sâmbătă: 08:00 - 14:00
                  <br />
                  Duminică: Închis
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>De ce să ne alegi?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  Peste 10 ani de experiență în domeniu
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  Produse de calitate superioară
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  Prețuri competitive
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  Livrare rapidă în toată țara
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  Consultanță tehnică specializată
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
