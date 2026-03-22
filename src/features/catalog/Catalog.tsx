import { useState } from 'react'
import { motion } from 'framer-motion'
import { Modal } from '@/shared/components/Modal'
import { Button } from '@/shared/components/Button'

const CATALOG = [
  {
    id: 'arch',
    title: 'Арочные теплицы',
    desc: 'Оптимальное соотношение цены и функциональности.',
    color: 'from-green-400 to-green-600',
    emoji: '🌿',
    details: 'Арочные теплицы — классика тепличного строительства. Прочная конструкция из оцинкованного профиля, поликарбонат 8–16 мм. Площадь от 50 до 5000 м². Высота конька 3–5 м.',
    price: 'от 850 ₽/м²',
    specs: ['Ширина: 6, 9, 12 м', 'Длина: от 12 м', 'Высота: 3–5 м', 'Покрытие: поликарбонат / плёнка'],
  },
  {
    id: 'gable',
    title: 'Двускатные теплицы',
    desc: 'Стандарт для промышленного производства.',
    color: 'from-emerald-500 to-teal-600',
    emoji: '🏡',
    details: 'Двускатные теплицы — промышленный стандарт. Стальной каркас с горячим цинкованием, стекло или поликарбонат. Срок службы более 25 лет.',
    price: 'от 1200 ₽/м²',
    specs: ['Ширина: 9, 12, 18 м', 'Длина: от 24 м', 'Высота: 4–7 м', 'Покрытие: стекло / поликарбонат'],
  },
  {
    id: 'industrial',
    title: 'Промышленные теплицы',
    desc: 'Для крупных агрокомплексов. От 1 га.',
    color: 'from-teal-500 to-cyan-600',
    emoji: '🏭',
    details: 'Промышленные теплицы для аграрных комплексов. Автоматизация климата, досвечивание, системы полива. Проектирование «под ключ».',
    price: 'от 2500 ₽/м²',
    specs: ['Площадь: от 1 га', 'Высота: 5–8 м', 'Автоматизация климата', 'Системы орошения'],
  },
  {
    id: 'farm',
    title: 'Фермерские теплицы',
    desc: 'Быстрый монтаж, разборная конструкция.',
    color: 'from-lime-500 to-green-500',
    emoji: '🌱',
    details: 'Фермерские теплицы для малого бизнеса. Монтаж 3–7 дней, разборная конструкция. Возможна аренда с последующим выкупом.',
    price: 'от 650 ₽/м²',
    specs: ['Ширина: 6, 9 м', 'Длина: от 6 м', 'Монтаж: 3–7 дней', 'Разборная конструкция'],
  },
]

export function Catalog() {
  const [selected, setSelected] = useState<typeof CATALOG[number] | null>(null)

  return (
    <section id="catalog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#2d7a3a] font-semibold text-sm uppercase tracking-widest mb-2">Виды конструкций</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Каталог теплиц</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATALOG.map((item, i) => (
            <motion.div
              key={item.id}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => setSelected(item)}
            >
              <div className={`h-40 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                <span className="text-6xl">{item.emoji}</span>
              </div>
              <div className="p-5 border border-gray-100 rounded-b-2xl text-center">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-3 leading-relaxed">{item.desc}</p>
                <div className="text-[#2d7a3a] font-bold">{item.price}</div>
                <div className="mt-3 text-sm text-[#2d7a3a] font-medium group-hover:underline">Подробнее →</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)} title={selected?.title}>
        {selected && (
          <div className="space-y-4">
            <div className={`h-32 rounded-xl bg-gradient-to-br ${selected.color} flex items-center justify-center`}>
              <span className="text-5xl">{selected.emoji}</span>
            </div>
            <p className="text-gray-600 leading-relaxed">{selected.details}</p>
            <div>
              <div className="font-semibold text-gray-900 mb-2">Характеристики:</div>
              <ul className="space-y-1">
                {selected.specs.map(s => (
                  <li key={s} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-[#2d7a3a]">✓</span> {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
              <span className="text-xl font-bold text-[#2d7a3a]">{selected.price}</span>
              <Button onClick={() => { setSelected(null); document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' }) }}>
                Оставить заявку
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
