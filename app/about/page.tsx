import { CheckCircle2Icon, TrophyIcon, UsersIcon, HeartIcon, MapPinIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center animate-in fade-in duration-700">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">About Icon Computers</h1>
            <p className="mt-4 text-lg text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Premium CCTV and Security Solutions in Kinwat, Maharashtra.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Our Operations</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Icon Computers has been at the forefront of the security revolution in Kinwat. We specialize in
                bringing international standard surveillance technology to local homes and businesses.
              </p>
              <div className="mt-8 p-6 bg-secondary/50 rounded-xl border flex gap-4">
                <MapPinIcon className="size-6 text-accent shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Our Main Office</h3>
                  <p>Tipu sultan chokh, Kinwat Rd, Gokunda,</p>
                  <p>kinwat, Maharashtra, india -431804</p>
                  <p className="mt-2 font-medium text-primary">Call: +91 7066647773</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 sm:py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Our Values</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="mx-auto size-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle2Icon className="size-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">Quality First</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We only stock products from reputable manufacturers with proven track records
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="mx-auto size-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <UsersIcon className="size-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">Customer Focus</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Your security needs are our priority, with personalized solutions and support
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="mx-auto size-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <TrophyIcon className="size-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">Expertise</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our team brings decades of combined experience in security technology
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="mx-auto size-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <HeartIcon className="size-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">Integrity</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Honest advice, transparent pricing, and reliable service every time
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
              <div className="space-y-2">
                <p className="text-5xl font-bold text-accent">15+</p>
                <p className="text-muted-foreground">Years in Business</p>
              </div>
              <div className="space-y-2">
                <p className="text-5xl font-bold text-accent">10,000+</p>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>
              <div className="space-y-2">
                <p className="text-5xl font-bold text-accent">500+</p>
                <p className="text-muted-foreground">Products Available</p>
              </div>
              <div className="space-y-2">
                <p className="text-5xl font-bold text-accent">24/7</p>
                <p className="text-muted-foreground">Technical Support</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
