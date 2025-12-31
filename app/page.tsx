import Link from "next/link";
import {
  ArrowRightIcon,
  CheckCircle2Icon,
  TruckIcon,
  ShieldCheckIcon,
  HeadphonesIcon,
  CameraIcon,
  CableIcon,
  NetworkIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
          <div className="absolute inset-0 bg-[url('/abstract-circuit-pattern.png')] opacity-10 bg-center bg-cover" />
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 animate-in fade-in duration-1000 slide-in-from-bottom-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-8">
                <Badge
                  variant="secondary"
                  className="w-fit bg-accent text-accent-foreground"
                >
                  Trusted by 10,000+ Customers
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                  Professional Security Solutions for Your Peace of Mind
                </h1>
                <p className="text-lg text-primary-foreground/90 leading-relaxed">
                  Premium CCTV cameras, DVR/NVR systems, and security
                  electronics. Quality products with expert installation and
                  support services.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <Link href="/products">
                      Browse Products
                      <ArrowRightIcon className="ml-2 size-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                  >
                    <a href="tel:+917066647773">Call for Quote</a>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2Icon className="size-5 text-accent" />
                    <span className="text-sm">2 Year Warranty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2Icon className="size-5 text-accent" />
                    <span className="text-sm">Free Installation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2Icon className="size-5 text-accent" />
                    <span className="text-sm">24/7 Support</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 shadow-2xl">
                  <img
                    src="/modern-security-camera-system.jpg"
                    alt="Security Camera System"
                    className="size-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                Why Choose RI Plus?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We provide comprehensive security solutions with premium
                products and exceptional service.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <TruckIcon className="size-10 text-accent mb-2" />
                  <CardTitle>Fast Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    Free shipping on orders over $500. Express delivery
                    available nationwide.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <ShieldCheckIcon className="size-10 text-accent mb-2" />
                  <CardTitle>Quality Guaranteed</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    All products come with manufacturer warranty and quality
                    assurance.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <HeadphonesIcon className="size-10 text-accent mb-2" />
                  <CardTitle>Expert Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    24/7 technical support and installation assistance from our
                    experts.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CheckCircle2Icon className="size-10 text-accent mb-2" />
                  <CardTitle>Easy Returns</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    30-day money-back guarantee with hassle-free returns and
                    exchanges.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                Browse by Category
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our comprehensive range of security products and IT
                solutions.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
              <Link href="/products?category=cameras" className="group">
                <Card className="transition-all hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="mx-auto size-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <CameraIcon className="size-8 text-accent" />
                    </div>
                    <CardTitle>CCTV Cameras</CardTitle>
                    <CardDescription className="leading-relaxed">
                      IP & Analog cameras for surveillance and security
                      monitoring
                    </CardDescription>
                    <Button variant="ghost" className="mt-2">
                      View Products
                      <ArrowRightIcon className="ml-2 size-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/products?category=computers" className="group">
                <Card className="transition-all hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="mx-auto size-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <NetworkIcon className="size-8 text-accent" />
                    </div>
                    <CardTitle>Computers & Laptops</CardTitle>
                    <CardDescription className="leading-relaxed">
                      High-performance desktops and modern laptops
                    </CardDescription>
                    <Button variant="ghost" className="mt-2">
                      View Products
                      <ArrowRightIcon className="ml-2 size-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/products?category=accessories" className="group">
                <Card className="transition-all hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="mx-auto size-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <CableIcon className="size-8 text-accent" />
                    </div>
                    <CardTitle>Accessories</CardTitle>
                    <CardDescription className="leading-relaxed">
                      Cables, connectors, power supplies, and mounting hardware
                    </CardDescription>
                    <Button variant="ghost" className="mt-2">
                      View Products
                      <ArrowRightIcon className="ml-2 size-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/products?category=networking" className="group">
                <Card className="transition-all hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="mx-auto size-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <NetworkIcon className="size-8 text-accent" />
                    </div>
                    <CardTitle>Networking</CardTitle>
                    <CardDescription className="leading-relaxed">
                      Switches, routers, and network infrastructure equipment
                    </CardDescription>
                    <Button variant="ghost" className="mt-2">
                      View Products
                      <ArrowRightIcon className="ml-2 size-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 sm:py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                  Featured Products
                </h2>
                <p className="text-lg text-muted-foreground mt-2">
                  Best sellers and new arrivals
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href="/products">
                  View All
                  <ArrowRightIcon className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Riplus IP 5MP Bullet Camera",
                  price: "3,999",
                  image: "/riplus-5megapixel-bullet-camera.webp",
                  badge: "Best Seller",
                },
                {
                  name: "Riplus WiFi Robot Camera",
                  price: "2,499",
                  image: "/riplus-rubout-camera.webp",
                  badge: "Trending",
                },
                {
                  name: "Riplus IP 4MP Bullet Camera",
                  price: "3,299",
                  image: "/riplus-4mp-bullet-camera.webp",
                  badge: "Popular",
                },
                {
                  name: "Riplus 8 Channel PoE Switch (Giga Uplink)",
                  price: "4,999",
                  image: "/riplus-switch-poe-gigalink.webp",
                  badge: "Professional",
                },
              ].map((product, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-square overflow-hidden bg-secondary">
                    {product.badge && (
                      <Badge className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground">
                        {product.badge}
                      </Badge>
                    )}
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="size-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4 space-y-3">
                    <CardTitle className="text-base">{product.name}</CardTitle>
                    <div className="space-y-3">
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-accent">
                          ₹{product.price}
                        </span>
                        <span className="text-[10px] text-muted-foreground uppercase font-medium tracking-wider">
                          * Fitting charges extra
                        </span>
                      </div>
                      <Button
                        asChild
                        size="sm"
                        className="w-full bg-primary hover:bg-primary/90"
                      >
                        <a href="tel:+919876543210">Call to Order</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-primary to-primary/90">
              <CardContent className="p-12 text-center space-y-6 text-primary-foreground">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                  Need Help Choosing the Right System?
                </h2>
                <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                  Our security experts are ready to help you design the perfect
                  surveillance solution for your needs.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <Link href="/contact">
                      Get Free Consultation
                      <ArrowRightIcon className="ml-2 size-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                  >
                    <Link href="/products">Browse Products</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
