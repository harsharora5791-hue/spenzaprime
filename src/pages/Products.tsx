import { useState, useMemo } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowRight, X, CheckCircle2, Shield, Beaker, FileText } from 'lucide-react'
import SEO from '../components/SEO'
import vitroHold from '../assets/products/vitro_hold.png'
import vitroHoldProGrey from '../assets/products/vitro_hold_pro_grey.png'
import vitroHoldProWhite from '../assets/products/vitro_hold_pro_white.png'
import absoluteFlexGrey from '../assets/products/absolute_flex_grey.png'
import absoluteFlexWhite from '../assets/products/absolute_flex_white.png'
import ceraFixPlusGrey from '../assets/products/cera_fix_plus_grey.png'
import ceraFixPlusWhite from '../assets/products/cera_fix_plus_white.png'
import ceraFix from '../assets/products/cera_fix.png'
import extroFlexGrey from '../assets/products/extro_flex_grey.png'
import extroFlexWhite from '../assets/products/extro_flex_white.png'
import extroHold from '../assets/products/extro_hold.png'

interface Product {
  name: string;
  category: string;
  description: string;
  specs: string[];
  features: string[];
  image: string;
}

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const products: Product[] = [
    { 
      name: 'Vitro Hold', 
      category: 'Tile Adhesive', 
      description: 'Advanced C2T Type II cementitious adhesive specifically engineered for interior floor and wall applications including large format tiles.',
      specs: ['Model: SP-2010 | GREY', 'Type: C2T | TYPE II', 'Packaging: 20 KG Bag', 'Applications: Interior Floor & Wall'],
      features: ['Exceeds ANSI A118.4T', 'Meets EN 12004/ISO 13007', 'High bond strength', 'Non-slip vertical performance'],
      image: vitroHold
    },
    { 
      name: 'Vitro Hold Pro Grey', 
      category: 'Tile Adhesive', 
      description: 'Professional grade high-bond adhesive for demanding tile installations on various substrates.',
      specs: ['Color: Grey', 'Grade: Professional', 'Packaging: 20 KG'],
      features: ['Superior slip resistance', 'Extended open time', 'Easy workability'],
      image: vitroHoldProGrey
    },
    { 
      name: 'Vitro Hold Pro White', 
      category: 'Tile Adhesive', 
      description: 'High-performance white cement adhesive optimized for translucent stones and light-colored marble.',
      specs: ['Color: White', 'Grade: Professional', 'Packaging: 20 KG'],
      features: ['Non-staining formula', 'Excellent brightness', 'Strong adhesion'],
      image: vitroHoldProWhite
    },
    { 
      name: 'Absolute Flex Grey', 
      category: 'Tile Adhesive', 
      description: 'Ultra-flexible polymer modified adhesive designed for areas subject to vibration and thermal movement.',
      specs: ['Color: Grey', 'Type: Highly Flexible', 'Packaging: 20 KG'],
      features: ['Deformable S1 Class', 'Excellent for external areas', 'Shock resistant'],
      image: absoluteFlexGrey
    },
    { 
      name: 'Absolute Flex White', 
      category: 'Tile Adhesive', 
      description: 'Premium white flexible adhesive for high-end mosaic and marble installations in high-stress areas.',
      specs: ['Color: White', 'Type: Highly Flexible', 'Packaging: 20 KG'],
      features: ['High flexibility', 'UV resistant', 'Superior bond'],
      image: absoluteFlexWhite
    },
    { 
      name: 'Cera Fix Plus Grey', 
      category: 'Tile Adhesive', 
      description: 'Enhanced cementitious adhesive with extended open time for ceramic and vitrified tiles.',
      specs: ['Color: Grey', 'Variant: Plus', 'Packaging: 20 KG'],
      features: ['Enhanced durability', 'Easy mixing', 'Cost-effective performance'],
      image: ceraFixPlusGrey
    },
    { 
      name: 'Cera Fix Plus White', 
      category: 'Tile Adhesive', 
      description: 'White variant of Cera Fix Plus, ideal for ceramic tiles and small format natural stones.',
      specs: ['Color: White', 'Variant: Plus', 'Packaging: 20 KG'],
      features: ['Smooth finish', 'Consistent quality', 'Strong initial tack'],
      image: ceraFixPlusWhite
    },
    { 
      name: 'Cera Fix', 
      category: 'Tile Adhesive', 
      description: 'Reliable everyday tile adhesive for standard interior ceramic tile installations on floors.',
      specs: ['Standard Grade', 'Packaging: 20 KG', 'Usage: Internal Floors'],
      features: ['Good bond strength', 'Simple application', 'Economical choice'],
      image: ceraFix
    },
    { 
      name: 'Extro Flex Grey', 
      category: 'Tile Adhesive', 
      description: 'High-strength flexible adhesive for exterior tile cladding and large format vitrified tiles.',
      specs: ['Color: Grey', 'Grade: Exterior Flex', 'Packaging: 20 KG'],
      features: ['Weather resistant', 'Excellent grab', 'Vertical slip resistance'],
      image: extroFlexGrey
    },
    { 
      name: 'Extro Flex White', 
      category: 'Tile Adhesive', 
      description: 'White exterior grade flexible adhesive for high-visibility cladding and light stone facades.',
      specs: ['Color: White', 'Grade: Exterior Flex', 'Packaging: 20 KG'],
      features: ['Thermal stability', 'Anti-sagging', 'High aesthetic value'],
      image: extroFlexWhite
    },
    { 
      name: 'Extro Hold', 
      category: 'Tile Adhesive', 
      description: 'Superior grip adhesive optimized for vertical applications and heavy wall tiles.',
      specs: ['High Grip Formula', 'Packaging: 20 KG', 'Applications: Wall & Floor'],
      features: ['Zero vertical slip', 'High initial bond', 'Reliable performance'],
      image: extroHold
    },
  ]

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      return product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
             product.description.toLowerCase().includes(searchQuery.toLowerCase())
    })
  }, [searchQuery])

  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <SEO 
        title="Products" 
        description="Browse our luxurious range of Ceramic & Vitrified Floor Tiles, Digital Wall Tiles, and Designer Sanitary Wares." 
      />
      <Header />
      <main className="flex-grow pt-16">
        <section className="bg-primary py-24 px-6 md:px-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          </div>
          <div className="container mx-auto max-w-container-max relative z-10">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block"
            >
              Industrial Solutions
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl font-bold mb-6"
            >
              Product Catalog
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-300 max-w-2xl text-lg leading-relaxed"
            >
              Browse our complete range of precision-engineered construction chemicals designed for every stage of your project. From foundations to finishes, we ensure structural integrity.
            </motion.p>
          </div>
        </section>

        {/* Search Bar Section */}
        <section className="py-8 px-6 md:px-12 border-b border-outline-variant sticky top-16 bg-white/80 backdrop-blur-md z-40">
          <div className="container mx-auto max-w-container-max flex flex-col md:flex-row gap-6 items-center justify-center">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-outline" />
              <input 
                type="text" 
                placeholder="Search products by name or performance..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-outline-variant rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-surface/50 text-lg shadow-sm"
              />
            </div>
          </div>
        </section>

        <section className="py-20 px-6 md:px-12">
          <div className="container mx-auto max-w-container-max">
            <div className="flex justify-between items-end mb-12 border-b border-outline-variant pb-8">
              <div>
                <h2 className="text-3xl font-bold text-primary font-heading">Our Range</h2>
                <p className="text-on-surface-variant mt-2 font-medium">{filteredProducts.length} high-performance solutions</p>
              </div>
            </div>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode='popLayout'>
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      layout
                      key={product.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white border border-outline-variant rounded-sm overflow-hidden hover:shadow-2xl transition-all group flex flex-col h-full"
                    >
                      <div className="aspect-square relative overflow-hidden bg-surface p-8">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800';
                          }}
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-primary/90 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm backdrop-blur-sm">
                            {product.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-8 flex flex-col flex-grow">
                        <h3 className="font-heading text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-on-surface-variant text-sm mb-8 line-clamp-3 leading-relaxed">
                          {product.description}
                        </p>
                        
                        <div className="mt-auto">
                          <button 
                            onClick={() => setSelectedProduct(product)}
                            className="flex items-center gap-2 font-bold text-primary hover:gap-4 transition-all text-sm group/btn"
                          >
                            View Specifications 
                            <ArrowRight className="h-4 w-4 text-secondary group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center"
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-6 bg-surface-container rounded-full">
                    <Search className="h-12 w-12 text-outline" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">No products found</h3>
                <p className="text-on-surface-variant">Try adjusting your search query.</p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="mt-6 font-bold text-secondary hover:underline"
                >
                  Clear search
                </button>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-sm shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full text-primary transition-colors shadow-sm"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8 md:hidden">
                  <h2 className="text-3xl font-bold text-white font-heading">{selectedProduct.name}</h2>
                </div>
              </div>

              <div className="flex-grow p-8 md:p-12 overflow-y-auto">
                <div className="hidden md:block mb-8">
                  <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-2 block">
                    {selectedProduct.category}
                  </span>
                  <h2 className="text-4xl font-bold text-primary font-heading">{selectedProduct.name}</h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary mb-4">
                      <FileText className="h-4 w-4 text-secondary" /> Description
                    </h4>
                    <p className="text-on-surface-variant leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary mb-4">
                        <Beaker className="h-4 w-4 text-secondary" /> Technical Specs
                      </h4>
                      <ul className="space-y-2">
                        {selectedProduct.specs.map(spec => (
                          <li key={spec} className="text-sm text-on-surface-variant flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary mb-4">
                        <Shield className="h-4 w-4 text-secondary" /> Key Features
                      </h4>
                      <ul className="space-y-2">
                        {selectedProduct.features.map(feature => (
                          <li key={feature} className="text-sm text-on-surface-variant flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-outline-variant">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">Quick Inquiry</h4>
                    <form 
                      onSubmit={(e) => {
                        e.preventDefault();
                        const target = e.target as any;
                        const name = target.userName.value;
                        const email = target.userEmail.value;
                        const message = `Inquiry for Product: ${selectedProduct.name}. Message: ${target.userMessage.value}`;
                        
                        const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyOMKgJfUH9KRh9CJC9UmLULI7017C3gOs-i2Gf6JGK3Jr9fMQFvxfnnSm_Yde9UfVQ/exec';
                        
                        const formDataObj = new FormData();
                        formDataObj.append('name', name);
                        formDataObj.append('email', email);
                        formDataObj.append('company', 'Product Inquiry');
                        formDataObj.append('projectType', selectedProduct.category);
                        formDataObj.append('message', message);

                        // Background save to Sheet
                        fetch(APPS_SCRIPT_URL, { method: 'POST', mode: 'no-cors', body: formDataObj });

                        // Open Gmail
                        const subject = encodeURIComponent('Quote Inquiry - ' + selectedProduct.name)
                        const body = encodeURIComponent(
                          'Dear SpenzaPrime Team,\n\n' +
                          'I would like to request a quote for the following product:\n\n' +
                          'Product Name  : ' + selectedProduct.name + '\n' +
                          'Category      : ' + selectedProduct.category + '\n' +
                          'Inquiry From  : ' + name + ' (' + email + ')\n\n' +
                          'Message:\n' + target.userMessage.value + '\n\n' +
                          'Regards,'
                        )
                        window.open('https://mail.google.com/mail/?view=cm&to=spenzaprime@gmail.com&su=' + subject + '&body=' + body, '_blank');
                        
                        setSelectedProduct(null);
                        alert('Your inquiry has been sent and Gmail has been opened!');
                      }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input name="userName" type="text" placeholder="Your Name" required className="w-full px-4 py-3 border border-outline-variant rounded-sm text-sm focus:border-secondary outline-none" />
                        <input name="userEmail" type="email" placeholder="Your Email" required className="w-full px-4 py-3 border border-outline-variant rounded-sm text-sm focus:border-secondary outline-none" />
                      </div>
                      <textarea name="userMessage" placeholder="Any specific requirements?" className="w-full px-4 py-3 border border-outline-variant rounded-sm text-sm focus:border-secondary outline-none h-24 resize-none"></textarea>
                      <button
                        type="submit"
                        className="w-full bg-primary text-white py-4 font-bold rounded-sm hover:bg-primary/90 transition-all active:scale-[0.98]"
                      >
                        Inquiry for Quote
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default Products

