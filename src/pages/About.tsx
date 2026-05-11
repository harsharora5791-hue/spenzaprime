import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Globe2, History, CheckCircle2, TrendingUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import SEO from '../components/SEO';

const About = () => {
  const stats = [
    { label: 'Designs Perfection', value: '1000+', icon: <Award className="h-6 w-6" /> },
    { label: 'Happy Customers', value: '50k+', icon: <Users className="h-6 w-6" /> },
    { label: 'Across Country', value: 'PAN India', icon: <Globe2 className="h-6 w-6" /> },
    { label: 'Years of Trust', value: 'Limitless', icon: <History className="h-6 w-6" /> },
  ];

  const values = [
    {
      title: 'Sophisticated Designs',
      description: 'Our products lead the market because of their sophisticated designs and competitive edge.',
      icon: <TrendingUp className="h-8 w-8 text-secondary" />
    },
    {
      title: 'Durable & Easy Clean',
      description: 'Ceramic items that are not only decorative but also durable and extremely easy to maintain.',
      icon: <CheckCircle2 className="h-8 w-8 text-secondary" />
    },
    {
      title: 'Positive Vibes',
      description: 'Spenza tiles promise you the right look that generates positive vibes and a happy feeling 24x7.',
      icon: <Users className="h-8 w-8 text-secondary" />
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <SEO 
        title="About Us" 
        description="Learn about SpenzaPrime's journey, our commitment to quality ceramic products, and our mission to provide awe-inspiring designs for your home." 
      />
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden bg-primary pt-24">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=2070" 
              alt="Luxurious Ceramics" 
              className="h-full w-full object-cover opacity-40 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary"></div>
          </div>
          
          <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-secondary">
                A Collection of Your Dreams
              </span>
              <h1 className="mb-6 font-heading text-5xl font-bold text-white md:text-7xl lg:text-8xl tracking-tightest">
                Small things, <br /><span className="text-secondary">Big Happiness.</span>
              </h1>
              <p className="text-xl text-slate-300 md:text-2xl leading-relaxed opacity-90">
                A small tile is capable of transporting you to your Wonderland. Tiles are not just little pieces; they play a huge role in conjuring your place of dream in reality.
              </p>
            </motion.div>
          </div>
        </section>

        {/* At A Glance Section */}
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="container mx-auto max-w-container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-secondary">
                  Who We Are
                </span>
                <h2 className="mb-8 font-heading text-4xl font-bold text-primary md:text-5xl leading-tight">
                  About SpenzaPrime
                </h2>
                <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
                  <p>
                    Ceramic products are gaining popularity because of their worldwide usage not only as an item of requirement but also as a matter of decorative furnish. The eye-catching ability of ceramic items adds to the beauty of home, office or any other place.
                  </p>
                  <p>
                    We, SpenzaPrime have a luxurious product range which includes Ceramic & Vitrified Floor Tiles, DIGITAL Wall Tiles, Designer Wall Tiles & Sanitary Wares. Our products lead the market because of their sophisticated designs, competitive edge, long-lasting life, and extensive range.
                  </p>
                </div>
              </motion.div>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-surface p-8 rounded-sm border border-outline-variant hover:border-secondary transition-all group"
                  >
                    <div className="mb-4 text-secondary group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-on-surface-variant font-medium uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Essence Section */}
        <section className="py-24 px-6 md:px-12 bg-surface">
          <div className="container mx-auto max-w-container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-primary p-12 rounded-sm text-white shadow-2xl overflow-hidden relative group"
              >
                <Target className="absolute -right-8 -top-8 h-32 w-32 opacity-10 group-hover:rotate-12 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="mb-6 inline-block p-4 bg-secondary rounded-sm">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 font-heading uppercase tracking-wider">The Essence</h3>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    The essence of SpenzaPrime is its awe-inspiring designs, vibrant colours and a limitless range. Each product has been designed to perfection, to give you that ultimate satisfaction.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white p-12 rounded-sm border border-outline-variant shadow-xl overflow-hidden relative group"
              >
                <Eye className="absolute -right-8 -top-8 h-32 w-32 opacity-5 group-hover:rotate-12 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="mb-6 inline-block p-4 bg-primary rounded-sm">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 font-heading text-primary uppercase tracking-wider">Our Success</h3>
                  <p className="text-xl text-on-surface-variant leading-relaxed">
                    In a short span of time SpenzaPrime have achieved milestone of success primarily due to the strong customer base across the country and our commitment to excellence.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="container mx-auto max-w-container-max">
            <div className="text-center mb-16">
               <h2 className="font-heading text-4xl font-bold text-primary md:text-5xl tracking-tight">
                Designed to <span className="text-secondary">Perfection</span>
              </h2>
              <p className="mt-4 text-on-surface-variant max-w-2xl mx-auto">
                Spend a moment with us and journey to an amazing world of colours and designs from out of this world.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-surface p-10 rounded-sm shadow-lg border-b-4 border-secondary hover:-translate-y-2 transition-all"
                >
                  <div className="mb-6">{value.icon}</div>
                  <h4 className="text-xl font-bold text-primary mb-4 uppercase tracking-wide">{value.title}</h4>
                  <p className="text-on-surface-variant leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-6 md:px-12 bg-primary text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <Globe2 className="absolute -right-20 -bottom-20 h-[600px] w-[600px] text-white" />
          </div>
          
          <div className="container mx-auto max-w-container-max relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-heading text-4xl font-bold mb-8 md:text-5xl lg:text-6xl leading-tight">
                More Than Just <span className="text-secondary">Superficial</span>
              </h2>
              <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                Spenza tiles promise you the right look that generate positive vibes and a happy felling 24x7. Here is your chance to pick a look of your choice.
              </p>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="bg-secondary text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-secondary-container transition-all"
              >
                Contact Us Today
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
