import { motion } from 'framer-motion'
import { ArrowRight, Layers, Droplets, Beaker, PaintBucket, Shield, Lightbulb, CheckCircle2, Headset } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { cn } from '../lib/utils'
import { useNavigate } from 'react-router-dom'
import SEO from '../components/SEO'

const Home = () => {
  const navigate = useNavigate()

  const categories = [
    {
      title: 'Tile Adhesives',
      description: 'Superior bonding strength for varied substrates. Engineered to prevent slippage and accommodate thermal movement.',
      icon: <Layers className="h-8 w-8" />,
      span: 'md:col-span-2',
      category: 'Tile Adhesive'
    },
    {
      title: 'Waterproofing',
      description: 'Elastomeric membranes providing absolute barrier protection against ingress.',
      icon: <Droplets className="h-8 w-8" />,
      span: 'md:col-span-1',
      category: 'Waterproofing'
    },
    {
      title: 'Admixtures',
      description: 'Concrete modifiers for enhanced workability and strength.',
      icon: <Beaker className="h-8 w-8" />,
      span: 'md:col-span-1',
      category: 'Admixtures'
    },
    {
      title: 'Grouts & Sealants',
      description: 'High-compression epoxy and cementitious formulations for structural gaps, ensuring joint stability.',
      icon: <PaintBucket className="h-8 w-8" />,
      span: 'md:col-span-2',
      category: 'Grouts'
    },
  ]

  const advantages = [
    { title: 'Extreme Durability', description: 'Formulations engineered to withstand severe environmental stress.', icon: <Shield /> },
    { title: 'Continuous Innovation', description: 'R&D driven solutions adapting to modern architectural demands.', icon: <Lightbulb /> },
    { title: 'Uncompromising Quality', description: 'Strict batch-to-batch consistency testing ensuring predictable performance.', icon: <CheckCircle2 /> },
    { title: 'Technical Support', description: 'Direct access to material engineers for project-specific advice.', icon: <Headset /> },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SEO 
        title="Home" 
        description="SpenzaPrime - Leading manufacturer of premium ceramic tiles, vitrified floor tiles, and sanitary wares. Experience sophisticated designs and durability." 
      />
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative flex min-h-[85vh] flex-col overflow-hidden bg-primary px-6 md:px-12 pt-48 pb-20">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2070" 
              alt="Construction Site" 
              className="h-full w-full object-cover opacity-30 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
          </div>
          
          <div className="container relative z-10 mx-auto max-w-container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-8 inline-block rounded-sm border border-secondary/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary"
                >
                  Engineered for Durability
                </motion.span>
                <h1 className="mb-8 font-heading text-6xl font-bold leading-[1.1] text-white md:text-7xl lg:text-8xl tracking-tightest">
                  Building <span className="text-secondary">Stronger</span> <br /> Foundations for Tomorrow
                </h1>
                <p className="mb-12 max-w-2xl text-lg text-slate-300 md:text-2xl leading-relaxed opacity-90">
                  Advanced chemical solutions formulated to reinforce, protect, and extend the lifespan of critical infrastructure. Precision-engineered for uncompromising structural integrity.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <button 
                    onClick={() => navigate('/products')}
                    className="bg-secondary px-10 py-5 font-bold text-white shadow-xl shadow-secondary/20 transition-all hover:bg-secondary-container hover:scale-105 active:scale-95 rounded-sm flex items-center justify-center gap-3"
                  >
                    Explore Products <ArrowRight className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => navigate('/contact')}
                    className="border border-white/30 bg-white/5 backdrop-blur-sm px-10 py-5 font-bold text-white transition-all hover:bg-white/10 hover:border-white rounded-sm"
                  >
                    Contact Us
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative hidden lg:block"
              >
                {/* Product Float Animation */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <img 
                    src="/src/assets/products/VITRO HOLD (1).png" 
                    alt="Vitro Hold" 
                    className="w-full max-w-md mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                </motion.div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-10 bg-black/40 blur-3xl rounded-full"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 blur-3xl rounded-full"></div>
              </motion.div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <div className="w-px h-12 bg-gradient-to-b from-secondary to-transparent" />
          </motion.div>
        </section>

        {/* About Section */}
        <section className="bg-white py-32 px-6 md:px-12">
          <div className="container mx-auto max-w-container-max">
            <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">About SpenzaPrime</span>
                <h2 className="mb-8 font-heading text-4xl md:text-5xl font-bold text-primary leading-tight">Trust Anchored in Technical Excellence</h2>
                <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                  <p>
                    SpenzaPrime represents the intersection of material science and construction reality. We provide high-performance chemical formulations designed to solve complex structural challenges.
                  </p>
                  <p>
                    Our commitment is to absolute reliability. Every compound is rigorously tested to exceed global standards, ensuring your projects stand the test of time, environmental stress, and extreme loads.
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-4xl font-bold text-primary">15+</span>
                    <span className="text-xs font-bold uppercase text-on-surface-variant tracking-wider">Years Exp</span>
                  </div>
                  <div className="w-px h-10 bg-outline-variant" />
                  <div className="flex flex-col">
                    <span className="text-4xl font-bold text-primary">500+</span>
                    <span className="text-xs font-bold uppercase text-on-surface-variant tracking-wider">Projects</span>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-[600px] group"
              >
                <div className="absolute -inset-4 bg-secondary/10 rounded-sm -z-10 group-hover:bg-secondary/20 transition-colors" />
                <div className="h-full w-full overflow-hidden rounded-sm border border-outline-variant bg-white p-3 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070" 
                    alt="Laboratory Precision" 
                    className="h-full w-full object-cover rounded-sm transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Products Bento Grid */}
        <section className="bg-surface py-32 px-6 md:px-12 relative">
          <div className="container mx-auto max-w-container-max">
            <div className="mb-20 text-center md:text-left">
              <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-secondary">Our Solutions</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary tracking-tight">High-Performance Chemical Categories</h2>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {categories.map((cat, index) => (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => navigate(`/products?category=${cat.category}`)}
                  className={cn(
                    "group relative overflow-hidden rounded-sm border border-outline-variant bg-white p-10 transition-all hover:shadow-2xl cursor-pointer hover:-translate-y-1",
                    cat.span
                  )}
                >
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div>
                      <div className="mb-6 text-secondary transition-transform group-hover:scale-110 duration-300">{cat.icon}</div>
                      <h3 className="mb-4 font-heading text-3xl font-bold text-primary group-hover:text-secondary transition-colors">{cat.title}</h3>
                      <p className="max-w-md text-on-surface-variant text-lg leading-relaxed">{cat.description}</p>
                    </div>
                    <button className="mt-10 flex items-center gap-3 font-bold text-primary transition-all group-hover:gap-5">
                      View Specifications <ArrowRight className="h-5 w-5 text-secondary" />
                    </button>
                  </div>
                  <div className="absolute -right-8 -top-8 opacity-5 transition-all group-hover:opacity-10 group-hover:scale-125">
                    {cat.icon}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-32 px-6 md:px-12 bg-white">
          <div className="container mx-auto max-w-container-max">
            <div className="text-center mb-20">
              <h2 className="mb-4 font-heading text-4xl md:text-5xl font-bold text-primary tracking-tight">The SpenzaPrime Advantage</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">Why industry leaders choose SpenzaPrime for their most critical structural requirements.</p>
            </div>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {advantages.map((adv, index) => (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-sm border border-outline-variant bg-surface p-10 transition-all hover:bg-primary hover:text-white group text-center"
                >
                  <div className="mb-6 flex justify-center text-primary group-hover:text-secondary transition-colors">
                    {adv.icon}
                  </div>
                  <h3 className="mb-4 font-heading text-xl font-bold group-hover:text-white">{adv.title}</h3>
                  <p className="text-sm text-on-surface-variant group-hover:text-slate-300 leading-relaxed">{adv.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-32 px-6 md:px-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="container mx-auto max-w-3xl relative z-10">
            <h2 className="mb-6 font-heading text-4xl md:text-6xl font-bold">Ready to reinforce your project?</h2>
            <p className="mb-12 text-xl text-slate-300">Our engineering team is ready to provide technical advice and customized chemical solutions for your specific needs.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-secondary px-12 py-5 font-bold text-white shadow-2xl transition-all hover:bg-secondary-container active:scale-95 rounded-sm"
              >
                Get a Custom Quote
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home

