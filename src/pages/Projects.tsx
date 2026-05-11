import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Clock, Beaker, ArrowRight, Users, Search, X, MapPin, Calendar, Building } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, useMemo } from 'react'
import { cn } from '../lib/utils'

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  stat: string;
  icon: JSX.Element;
  location: string;
  date: string;
  client: string;
  fullDescription: string;
  outcomes: string[];
}

const Projects = () => {
  const [filter, setFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      title: 'Skyline Commercial Hub',
      category: 'Commercial',
      description: 'Advanced structural sealants applied to exterior facade panels, ensuring long-term weather resistance.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070',
      stat: 'Durability: 100+ years',
      icon: <Shield className="h-5 w-5 text-secondary" />,
      location: 'Dubai, UAE',
      date: 'Dec 2024',
      client: 'Skyline Developers',
      fullDescription: 'The Skyline Commercial Hub required a specialized sealing solution for its high-performance glass facade. We deployed our PrimeFix and WallShield series to ensure maximum thermal insulation and water tightness under extreme temperature fluctuations.',
      outcomes: ['Zero leakage reported after 12 months', 'Energy efficiency increased by 15%', 'Weather resistance certified for ISO standards']
    },
    {
      title: 'Oceanic Bridge Reinforcement',
      category: 'Infrastructure',
      description: 'Deployment of rapid-curing marine-grade epoxy for underwater pillar stabilization.',
      image: 'https://images.unsplash.com/photo-1449156733864-dd5471bb7427?auto=format&fit=crop&q=80&w=2070',
      stat: 'Curing Time: -30%',
      icon: <Clock className="h-5 w-5 text-secondary" />,
      location: 'Singapore',
      date: 'Oct 2024',
      client: 'National Transport Authority',
      fullDescription: 'A critical bridge pillar showed signs of early-stage corrosion. Our marine-grade epoxy injection system was used to stabilize the structure without halting maritime traffic. The rapid-curing formula allowed for efficient underwater application.',
      outcomes: ['Structural integrity restored', '30% faster curing compared to conventional methods', 'Minimal disruption to transport lines']
    },
    {
      title: 'Apex Manufacturing Plant',
      category: 'Industrial',
      description: 'Installation of ultra-durable, chemical-resistant floor coatings for a high-traffic facility.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070',
      stat: 'Chemical Resistance: Class A',
      icon: <Beaker className="h-5 w-5 text-secondary" />,
      location: 'Ahmedabad, India',
      date: 'Jan 2025',
      client: 'Apex Industrial Corp',
      fullDescription: 'Heavy-duty manufacturing environments require floors that can withstand chemical spills and high mechanical loads. We applied a three-part epoxy grout and coating system that provides Class A chemical resistance and extreme impact durability.',
      outcomes: ['Zero stain retention', 'Enhanced floor safety with non-slip texture', 'Project completed during facility downtime']
    },
    {
      title: 'Metro Tunneling Phase IV',
      category: 'Infrastructure',
      description: 'Comprehensive waterproofing and concrete admixtures for a 15km underground metro expansion.',
      image: 'https://images.unsplash.com/photo-1545147986-a9d6f210df77?auto=format&fit=crop&q=80&w=2070',
      stat: 'Lifespan: 150 Years',
      icon: <Shield className="h-5 w-5 text-secondary" />,
      location: 'Mumbai, India',
      date: 'Feb 2025',
      client: 'Mumbai Metro Rail Corp',
      fullDescription: 'Underwater tunneling presents significant challenges for concrete durability. Our FlowMax superplasticizers and SealGuard membranes were used to create a monolithic water-tight structure.',
      outcomes: ['Successfully prevented water ingress in saline ground conditions', 'High-strength concrete achieved with 20% water reduction', 'Certified for 150-year service life']
    },
  ]

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesFilter = filter === 'All' || project.category === filter
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           project.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesFilter && matchesSearch
    })
  }, [filter, searchQuery])

  const stats = [
    { label: 'PROJECTS COMPLETED', value: '500+' },
    { label: 'SQ FT COVERED', value: '10M+' },
    { label: 'COUNTRIES', value: '24' },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-primary px-6 py-24 md:px-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          <div className="container mx-auto max-w-container-max relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Our Portfolio</span>
              <h1 className="mb-6 font-heading text-5xl font-bold tracking-tight md:text-7xl">
                Engineering <span className="text-secondary">Landmarks</span>
              </h1>
              <p className="text-lg leading-relaxed text-slate-300 md:text-xl">
                Discover how our high-performance chemical solutions provide the foundation for global impact and uncompromising durability in the world's most demanding structures.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter & Search Section */}
        <section className="border-b border-outline-variant bg-white/80 backdrop-blur-md px-6 py-8 md:px-12 sticky top-16 z-40">
          <div className="container mx-auto max-w-container-max flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar w-full lg:w-auto">
              {['All', 'Infrastructure', 'Industrial', 'Commercial'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "whitespace-nowrap px-8 py-3 text-sm font-bold transition-all rounded-sm",
                    filter === f 
                      ? "bg-primary text-white shadow-lg shadow-primary/20" 
                      : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-outline" />
              <input 
                type="text" 
                placeholder="Search projects..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-outline-variant rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-surface/50"
              />
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="py-24 px-6 md:px-12">
          <div className="container mx-auto max-w-container-max">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project, index) => (
                    <motion.article
                      layout
                      key={project.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: index * 0.05 }}
                      className="group flex flex-col border border-outline-variant bg-white transition-all hover:shadow-2xl cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="relative h-80 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <span className="absolute top-6 right-6 bg-primary/90 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">
                          {project.category}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-10">
                        <h2 className="mb-4 font-heading text-2xl font-bold text-primary group-hover:text-secondary transition-colors">{project.title}</h2>
                        <p className="mb-8 flex-1 text-sm leading-relaxed text-on-surface-variant line-clamp-3">
                          {project.description}
                        </p>
                        <div className="mb-8 flex items-center gap-4 rounded-sm border border-outline-variant bg-surface p-5">
                          {project.icon}
                          <span className="text-sm font-bold text-primary">{project.stat}</span>
                        </div>
                        <button className="flex items-center justify-center gap-3 border border-primary py-4 text-sm font-bold text-primary transition-all group-hover:bg-primary group-hover:text-white">
                          View Case Study <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="py-32 text-center">
                <div className="mb-6 flex justify-center">
                  <Search className="h-16 w-16 text-outline opacity-20" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">No projects match your search</h3>
                <p className="text-on-surface-variant">Try adjusting your filters or search terms.</p>
                <button onClick={() => {setFilter('All'); setSearchQuery('')}} className="mt-8 text-secondary font-bold hover:underline">Clear all filters</button>
              </div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-primary py-32 px-6 text-white md:px-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="container mx-auto max-w-container-max relative z-10">
            <div className="grid grid-cols-1 gap-20 md:grid-cols-3">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-4 font-heading text-6xl font-bold text-secondary md:text-8xl">{stat.value}</div>
                  <div className="text-xs font-bold tracking-[0.3em] text-primary-fixed-dim opacity-70 uppercase">{stat.label}</div>
                  <div className="mx-auto mt-10 h-px w-20 bg-secondary/30"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 text-center md:px-12 bg-white">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 font-heading text-4xl md:text-5xl font-bold text-primary tracking-tight">Partner with SpenzaPrime for your next landmark</h2>
            <p className="mb-12 text-lg text-on-surface-variant leading-relaxed">
              Ensure the structural integrity of your investments with our industry-leading chemical formulations. Our technical team is ready to consult on your specific requirements.
            </p>
            <button className="inline-flex items-center gap-3 bg-secondary px-12 py-5 font-bold text-white shadow-2xl transition-all hover:bg-secondary-container hover:scale-105 active:scale-95 rounded-sm">
              Contact Engineering Team <Users className="h-5 w-5" />
            </button>
          </div>
        </section>
      </main>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-primary/90 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-6xl bg-white rounded-sm shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-3 bg-white/80 hover:bg-white rounded-full text-primary transition-colors shadow-lg"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="w-full md:w-1/2 h-80 md:h-auto overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-grow p-10 md:p-16 overflow-y-auto">
                <div className="mb-10">
                  <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-2 block">{selectedProject.category}</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-primary font-heading tracking-tight">{selectedProject.title}</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 py-8 border-y border-outline-variant">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <div>
                      <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Location</div>
                      <div className="text-sm font-bold text-primary">{selectedProject.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-secondary" />
                    <div>
                      <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Completion</div>
                      <div className="text-sm font-bold text-primary">{selectedProject.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building className="h-5 w-5 text-secondary" />
                    <div>
                      <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Client</div>
                      <div className="text-sm font-bold text-primary">{selectedProject.client}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-12">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-6 border-b border-outline-variant pb-2">Case Study Overview</h4>
                    <p className="text-on-surface-variant text-lg leading-relaxed">{selectedProject.fullDescription}</p>
                  </div>

                  <div className="bg-surface p-10 border border-outline-variant rounded-sm">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-8">Key Outcomes</h4>
                    <ul className="space-y-6">
                      {selectedProject.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white shrink-0 mt-0.5">
                            <Shield className="h-3 w-3" />
                          </div>
                          <span className="text-on-surface-variant font-medium">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-16 flex flex-col sm:flex-row gap-4">
                  <button className="flex-grow bg-primary text-white py-5 font-bold rounded-sm hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
                    Download Technical Report
                  </button>
                  <button className="flex-grow border border-primary text-primary py-5 font-bold rounded-sm hover:bg-surface transition-all">
                    Inquire for Similar Solutions
                  </button>
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

export default Projects

