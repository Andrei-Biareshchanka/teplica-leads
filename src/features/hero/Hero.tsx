import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/shared/components/Button'

const STATS = [
  { value: '15+', label: 'лет на рынке' },
  { value: '500+', label: 'проектов' },
  { value: '45', label: 'регионов' },
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d24] via-[#2d7a3a] to-[#4caf61]" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          className="text-green-300 font-semibold text-sm uppercase tracking-widest mb-4"
          {...fadeUp}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Строим с 2009 года
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6"
          {...fadeUp}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Промышленные теплицы{' '}
          <span className="text-green-300">под ключ</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10"
          {...fadeUp}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Проектируем, производим и монтируем теплицы любого масштаба.
          Гарантия 5 лет. Рассрочка 0%.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          {...fadeUp}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Button
            size="lg"
            onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Рассчитать стоимость
          </Button>
          <Button
            size="lg"
            variant="white"
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Смотреть проекты
          </Button>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto"
          {...fadeUp}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {STATS.map(stat => (
            <div key={stat.value} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-green-300">{stat.value}</div>
              <div className="text-sm text-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown className="text-white/60" size={32} />
      </motion.div>
    </section>
  )
}
