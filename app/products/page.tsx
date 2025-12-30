"use client"

import { useState } from "react"
import Link from "next/link"
import { FilterIcon, GridIcon, ListIcon, ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const products = [
 {
    id: 1,
    name: "Riplus WiFi Robot Camera",
    price: "2,499",
    category: "cameras",
    image: "/riplus-rubout-camera.webp",
    badge: "Trending",
    inStock: true,
  },
  {
    id: 2,
    name: "Riplus SMPS 1004 Power Supply",
    price: "749",
    category: "power",
    image: "/riplus-smps-104.webp",
    badge: "Essential",
    inStock: true,
  },
  {
    id: 3,
    name: "Riplus IP 5MP Bullet Camera",
    price: "3,999",
    category: "cameras",
    image: "/riplus-5megapixel-bullet-camera.webp",
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 4,
    name: "Riplus IP 4MP Bullet Camera",
    price: "3,299",
    category: "cameras",
    image: "/riplus-4mp-bullet-camera.webp",
    badge: "Popular",
    inStock: true,
  },
  {
    id: 5,
    name: "Riplus CAT6 Network Cable",
    price: "2,199",
    category: "networking",
    image: "/riplus-cat-wire.webp",
    badge: "High Demand",
    inStock: true,
  },
  {
    id: 6,
    name: "Riplus WiFi Bullet Camera",
    price: "2,999",
    category: "cameras",
    image: "/riplus-bullet-camera.webp",
    badge: "New",
    inStock: true,
  },
  {
    id: 7,
    name: "Riplus AHD 2.4MP CCTV Camera",
    price: "1,399",
    category: "cameras",
    image: "/riplus-ahd2.4-camera.webp",
    badge: "Value Pick",
    inStock: true,
  },
  {
    id: 8,
    name: "Riplus 8 Channel PoE Switch (Giga Uplink)",
    price: "4,999",
    category: "networking",
    image: "/riplus-switch-poe-gigalink.webp",
    badge: "Professional",
    inStock: true,
  },
  {
    id: 9,
    name: "Riplus 4 Channel PoE Switch",
    price: "2,999",
    category: "networking",
    image: "/riplus-4channel-poe.webp",
    badge: "Compact",
    inStock: true,
  },
  {
    id: 10,
    name: "Riplus 3MP AHD Bullet Camera",
    price: "1,799",
    category: "cameras",
    image: "/3mp-ahd-bullet-camera.webp",
    badge: "Reliable",
    inStock: true,
  },
  {
    id: 11,
    name: "3+1 CCTV Power Cable",
    price: "1,299",
    category: "accessories",
    image: "/3+1-Cat-wire.webp",
    badge: "Installer Choice",
    inStock: true,
  },
]

const categories = [
  { value: "all", label: "All Products" },
  { value: "cameras", label: "CCTV Cameras" },
  { value: "computers", label: "Computers" },
  { value: "laptops", label: "Laptops" },
  { value: "accessories", label: "Accessories" },
  { value: "networking", label: "Networking" },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("featured")

  const filteredProducts = products.filter(
    (product) => selectedCategory === "all" || product.category === selectedCategory,
  )

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-secondary/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-balance">Security Products</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Browse our complete range of CCTV and security equipment
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 lg:flex-row">
              {/* Desktop Filters */}
              <aside className="hidden lg:block w-64 shrink-0">
                <Card className="sticky top-24">
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h3 className="font-semibold mb-4">Categories</h3>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <button
                            key={category.value}
                            onClick={() => setSelectedCategory(category.value)}
                            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                              selectedCategory === category.value
                                ? "bg-accent text-accent-foreground font-medium"
                                : "hover:bg-secondary"
                            }`}
                          >
                            {category.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="border-t pt-6">
                      <h3 className="font-semibold mb-4">Price Range</h3>
                      <div className="space-y-2">
                        <button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-secondary transition-colors">
                          Under ₹10,000
                        </button>
                        <button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-secondary transition-colors">
                          ₹10,000 - ₹30,000
                        </button>
                        <button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-secondary transition-colors">
                          ₹30,000 - ₹50,000
                        </button>
                        <button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-secondary transition-colors">
                          Over ₹50,000
                        </button>
                      </div>
                    </div>
                    <div className="border-t pt-6">
                      <h3 className="font-semibold mb-4">Availability</h3>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">In Stock Only</span>
                      </label>
                    </div>
                  </CardContent>
                </Card>
              </aside>

              {/* Products Grid */}
              <div className="flex-1">
                {/* Toolbar */}
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-sm text-muted-foreground">Showing {filteredProducts.length} products</p>
                  <div className="flex items-center gap-2">
                    {/* Mobile Filter */}
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" size="sm" className="lg:hidden bg-transparent">
                          <FilterIcon className="mr-2 size-4" />
                          Filters
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="left" className="w-full max-w-sm">
                        <SheetHeader>
                          <SheetTitle>Filters</SheetTitle>
                        </SheetHeader>
                        <div className="mt-6 space-y-6">
                          <div>
                            <h3 className="font-semibold mb-4">Categories</h3>
                            <div className="space-y-2">
                              {categories.map((category) => (
                                <button
                                  key={category.value}
                                  onClick={() => setSelectedCategory(category.value)}
                                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                                    selectedCategory === category.value
                                      ? "bg-accent text-accent-foreground font-medium"
                                      : "hover:bg-secondary"
                                  }`}
                                >
                                  {category.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </SheetContent>
                    </Sheet>

                    {/* Sort Dropdown */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          Sort by
                          <ChevronDownIcon className="ml-2 size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setSortBy("featured")}>Featured</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setSortBy("price-low")}>Price: Low to High</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setSortBy("price-high")}>Price: High to Low</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setSortBy("newest")}>Newest</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    {/* View Toggle */}
                    <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as "grid" | "list")}>
                      <TabsList>
                        <TabsTrigger value="grid">
                          <GridIcon className="size-4" />
                        </TabsTrigger>
                        <TabsTrigger value="list">
                          <ListIcon className="size-4" />
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </div>

                {/* Products */}
                <div className={viewMode === "grid" ? "grid gap-6 sm:grid-cols-2 xl:grid-cols-3" : "space-y-4"}>
                  {filteredProducts.map((product) => (
                    <Link key={product.id} href={`/products/${product.id}`}>
                      <Card
                        className={`group overflow-hidden border shadow-md hover:shadow-xl transition-all ${
                          viewMode === "list" ? "flex flex-row" : ""
                        }`}
                      >
                        <div
                          className={`relative overflow-hidden bg-secondary ${
                            viewMode === "list" ? "w-48 shrink-0" : "aspect-square"
                          }`}
                        >
                          {product.badge && (
                            <Badge className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground">
                              {product.badge}
                            </Badge>
                          )}
                          {!product.inStock && (
                            <Badge className="absolute top-3 right-3 z-10" variant="secondary">
                              Out of Stock
                            </Badge>
                          )}
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="size-full object-cover transition-transform group-hover:scale-110"
                          />
                        </div>
                        <CardContent className={`p-4 space-y-3 ${viewMode === "list" ? "flex-1" : ""}`}>
                          <CardTitle className="text-base">{product.name}</CardTitle>
                          <div className="flex flex-col gap-3">
                            <div>
                              <span className="text-2xl font-bold text-accent">₹{product.price}</span>
                              <p className="text-[10px] text-muted-foreground uppercase">* Fitting charges extra</p>
                            </div>
                            <Button
                              size="sm"
                              disabled={!product.inStock}
                              className="bg-primary hover:bg-primary/90 w-full"
                              asChild
                            >
                              {product.inStock ? <span>View Product</span> : <span>Out of Stock</span>}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
