"use client"

import type React from "react"

import { useState } from "react"
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">Get in Touch</h1>
            <p className="mt-4 text-lg text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Have questions? Our expert team is here to help you find the perfect security solution
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-4">Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Reach out to our team for product inquiries, technical support, or custom project consultations.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="border-0 shadow-md transition-all hover:shadow-lg">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="size-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <PhoneIcon className="size-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Call for Orders</h3>
                        <p className="text-muted-foreground">+91 7066647773</p>
                        <p className="text-sm text-muted-foreground mt-1">Mon-Sat: 10:00 AM - 7:00 PM</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md transition-all hover:shadow-lg">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="size-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <MailIcon className="size-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground">contact@iconcomputers.in</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md transition-all hover:shadow-lg">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="size-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <MapPinIcon className="size-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Address</h3>
                        <p className="text-muted-foreground">
                          Tipu sultan chokh, Kinwat Rd, Gokunda
                          <br />
                          kinwat, Maharashtra, india -431804
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="size-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <ClockIcon className="size-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday: 10:00 AM - 4:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project or inquiry..."
                        className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] placeholder:text-muted-foreground"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                      Send Message
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d308.1322331108953!2d78.2058239619805!3d19.60428493691562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd23fd571bfa1bd%3A0x6424065036ef39a2!2sTipu%20sultan%20chowk!5e1!3m2!1sen!2sin!4v1766810629936!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Office Location"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
