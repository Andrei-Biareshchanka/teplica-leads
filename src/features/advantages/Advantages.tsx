import { motion } from 'framer-motion'
import { Shield, Clock, Factory, CreditCard, Users, Ruler } from 'lucide-react'

const ITEMS = [
  { Icon: Shield, title: 'Гарантия 5 лет', desc: 'Официальная гарантия на все конструкции и монтажные работы.' },
  { Icon: Clock, title: 'Монтаж за 14 дней', desc: 'Собственная бригада монтажников. Соблюдаем сроки по договору.' },
  { Icon: Factory, title: 'Собственное производство', desc: 'Производим профиль и комплектующие на собственном заводе.' },
  { Icon: CreditCard, title: 'Рассрочка 0%', desc: 'Рассрочка до 36 месяцев без переплат через банки-партнёры.' },
  { Icon: Users, title: 'Опытная команда', desc: 'Более 120 специалистов: инженеры, проектировщики, монтажники.' },
  { Icon: Ruler, title: 'Бесплатный замер', desc: 'Выезжаем в день обращения. Замер и КП — бесплатно.' },
]

export function Advantages() {
  return (
    <section id="advantages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#2d7a3a] font-semibold text-sm uppercase tracking-widest mb-2">Почему выбирают нас</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Наши преимущества</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="w-12 h-12 bg-[#2d7a3a]/10 rounded-xl flex items-center justify-center mb-4">
                <Icon className="text-[#2d7a3a]" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
