import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { useScrolled } from '@/shared/hooks/useScrolled'
import { Button } from '@/shared/components/Button'

const NAV_LINKS = [
  { label: 'Главная', href: '#hero' },
  { label: 'О нас', href: '#advantages' },
  { label: 'Услуги', href: '#catalog' },
  { label: 'Цены', href: '#pricing' },
  { label: 'Контакты', href: '#contacts' },
]

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export function Header() {
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#hero" className="flex items-center gap-2 font-bold text-xl text-[#2d7a3a]">
            🌿 ТеплицаПро
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#2d7a3a] ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+78001234567"
              className={`flex items-center gap-2 text-sm font-medium ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <Phone size={16} />
              8 800 123-45-67
            </a>
            <Button size="sm" onClick={() => scrollTo('contacts')}>
              Получить консультацию
            </Button>
          </div>

          <button
            className={`lg:hidden p-2 cursor-pointer ${scrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setMenuOpen(v => !v)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="block text-gray-700 font-medium py-2 hover:text-[#2d7a3a]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="tel:+78001234567" className="flex items-center gap-2 text-gray-700 py-2">
            <Phone size={16} />
            8 800 123-45-67
          </a>
          <Button
            className="w-full"
            onClick={() => { scrollTo('contacts'); setMenuOpen(false) }}
          >
            Получить консультацию
          </Button>
        </div>
      )}
    </header>
  )
}
