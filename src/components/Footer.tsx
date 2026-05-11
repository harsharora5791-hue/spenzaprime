import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/Spenza Prime logo.png'

const Footer = () => {
  return (
    <footer className="border-t border-outline-variant bg-white py-16 px-6 md:px-12">
      <div className="container mx-auto max-w-container-max">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-8">
            <Link to="/" className="flex items-center">
              <img src={logoImg} alt="SpenzaPrime Logo" className="h-24 w-auto" />
            </Link>
            <p className="text-sm text-on-surface-variant">
              © 2026 SpenzaPrime Construction Chemicals. Engineered for Durability and Structural Integrity.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-heading font-bold text-primary text-sm uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2 text-sm text-on-surface-variant font-medium">
              <li><Link to="/products" className="hover:text-secondary">Tile Adhesives</Link></li>
              <li><Link to="/products" className="hover:text-secondary">All Products</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading font-bold text-primary text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-on-surface-variant font-medium">
              <li><Link to="/about" className="hover:text-secondary">About Us</Link></li>
              <li><Link to="/applications" className="hover:text-secondary">Applications</Link></li>
              <li><Link to="/contact" className="hover:text-secondary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading font-bold text-primary text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>180, Industrial Area Phase 1, Panchkula, Haryana 134113</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <a
                  href="https://mail.google.com/mail/?view=cm&to=spenzaprime@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary"
                >
                  spenzaprime@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+91 9988188897</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


