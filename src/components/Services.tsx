// Template-enhanced component (UNIQUE VERSION)
// Generated: 2025-08-20T17:05:03.225Z
// Section: services
// Category: services
// Template ID: services-c001
// Page: Products
// Component: Services

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Code2,
  Smartphone,
  Cloud,
  Palette,
  BarChart3,
  Shield,
  Rocket,
  Globe,
  ArrowRight
} from "lucide-react"

export default function ServicesCardGrid() {
  const services = [
    {
      id: "banking-solutions",
      title: "Banking Solutions",
      description: "Comprehensive banking services tailored for small and medium-sized businesses.",
      icon: Code2,
      badge: "Popular",
      features: ["Business Checking", "Online Banking", "Merchant Services"],
      link: "/services/banking"
    },
    {
      id: "accounting-tools",
      title: "Accounting Tools",
      description: "Streamline your financial management with our powerful accounting software.",
      icon: BarChart3,
      features: ["Invoicing", "Expense Tracking", "Financial Reporting"],
      link: "/services/accounting"
    },
    {
      id: "payroll-management",
      title: "Payroll Management",
      description: "Effortlessly manage your employee payroll and tax compliance.",
      icon: Rocket,
      badge: "New",
      features: ["Automated Payroll", "Tax Filing", "Employee Self-Service"],
      link: "/services/payroll"
    },
    {
      id: "business-loans",
      title: "Business Loans",
      description: "Access the capital you need to grow your business with our flexible loan options.",
      icon: Smartphone,
      features: ["Term Loans", "Lines of Credit", "SBA Loans"],
      link: "/services/loans"
    },
    {
      id: "wealth-management",
      title: "Wealth Management",
      description: "Achieve your financial goals with personalized investment and wealth planning services.",
      icon: Globe,
      features: ["Investment Portfolios", "Retirement Planning", "Tax Optimization"],
      link: "/services/wealth"
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      description: "Protect your business from digital threats with our comprehensive security solutions.",
      icon: Shield,
      features: ["Threat Monitoring", "Incident Response", "Compliance Assistance"],
      link: "/services/security"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Financial
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Solutions for Your Business
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover how FinanceSmart's suite of services can streamline your financial operations, 
            improve efficiency, and drive growth for your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            
            return (
              <Card 
                key={service.id}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    {service.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="size-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Learn More Link */}
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn justify-between hover:bg-primary/10"
                    asChild
                  >
                    <a href={service.link}>
                      <span>Learn More</span>
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Can't find the service you need?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline">
              View All Services
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}