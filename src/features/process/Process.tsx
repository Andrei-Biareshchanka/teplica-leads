import { motion } from 'framer-motion'

const STEPS = [
  { num: 1, title: 'Заявка', desc: 'Оставляете заявку на сайте или звоните' },
  { num: 2, title: 'Замер', desc: 'Выезжаем на объект, замер бесплатно' },
  { num: 3, title: 'КП', desc: 'Готовим коммерческое предложение за 24 ч' },
  { num: 4, title: 'Договор', desc: 'Фиксируем сроки и цену в договоре' },
  { num: 5, title: 'Производство', desc: 'Изготавливаем на нашем заводе' },
  { num: 6, title: 'Монтаж', desc: 'Бригада монтирует за 14 дней' },
  { num: 7, title: 'Сдача', desc: 'Принимаете объект + гарантийный паспорт' },
]

export function Process() {
  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#2d7a3a] font-semibold text-sm uppercase tracking-widest mb-2">Этапы работы</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Как мы работаем</h2>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block relative">
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-[#2d7a3a]/20" />
          <div className="grid grid-cols-7 gap-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-[#2d7a3a] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                  {step.num}
                </div>
                <div className="font-bold text-gray-900 mb-1 text-sm">{step.title}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{step.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden space-y-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className="flex gap-4 items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <div className="w-10 h-10 bg-[#2d7a3a] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                {step.num}
              </div>
              <div>
                <div className="font-bold text-gray-900">{step.title}</div>
                <div className="text-gray-500 text-sm mt-0.5">{step.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
