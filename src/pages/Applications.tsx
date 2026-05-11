import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home as HomeIcon, Building2, Factory, Beaker, ChevronLeft, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import { cn } from '../lib/utils'

interface ApplicationData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  heroImage: string;
  keyFeatures: string[];
}

const applicationData: ApplicationData[] = [
  {
    id: 'residential',
    title: 'Residential Solutions',
    subtitle: 'Modern living, built to last.',
    description: 'High-performance sealants and protective coatings designed for modern residential architecture, ensuring longevity and aesthetic preservation.',
    icon: <HomeIcon className="h-5 w-5" />,
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070',
    keyFeatures: ['Superior Waterproofing', 'Crack-resistant Coatings', 'Aesthetic Finishes', 'Eco-friendly Formulations'],
  },
  {
    id: 'commercial',
    title: 'Commercial Projects',
    subtitle: 'Structural excellence for business.',
    description: 'Structural adhesives and fire-retardant treatments engineered for high-traffic commercial complexes and retail environments.',
    icon: <Building2 className="h-5 w-5" />,
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070',
    keyFeatures: ['Heavy-duty Floorings', 'Structural Adhesives', 'Fire Protection', 'Rapid Curing Solutions'],
  },
  {
    id: 'industrial',
    title: 'Industrial Infrastructure',
    subtitle: 'Tough solutions for tough environments.',
    description: 'Heavy-duty concrete admixtures and corrosion-resistant coatings built for extreme industrial infrastructure and chemical plants.',
    icon: <Factory className="h-5 w-5" />,
    heroImage: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=2070',
    keyFeatures: ['Corrosion Protection', 'High Chemical Resistance', 'Concrete Modifiers', 'Extreme Durability'],
  }
]

const Applications = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('residential')

  const activeContent = useMemo(() => {
    return applicationData.find(app => app.id === activeTab) || applicationData[0]
  }, [activeTab])

  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <SEO 
        title="Applications" 
        description="Explore how SpenzaPrime products are used in residential, commercial, and industrial projects." 
      />
      <Header />
      
      <div className="relative flex flex-1 flex-col md:flex-row pt-16">
        {/* Sidebar Toggle Button - Floating */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={cn(
            "fixed bottom-24 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-outline-variant bg-white shadow-xl transition-all md:bottom-auto md:top-24 md:right-auto",
            isSidebarOpen ? "md:left-[264px]" : "md:left-4"
          )}
        >
          {isSidebarOpen ? <ChevronLeft className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
        </button>

        {/* Sidebar */}
        <motion.aside 
          initial={false}
          animate={{ width: isSidebarOpen ? 288 : 0, opacity: isSidebarOpen ? 1 : 0 }}
          className="sticky top-16 hidden h-[calc(100vh-64px)] flex-col border-r border-outline-variant bg-white md:flex overflow-hidden z-40"
        >
          <div className="w-72">
            <div className="p-8 border-b border-outline-variant">
              <h2 className="font-heading text-xl font-bold text-primary">Applications</h2>
              <p className="text-xs text-on-surface-variant mt-1">Select an industry to explore solutions</p>
            </div>
            <nav className="flex-1 py-4">
              {applicationData.map((app) => (
                <button
                  key={app.id}
                  onClick={() => setActiveTab(app.id)}
                  className={cn(
                    "w-full flex items-center gap-4 px-8 py-5 text-sm font-bold transition-all duration-300 relative group",
                    activeTab === app.id 
                      ? "text-primary bg-surface" 
                      : "text-on-surface-variant hover:bg-surface/50"
                  )}
                >
                  <div className={cn(
                    "transition-colors",
                    activeTab === app.id ? "text-secondary" : "group-hover:text-primary"
                  )}>
                    {app.icon}
                  </div>
                  {app.title}
                  {activeTab === app.id && (
                    <motion.div 
                      layoutId="sidebar-indicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-secondary"
                    />
                  )}
                </button>
              ))}
            </nav>
          </div>
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Hero Section */}
              <section className="relative flex h-[500px] items-center bg-primary px-6 md:px-12">
                <div className="absolute inset-0 z-0">
                  <img 
                    src={activeContent.heroImage} 
                    className="h-full w-full object-cover opacity-30 mix-blend-overlay"
                    alt={activeContent.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent"></div>
                </div>
                <div className="container relative z-10 mx-auto">
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block px-3 py-1 bg-secondary/20 border border-secondary/30 text-secondary text-[10px] font-bold uppercase tracking-widest mb-4 rounded-sm"
                  >
                    Expert Solutions
                  </motion.span>
                  <h1 className="mb-4 font-heading text-5xl font-bold text-white md:text-7xl max-w-2xl leading-tight">
                    {activeContent.title}
                  </h1>
                  <p className="max-w-xl text-lg text-slate-300 mb-8">
                    {activeContent.subtitle} {activeContent.description}
                  </p>
                  <button 
                    onClick={() => window.location.href = '/contact'}
                    className="bg-secondary text-white px-8 py-4 font-bold rounded-sm hover:bg-secondary-container transition-all flex items-center gap-2"
                  >
                    Request Consultation <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </section>

              {/* Key Features */}
              <section className="py-20 px-6 md:px-12 bg-white">
                <div className="container mx-auto max-w-container-max">
                  <div className="mb-12">
                    <h2 className="font-heading text-3xl font-bold text-primary mb-4">Solution Capabilities</h2>
                    <div className="h-1 w-20 bg-secondary" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {activeContent.keyFeatures.map((feature, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        key={feature} 
                        className="p-8 border border-outline-variant rounded-sm hover:border-primary transition-colors flex flex-col items-center text-center group"
                      >
                        <div className="h-12 w-12 bg-surface flex items-center justify-center rounded-full text-secondary mb-4 group-hover:scale-110 transition-transform">
                          <CheckCircle2 className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-primary">{feature}</h3>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* The SpenzaPrime Edge */}
              <section className="py-24 px-6 md:px-12 bg-surface">
                <div className="container mx-auto max-w-container-max">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                      <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">Our Commitment</span>
                      <h2 className="font-heading text-4xl font-bold text-primary mb-8 leading-tight">The SpenzaPrime Edge</h2>
                      <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                        Being a foremost company in the national market, we are engaged in providing a qualitative range of products that we provide in diverse specifications in order to attain the complete satisfaction of the clients within given time frame.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        {[
                          'Competent team of professionals',
                          'Stringent quality standards',
                          'Client-oriented approach',
                          'Customization facility',
                          'Realistic price structure',
                          'Prompt delivery',
                          'Strong logistic support'
                        ].map((item) => (
                          <div key={item} className="flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-secondary" />
                            <span className="text-sm font-bold text-primary">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative">
                      <div className="aspect-video rounded-sm overflow-hidden border border-outline-variant shadow-2xl">
                        <img 
                          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2070" 
                          alt="Industrial Excellence"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-6 -right-6 bg-primary p-8 text-white hidden md:block">
                        <p className="text-3xl font-bold mb-1">Success</p>
                        <p className="text-xs uppercase tracking-widest opacity-70">Through Quality</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Featured Metric */}
              <section className="bg-primary py-24 px-6 md:px-12 text-white relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
                  <Beaker className="w-full h-full" />
                </div>
                <div className="container mx-auto max-w-container-max relative z-10 text-center">
                  <h2 className="font-heading text-4xl font-bold mb-16">The SpenzaPrime Standard</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center">
                      <div className="text-6xl font-bold text-secondary mb-4">40%</div>
                      <p className="text-sm font-bold uppercase tracking-widest text-slate-300">Faster Curing Time</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-6xl font-bold text-secondary mb-4">150yr</div>
                      <p className="text-sm font-bold uppercase tracking-widest text-slate-300">Lifespan Rating</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-6xl font-bold text-secondary mb-4">0.0%</div>
                      <p className="text-sm font-bold uppercase tracking-widest text-slate-300">Water Permeability</p>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default Applications
