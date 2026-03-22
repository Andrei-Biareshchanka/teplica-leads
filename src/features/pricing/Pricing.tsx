import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '@/shared/components/Button'

const PLANS = [
  {
    name: 'Базовый',
    price: 'от 650 ₽/м²',
    desc: 'Для небольших хозяйств',
    features: ['Арочная конструкция', 'Поликарбонат 6 мм', 'Монтаж 7–10 дней', 'Гарантия 2 года', 'Бесплатный замер'],
    missing: ['Система отопления', 'Автополив', 'Досвечивание'],
    highlighted: false,
  },
  {
    name: 'Стандарт',
    price: 'от 1200 ₽/м²',
    desc: 'Оптимальный выбор',
    features: ['Двускатная конструкция', 'Поликарбонат 10 мм', 'Монтаж 10–14 дней', 'Гарантия 5 лет', 'Система отопления', 'Бесплатный замер'],
    missing: ['Автополив', 'Досвечивание'],
    highlighted: true,
  },
  {
    name: 'Премиум',
    price: 'от 2500 ₽/м²',
    desc: 'Полный комплекс «под ключ»',
    features: ['Промышленная конструкция', 'Поликарбонат 16 мм / стекло', 'Монтаж от 14 дней', 'Гарантия 10 лет', 'Система отопления', 'Автополив', 'Досвечивание', 'Автоматизация климата'],
    missing: [],
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#2d7a3a] font-semibold text-sm uppercase tracking-widest mb-2">Стоимость</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Тарифные планы</h2>
          <p className="text-gray-500 mt-3">Точная стоимость — после бесплатного замера</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`rounded-2xl p-6 ${plan.highlighted ? 'bg-[#2d7a3a] text-white shadow-2xl md:scale-105' : 'bg-white shadow-sm'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {plan.highlighted && (
                <div className="bg-white/20 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-3">
                  Популярный
                </div>
              )}
              <div className={`text-sm mb-1 ${plan.highlighted ? 'text-green-200' : 'text-gray-500'}`}>{plan.desc}</div>
              <div className={`text-2xl font-bold mb-1 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>{plan.name}</div>
              <div className={`text-3xl font-bold mb-6 ${plan.highlighted ? 'text-green-200' : 'text-[#2d7a3a]'}`}>{plan.price}</div>

              <ul className="space-y-2 mb-6">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check size={16} className={`mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-green-300' : 'text-[#2d7a3a]'}`} />
                    <span className={plan.highlighted ? 'text-white/90' : 'text-gray-700'}>{f}</span>
                  </li>
                ))}
                {plan.missing.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm opacity-40">
                    <span className="mt-0.5 w-4 text-center flex-shrink-0">—</span>
                    <span className={plan.highlighted ? 'text-white' : 'text-gray-500'}>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? 'white' : 'primary'}
                className="w-full"
                onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Выбрать
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
