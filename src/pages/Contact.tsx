import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Send, CheckCircle, Globe2 } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

const Contact = () => {
  const contactDetails = [
    {
      title: 'Corporate Headquarters',
      content: '180, Industrial Area Phase 1, Panchkula, Haryana 134113',
      icon: <MapPin className="h-6 w-6 text-white" />
    },
    {
      title: 'Direct Support',
      content: '+91 9988188897\nspenzaprime@gmail.com',
      icon: <Phone className="h-6 w-6 text-white" />
    },
    {
      title: 'Business Hours',
      content: 'Mon-Sat, 9:00 AM - 6:00 PM (GMT+4)',
      icon: <Clock className="h-6 w-6 text-white" />
    },
    {
      title: 'Official Website',
      content: 'www.spenzaprime.com',
      icon: <Globe2 className="h-6 w-6 text-white" />
    }
  ]

  return (
    <div className="flex min-h-screen flex-col bg-primary">
      <SEO 
        title="Contact Us" 
        description="Get in touch with SpenzaPrime for inquiries, quotes, or consultation on your next construction project." 
      />
      <Header />

      <main className="flex-grow">
        <section className="relative flex min-h-[80vh] items-center py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
              className="h-full w-full object-cover opacity-30 grayscale"
              alt="Background"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent"></div>
          </div>

          <div className="container relative z-10 mx-auto max-w-container-max grid grid-cols-1 gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <h1 className="font-heading text-5xl font-bold leading-tight text-white md:text-7xl">
                Let's Build the <br /> <span className="text-secondary">Future Together</span>
              </h1>

              <div className="space-y-10">
                {contactDetails.map((detail, index) => (
                  <motion.div
                    key={detail.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-6"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-white/10 backdrop-blur-sm">
                      {detail.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{detail.title}</h3>
                      <p className="mt-2 whitespace-pre-line text-slate-400">{detail.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mx-auto w-full max-w-lg lg:ml-auto"
            >
              <div className="rounded-sm bg-white p-8 shadow-2xl md:p-12">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // ── 1. Save to Google Sheet via Apps Script ──
    // PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE
    const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyOMKgJfUH9KRh9CJC9UmLULI7017C3gOs-i2Gf6JGK3Jr9fMQFvxfnnSm_Yde9UfVQ/exec'

    try {
      const formDataObj = new FormData();
      formDataObj.append('name', formData.name);
      formDataObj.append('email', formData.email);
      formDataObj.append('company', formData.company || '');
      formDataObj.append('projectType', formData.projectType || '');
      formDataObj.append('message', formData.message);

      // Fire and forget (Background save)
      fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataObj
      }).catch(err => console.error('Background save failed:', err));

      // ── 2. Open Gmail compose IMMEDIATELY ──
      const to = 'spenzaprime@gmail.com'
      const subject = encodeURIComponent(
        'New Inquiry from ' + formData.name + (formData.projectType ? ' - ' + formData.projectType : '')
      )
      const body = encodeURIComponent(
        'Dear SpenzaPrime Team,\n\n' +
        'You have received a new inquiry through the SpenzaPrime website contact form. Please find the details below:\n\n' +
        'Applicant Information\n' +
        'Full Name      : ' + formData.name + '\n' +
        'Email Address  : ' + formData.email + '\n' +
        'Company        : ' + (formData.company || 'Not Provided') + '\n' +
        'Project Type   : ' + (formData.projectType || 'Not Specified') + '\n\n' +
        'Message\n' +
        formData.message + '\n\n' +
        'Kindly respond to this inquiry at your earliest convenience by replying directly to the applicant\'s email address provided above.\n\n' +
        'Regards,\n' +
        'SpenzaPrime Website\n' +
        'www.spenzaprime.com | +91 9988188897 | spenzaprime@gmail.com'
      )
      window.open('https://mail.google.com/mail/?view=cm&to=' + to + '&su=' + subject + '&body=' + body, '_blank')

      setSubmitted(true)
      setFormData({ name: '', email: '', company: '', projectType: '', message: '' })

    } catch (error) {
      console.error('Error saving to sheet:', error)
      alert('Something went wrong. Please try again or contact us directly.')
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-4 py-12 text-center"
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-10 w-10 text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-primary">Gmail Opened!</h3>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          Your inquiry has been saved, and a Gmail window has opened.<br />
          Just click <strong>Send</strong> in Gmail to finish sending your message.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 rounded-sm border border-secondary px-6 py-3 text-sm font-bold text-secondary hover:bg-secondary hover:text-white transition-all"
        >
          Send Another Inquiry
        </button>
      </motion.div>
    )
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full rounded-sm border border-outline-variant bg-surface px-4 py-4 text-primary focus:border-secondary focus:outline-none transition-colors"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Work Email"
          className="w-full rounded-sm border border-outline-variant bg-surface px-4 py-4 text-primary focus:border-secondary focus:outline-none transition-colors"
          required
        />
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company Name"
          className="w-full rounded-sm border border-outline-variant bg-surface px-4 py-4 text-primary focus:border-secondary focus:outline-none transition-colors"
        />
        <div className="space-y-1">
          <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant opacity-60">
            Project Type
          </label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full rounded-sm border border-outline-variant bg-surface px-4 py-4 text-primary focus:border-secondary focus:outline-none appearance-none transition-colors"
          >
            <option value="">Select Project Type</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Industrial">Industrial</option>
            <option value="Infrastructure">Infrastructure</option>
          </select>
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          rows={4}
          className="w-full rounded-sm border border-outline-variant bg-surface px-4 py-4 text-primary focus:border-secondary focus:outline-none resize-none transition-colors"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-3 bg-secondary py-5 font-bold text-white shadow-xl shadow-secondary/20 transition-all hover:bg-secondary-container active:scale-95"
      >
        Submit Inquiry <Send className="h-4 w-4" />
      </button>
    </form>
  )
}

export default Contact
