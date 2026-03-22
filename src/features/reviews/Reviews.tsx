import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const REVIEWS = [
  {
    id: 1,
    name: 'Александр К.',
    city: 'Краснодар',
    type: 'Промышленная теплица 2000 м²',
    rating: 5,
    text: 'Заказали большой тепличный комплекс. Сдали точно в срок, качество на высшем уровне. Работаем уже 2 года — никаких нареканий. Особенно понравился проектный отдел — учли все наши пожелания.',
  },
  {
    id: 2,
    name: 'Татьяна М.',
    city: 'Воронеж',
    type: 'Фермерская теплица 300 м²',
    rating: 5,
    text: 'Долго выбирала компанию, остановилась на ТеплицаПро. Не пожалела! Замер бесплатно, КП за сутки, монтаж за 5 дней. Теплица уже первый сезон окупила себя. Всем рекомендую.',
  },
  {
    id: 3,
    name: 'Дмитрий П.',
    city: 'Ростов-на-Дону',
    type: 'Арочный комплекс 600 м²',
    rating: 5,
    text: 'Работаем с ТеплицаПро третий год подряд. Уже три теплицы построили. Цены честные, сроки соблюдают, гарантия реальная — один раз приехали устранить недочёт по гарантии без вопросов.',
  },
]

export function Reviews() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const prev = () => { setDirection(-1); setIndex(i => (i - 1 + REVIEWS.length) % REVIEWS.length) }
  const next = () => { setDirection(1); setIndex(i => (i + 1) % REVIEWS.length) }

  const review = REVIEWS[index]

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#2d7a3a] font-semibold text-sm uppercase tracking-widest mb-2">Отзывы клиентов</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Что говорят наши клиенты</h2>
        </div>

        <div className="relative bg-gray-50 rounded-3xl p-8 sm:p-12 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={review.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 60 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex gap-1 mb-6 justify-center">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center">"{review.text}"</p>
              <div className="text-center">
                <div className="font-bold text-gray-900">{review.name}</div>
                <div className="text-sm text-gray-500">{review.city} · {review.type}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i) }}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${i === index ? 'bg-[#2d7a3a] w-6' : 'bg-gray-300 w-2.5'}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={prev} className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-[#2d7a3a] hover:text-white transition-all cursor-pointer">
                <ChevronLeft size={20} />
              </button>
              <button onClick={next} className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-[#2d7a3a] hover:text-white transition-all cursor-pointer">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
