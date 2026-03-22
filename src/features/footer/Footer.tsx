import { Phone, Mail, MapPin } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Главная', href: '#hero' },
  { label: 'О нас', href: '#advantages' },
  { label: 'Услуги', href: '#catalog' },
  { label: 'Цены', href: '#pricing' },
  { label: 'Контакты', href: '#contacts' },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-white font-bold text-xl mb-3 flex items-center gap-2">
              🌿 ТеплицаПро
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Строим промышленные теплицы под ключ с 2009 года.
              Гарантия, рассрочка, собственное производство.
            </p>
          </div>

          <div>
            <div className="text-white font-semibold mb-3">Навигация</div>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-white font-semibold mb-3">Контакты</div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Phone size={14} className="text-[#4caf61]" />
                <a href="tel:+78001234567" className="hover:text-white transition-colors">8 800 123-45-67</a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail size={14} className="text-[#4caf61]" />
                <a href="mailto:info@teplitsa.pro" className="hover:text-white transition-colors">info@teplitsa.pro</a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={14} className="text-[#4caf61] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">г. Краснодар, ул. Промышленная, 12</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-sm text-gray-500">
          <div>© 2025 ТеплицаПро. Все права защищены.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Оферта</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
