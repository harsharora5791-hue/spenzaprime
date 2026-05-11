import { motion } from 'framer-motion'
import { Award, ShieldCheck, Microscope, CheckCircle2, FlaskConical, Leaf } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Certifications = () => {
  const isoCerts = [
    {
      id: 'ISO 9001:2015',
      label: 'Quality Management',
      description: 'Ensures our quality management systems consistently provide products and services that meet customer and applicable statutory and regulatory requirements.',
      icon: <Award className="h-10 w-10 text-primary" />,
      color: 'bg-surface-container'
    },
    {
      id: 'ISO 14001:2015',
      label: 'Environmental Mgt',
      description: 'Specifies the requirements for an environmental management system that we use to enhance our environmental performance and sustainability efforts.',
      icon: <Leaf className="h-10 w-10 text-primary" />,
      color: 'bg-surface-container'
    },
    {
      id: 'ISO 45001:2018',
      label: 'Occupational Health',
      description: 'Provides a framework to improve employee safety, reduce workplace risks and create better, safer working conditions globally.',
      icon: <ShieldCheck className="h-10 w-10 text-secondary" />,
      color: 'bg-secondary/5 border-secondary/20 border'
    }
  ]

  const benchmarks = [
    { standard: 'ASTM C920', domain: 'Elastomeric Joint Sealants', status: 'Compliant' },
    { standard: 'EN 15651-1', domain: 'Sealants for Facades', status: 'Compliant' },
    { standard: 'BIS IS 13995', domain: 'Polyurethane Adhesives', status: 'Compliant' },
    { standard: 'ISO 11600', domain: 'Building Construction Sealants', status: 'Compliant' },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary py-24 px-6 md:px-12 text-center text-white lg:py-32">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2070" 
              className="h-full w-full object-cover grayscale"
              alt="Quality Lab"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="container relative z-10 mx-auto max-w-3xl"
          >
            <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight md:text-6xl">
              Certified Quality. <br /> Uncompromising Standards.
            </h1>
            <p className="text-lg text-slate-300 md:text-xl">
              SpenzaPrime is committed to excellence through rigorous testing, continuous R&D, and international accreditation.
            </p>
          </motion.div>
        </section>

        {/* ISO Grid */}
        <section className="py-20 px-6 md:px-12 bg-surface">
          <div className="container mx-auto max-w-container-max">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {isoCerts.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    "group rounded-sm p-10 transition-all hover:shadow-2xl bg-white border border-outline-variant",
                    cert.color.includes('border') ? cert.color : ""
                  )}
                >
                  <div className={cn("mb-8 flex h-20 w-20 items-center justify-center rounded-sm", cert.color.includes('bg-') && !cert.color.includes('border') ? cert.color : "bg-surface-container")}>
                    {cert.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant opacity-60">
                    {cert.label}
                  </span>
                  <h3 className="mt-2 mb-4 font-heading text-2xl font-bold text-primary">{cert.id}</h3>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    {cert.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benchmarks Table */}
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="container mx-auto max-w-container-max">
            <div className="mb-12 flex items-center gap-4">
              <Microscope className="h-8 w-8 text-primary" />
              <h2 className="font-heading text-3xl font-bold text-primary">Industry Benchmarks</h2>
            </div>
            <div className="overflow-hidden rounded-sm border border-outline-variant">
              <table className="w-full text-left">
                <thead className="bg-surface text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">
                  <tr>
                    <th className="px-8 py-5">Standard</th>
                    <th className="px-8 py-5">Domain</th>
                    <th className="px-8 py-5 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {benchmarks.map((item) => (
                    <tr key={item.standard} className="hover:bg-surface/50 transition-colors">
                      <td className="px-8 py-6 font-bold text-primary">{item.standard}</td>
                      <td className="px-8 py-6 text-on-surface-variant">{item.domain}</td>
                      <td className="px-8 py-6 text-center">
                        <div className="flex items-center justify-center gap-2 text-secondary">
                          <CheckCircle2 className="h-5 w-5" />
                          <span className="text-xs font-bold uppercase tracking-wider">{item.status}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Testing Protocols */}
        <section className="relative overflow-hidden bg-surface py-24 px-6 md:px-12">
          <div className="absolute bottom-0 right-0 opacity-5">
            <FlaskConical className="h-[400px] w-[400px]" />
          </div>
          <div className="container relative z-10 mx-auto max-w-container-max">
            <div className="max-w-2xl">
              <span className="mb-4 inline-block text-secondary">
                <FlaskConical className="h-10 w-10" />
              </span>
              <h2 className="mb-6 font-heading text-4xl font-bold text-primary">Rigorous Testing Protocols</h2>
              <p className="mb-10 text-lg leading-relaxed text-on-surface-variant">
                Our commitment to quality extends beyond paperwork. Every batch of SpenzaPrime undergoes rigorous validation through our state-of-the-art in-house R&D facilities and is verified by independent, third-party laboratory testing.
              </p>
              <div className="flex flex-wrap gap-3">
                {['In-house R&D', 'Third-party Validation', 'Batch Testing', 'Site Compliance'].map(tag => (
                  <span key={tag} className="bg-white border border-outline-variant px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ')

export default Certifications
