import { useState } from 'react'
import { motion } from 'framer-motion'
import { Modal } from '@/shared/components/Modal'

const FILTERS = ['Все', 'Арочные', 'Двускатные', 'Промышленные', 'Фермерские']

const PROJECTS = [
  { id: 1, title: 'Тепличный комплекс', area: '2500 м²', location: 'Краснодарский край', type: 'Промышленные', bg: 'bg-green-700' },
  { id: 2, title: 'Фермерская теплица', area: '480 м²', location: 'Подмосковье', type: 'Фермерские', bg: 'bg-lime-600' },
  { id: 3, title: 'Арочный комплекс', area: '1200 м²', location: 'Ростовская область', type: 'Арочные', bg: 'bg-green-500' },
  { id: 4, title: 'Двускатная теплица', area: '800 м²', location: 'Воронеж', type: 'Двускатные', bg: 'bg-teal-600' },
  { id: 5, title: 'Агрокомплекс', area: '5000 м²', location: 'Ставрополь', type: 'Промышленные', bg: 'bg-emerald-700' },
  { id: 6, title: 'Частная теплица', area: '120 м²', location: 'Тула', type: 'Арочные', bg: 'bg-green-400' },
]

export function Gallery() {
  const [filter, setFilter] = useState('Все')
  const [selected, setSelected] = useState<typeof PROJECTS[number] | null>(null)

  const filtered = filter === 'Все' ? PROJECTS : PROJECTS.filter(p => p.type === filter)

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[#2d7a3a] font-semibold text-sm uppercase tracking-widest mb-2">Наши работы</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Выполненные проекты</h2>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                filter === f ? 'bg-[#2d7a3a] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              className="rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-lg transition-all"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              onClick={() => setSelected(project)}
            >
              <div className={`${project.bg} h-52 flex items-center justify-center relative`}>
                <span className="text-7xl opacity-30">🏗️</span>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 font-semibold transition-all">
                    Смотреть →
                  </span>
                </div>
              </div>
              <div className="p-4 border border-gray-100 rounded-b-2xl text-center">
                <div className="font-bold text-gray-900">{project.title}</div>
                <div className="flex gap-3 mt-1 text-sm text-gray-500 justify-center">
                  <span>{project.area}</span>
                  <span>·</span>
                  <span>{project.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)} title={selected?.title}>
        {selected && (
          <div className="space-y-4">
            <div className={`${selected.bg} h-48 rounded-xl flex items-center justify-center`}>
              <span className="text-7xl opacity-40">🏗️</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-gray-500">Тип теплицы</div>
                <div className="font-semibold text-gray-900">{selected.type}</div>
              </div>
              <div>
                <div className="text-gray-500">Площадь</div>
                <div className="font-semibold text-gray-900">{selected.area}</div>
              </div>
              <div>
                <div className="text-gray-500">Регион</div>
                <div className="font-semibold text-gray-900">{selected.location}</div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
