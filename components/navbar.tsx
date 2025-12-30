"use client"

import { useState } from "react"
import Link from "next/link"
import { MenuIcon, ShieldIcon, PhoneIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <ShieldIcon className="size-6 text-accent" />
          <span className="text-primary">Icon Computers</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Products
          </Link>
          <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        {/* Search & Call */}
        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="secondary"
            className="hidden sm:flex bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <a href="/contact">
              <PhoneIcon className="mr-2 size-4" />
              Call Now
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="sm:hidden">
            <a href="tel:+917066647773">
              <PhoneIcon className="size-5" />
            </a>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <MenuIcon className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm">
              <div className="flex flex-col gap-6 pt-6">
                <Link href="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link href="/products" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Products
                </Link>
                <Link href="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  About
                </Link>
                <Link href="/contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
