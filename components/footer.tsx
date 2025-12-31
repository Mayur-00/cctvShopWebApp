
"use client"

import Link from "next/link"
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, ShieldIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ShieldIcon className="size-6 text-accent" />
              <span className="font-semibold text-lg">Ri Plus</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Leading CCTV and IT solutions provider in India. Quality products with expert installation and support.
            </p>
            <div className="pt-2 text-sm text-primary-foreground/70">
              <p>Call: +91 7066647773</p>
              <p>Email: sales@RiPlus.in</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Shop Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products?category=cameras"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  CCTV Cameras
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=computers"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Computers & Laptops
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=accessories"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=networking"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Networking
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">Get updates on new products and special offers.</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="secondary" className="shrink-0 bg-accent text-accent-foreground hover:bg-accent/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/20 pt-8 sm:flex-row">
          <p className="text-sm text-primary-foreground/70">© 2025 Ri Plus. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
              <FacebookIcon className="size-5" />
            </Link>
            <Link href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
              <TwitterIcon className="size-5" />
            </Link>
            <Link href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
              <InstagramIcon className="size-5" />
            </Link>
            <Link href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
              <LinkedinIcon className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
