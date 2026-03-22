import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const ITEMS = [
  { q: 'Сколько стоит теплица под ключ?', a: 'Стоимость зависит от типа конструкции, площади, покрытия и комплектации. Базовые арочные — от 650 ₽/м², промышленные — от 2500 ₽/м². Точную цену даём после бесплатного замера.' },
  { q: 'Какой срок монтажа?', a: 'Фермерские теплицы монтируем за 3–7 дней, стандартные — за 10–14 дней. Для промышленных комплексов от 1 га сроки обговариваются индивидуально.' },
  { q: 'Есть ли гарантия на конструкцию?', a: 'Да. Гарантия от 2 до 10 лет в зависимости от тарифного плана. Гарантийный паспорт выдаётся при сдаче объекта.' },
  { q: 'Работаете ли вы в нашем регионе?', a: 'Работаем в 45 регионах России. Бригады монтажников базируются в разных городах. Уточните у менеджера — выезд чаще всего входит в стоимость.' },
  { q: 'Возможна ли рассрочка?', a: 'Да, рассрочка 0% на срок до 36 месяцев через банки-партнёры. Первоначальный взнос от 20%.' },
  { q: 'Нужно ли разрешение на строительство?', a: 'Для теплиц до 50 м² на личном участке — разрешение не требуется. Для промышленных объектов помогаем оформить документацию.' },
  { q: 'Когда лучше заказывать теплицу?', a: 'Рекомендуем осенью или зимой — загрузка ниже, сроки быстрее, можно договориться о скидке.' },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#2d7a3a] font-semibold text-sm uppercase tracking-widest mb-2">Вопросы и ответы</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Часто спрашивают</h2>
        </div>

        <div className="space-y-3">
          {ITEMS.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
                <ChevronDown
                  size={20}
                  className={`text-[#2d7a3a] flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-5 pb-5 text-gray-600 leading-relaxed">{item.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
