"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  TruckIcon,
  ShieldCheckIcon,
  ArrowLeftIcon,
  StarIcon,
  PhoneIcon,
  WrenchIcon,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const productDetails = {
  1: {
    name: "Riplus WiFi Robot Camera",
    price: "2,499",
    image: "/riplus-rubout-camera.webp",
    badge: "Trending",
    inStock: true,
    rating: 4.4,
    reviews: 186,
    description:
      "Smart WiFi robot camera with pan-tilt control and mobile app monitoring. Ideal for indoor home security and baby monitoring.",
    specifications: [
      { label: "Resolution", value: "3MP (2304 × 1296)" },
      { label: "Connectivity", value: "WiFi 2.4GHz" },
      { label: "Pan/Tilt", value: "355° / 90°" },
      { label: "Night Vision", value: "Up to 10m IR" },
    ],
    features: [
      "Mobile app live view",
      "Motion detection alerts",
      "Two-way audio",
      "Remote pan & tilt control",
    ],
  },

  2: {
    name: "Riplus SMPS 1004 Power Supply",
    price: "749",
    image: "/riplus-smps-104.webp",
    badge: "Essential",
    inStock: true,
    rating: 4.6,
    reviews: 98,
    description:
      "4-channel CCTV SMPS power supply designed for stable and continuous camera operation.",
    specifications: [
      { label: "Channels", value: "4 Output" },
      { label: "Input", value: "220V AC" },
      { label: "Output", value: "12V DC" },
    ],
    features: [
      "Metal body",
      "Short circuit protection",
      "Stable power delivery",
    ],
  },

  3: {
    name: "Riplus IP 5MP Bullet Camera",
    price: "3,999",
    image: "/riplus-5megapixel-bullet-camera.webp",
    badge: "Best Seller",
    inStock: true,
    rating: 4.7,
    reviews: 211,
    description:
      "High-definition 5MP IP bullet camera for outdoor surveillance with strong night vision.",
    specifications: [
      { label: "Resolution", value: "5MP" },
      { label: "Lens", value: "3.6mm Fixed" },
      { label: "Night Vision", value: "30m IR" },
      { label: "Weather Rating", value: "IP67" },
    ],
    features: [
      "Weatherproof housing",
      "ONVIF compatible",
      "Clear night footage",
    ],
  },

  4: {
    name: "Riplus IP 4MP Bullet Camera",
    price: "3,299",
    image: "/riplus-4mp-bullet-camera.webp",
    badge: "Popular",
    inStock: true,
    rating: 4.5,
    reviews: 164,
    description:
      "Reliable 4MP IP bullet camera suitable for home and commercial surveillance.",
    specifications: [
      { label: "Resolution", value: "4MP" },
      { label: "Lens", value: "3.6mm" },
      { label: "Night Vision", value: "25m IR" },
    ],
    features: ["Sharp video quality", "Outdoor-ready build"],
  },

  5: {
    name: "Riplus CAT6 Network Cable",
    price: "2,199",
    image: "/riplus-cat-wire.webp",
    badge: "High Demand",
    inStock: true,
    rating: 4.6,
    reviews: 142,
    description:
      "High-quality CAT6 LAN cable for IP cameras and networking installations.",
    specifications: [
      { label: "Type", value: "CAT6" },
      { label: "Length", value: "305 meters" },
      { label: "Material", value: "Pure Copper" },
    ],
    features: ["Low signal loss", "PoE friendly"],
  },

  6: {
    name: "Riplus WiFi Bullet Camera",
    price: "2,999",
    image: "/riplus-bullet-camera.webp",
    badge: "New",
    inStock: true,
    rating: 4.3,
    reviews: 121,
    description:
      "Outdoor WiFi bullet camera with mobile app monitoring and night vision.",
    specifications: [
      { label: "Resolution", value: "3MP" },
      { label: "Connectivity", value: "WiFi" },
      { label: "Night Vision", value: "20m IR" },
    ],
    features: ["Wireless setup", "Mobile alerts"],
  },

  7: {
    name: "Riplus AHD 2.4MP CCTV Camera",
    price: "1,399",
    image: "/riplus-ahd2.4-camera.webp",
    badge: "Value Pick",
    inStock: true,
    rating: 4.2,
    reviews: 89,
    description: "Affordable AHD CCTV camera for small security installations.",
    specifications: [
      { label: "Resolution", value: "2.4MP" },
      { label: "Signal", value: "AHD" },
    ],
    features: ["Budget friendly", "DVR compatible"],
  },

  8: {
    name: "Riplus 8 Channel PoE Switch (Giga Uplink)",
    price: "4,999",
    image: "/riplus-switch-poe-gigalink.webp",
    badge: "Professional",
    inStock: true,
    rating: 4.7,
    reviews: 76,
    description:
      "8-channel PoE switch with gigabit uplink for IP camera networks.",
    specifications: [
      { label: "Ports", value: "8 PoE + 1 Uplink" },
      { label: "Speed", value: "Gigabit" },
    ],
    features: ["Stable PoE output", "Metal body"],
  },

  9: {
    name: "Riplus 4 Channel PoE Switch",
    price: "2,999",
    image: "/riplus-4channel-poe.webp",
    badge: "Compact",
    inStock: true,
    rating: 4.4,
    reviews: 61,
    description: "Compact PoE switch for small IP camera setups.",
    specifications: [{ label: "Ports", value: "4 PoE" }],
    features: ["Plug and play", "Reliable power"],
  },

  10: {
    name: "Riplus 3MP AHD Bullet Camera",
    price: "1,799",
    image: "/3mp-ahd-bullet-camera.webp",
    badge: "Reliable",
    inStock: true,
    rating: 4.3,
    reviews: 103,
    description:
      "3MP AHD bullet camera offering balanced performance and durability.",
    specifications: [
      { label: "Resolution", value: "3MP" },
      { label: "Signal", value: "AHD" },
    ],
    features: ["Clear output", "Long life"],
  },

  11: {
    name: "3+1 CCTV Power Cable",
    price: "1,299",
    image: "/3+1-Cat-wire.webp",
    badge: "Installer Choice",
    inStock: true,
    rating: 4.5,
    reviews: 157,
    description:
      "3+1 power cable used for CCTV camera power and video transmission.",
    specifications: [
      { label: "Type", value: "3+1 CCTV Cable" },
      { label: "Length", value: "90 meters" },
    ],
    features: ["Strong insulation", "Easy installation"],
  },
};

export default function ProductDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const product =
    productDetails[id as keyof typeof productDetails] || productDetails[1];

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="bg-secondary/30 py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground"
              >
                Home
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link
                href="/products"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">
                {product.name}
              </span>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Button variant="ghost" asChild className="mb-6">
              <Link href="/products">
                <ArrowLeftIcon className="mr-2 size-4" />
                Back to Products
              </Link>
            </Button>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Images */}
              <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-700">
                <div className="relative aspect-square overflow-hidden rounded-xl bg-secondary shadow-inner">
                  {product.badge && (
                    <Badge className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground">
                      {product.badge}
                    </Badge>
                  )}
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="size-full object-cover"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-700">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-balance">
                    {product.name}
                  </h1>
                  <div className="mt-3 flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`size-5 ${
                            i < Math.floor(product.rating)
                              ? "fill-accent text-accent"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex flex-col">
                    <p className="text-4xl font-bold text-accent">
                      ₹{product.price}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      * Note: Installation & fitting charges may apply depending
                      on location.
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {product.inStock ? (
                      <span className="text-green-600 font-medium">
                        In Stock
                      </span>
                    ) : (
                      <span className="text-destructive font-medium">
                        Out of Stock
                      </span>
                    )}
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center gap-4 pt-4">
                  <Button
                    size="lg"
                    disabled={!product.inStock}
                    className="flex-1 bg-primary hover:bg-primary/90 py-7 text-lg group transition-all"
                    asChild
                  >
                    <a href="tel:+919876543210">
                      <div className="flex flex-col items-center">
                        <span className="flex items-center gap-2">
                          <PhoneIcon className="size-5 group-hover:animate-bounce" />
                          Confirm your Order
                        </span>
                        <span className="text-sm font-normal opacity-90 mt-1">
                          +91 7066647773
                        </span>
                      </div>
                    </a>
                  </Button>
                </div>

                <div className="grid gap-4 border-t pt-6">
                  <div className="flex items-center gap-3">
                    <TruckIcon className="size-5 text-accent" />
                    <div>
                      <p className="font-medium">Free Delivery</p>
                      <p className="text-sm text-muted-foreground">
                        On orders over ₹500
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheckIcon className="size-5 text-accent" />
                    <div>
                      <p className="font-medium">3-Year Warranty</p>
                      <p className="text-sm text-muted-foreground">
                        Full manufacturer coverage
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <WrenchIcon className="size-5 text-accent" />
                    <div>
                      <p className="font-medium">Installation Support</p>
                      <p className="text-sm text-muted-foreground">
                        Professional fitting available at additional cost
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-16">
              <Tabs defaultValue="specifications">
                <TabsList>
                  <TabsTrigger value="specifications">
                    Specifications
                  </TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value="specifications" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        {product.specifications.map((spec, index) => (
                          <div
                            key={index}
                            className="flex justify-between py-3 border-b"
                          >
                            <span className="font-medium">{spec.label}</span>
                            <span className="text-muted-foreground">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="features" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="mt-0.5 size-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                              <div className="size-2 rounded-full bg-accent" />
                            </div>
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="reviews" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Customer Reviews</CardTitle>
                      <CardDescription>
                        See what our customers are saying
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-muted-foreground py-8">
                        Reviews coming soon
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Related Products */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold tracking-tight mb-6">
                Related Products
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    name: "Riplus IP 5MP Bullet Camera",
                    price: 3999.99,
                    image: "/riplus-5megapixel-bullet-camera.webp",
                    badge: "Best Seller",
                  },
                  {
                    name: "Riplus WiFi Bullet Camera",
                    price: 2999.45,
                    image: "/riplus-bullet-camera.webp",
                  },
                  {
                    name: "8CH POE Switch",
                    price: 4999.99,
                    image: "/riplus-switch-poe-gigalink.webp",
                  },
                  {
                    name: "Riplus CAT6 Network Cable",
                    price: 2199.78,
                    image: "/riplus-cat-wire.webp",
                  },
                ].map((relatedProduct, index) => (
                  <Card
                    key={index}
                    className="group overflow-hidden border shadow-md hover:shadow-xl transition-all"
                  >
                    <div className="relative aspect-square overflow-hidden bg-secondary">
                      <img
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        className="size-full object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-4 space-y-3">
                      <CardTitle className="text-base">
                        {relatedProduct.name}
                      </CardTitle>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-accent">
                          ${relatedProduct.price}
                        </span>
                        <Button size="sm" variant="outline">
                          View
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
