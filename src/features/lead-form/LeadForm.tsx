import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/shared/components/Button'

interface FormData {
  name: string
  phone: string
  type: string
  area: string
  comment: string
}

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    await new Promise(resolve => setTimeout(resolve, 800))
    console.log('Lead form data:', data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contacts" className="py-20 bg-[#2d7a3a]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <CheckCircle size={64} className="text-green-300 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-3">Заявка отправлена!</h2>
          <p className="text-white/80 text-lg">Наш менеджер свяжется с вами в течение 30 минут</p>
        </div>
      </section>
    )
  }

  return (
    <section id="contacts" className="py-20 bg-[#2d7a3a]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Получите расчёт бесплатно</h2>
          <p className="text-white/70">Оставьте заявку — перезвоним за 30 минут</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя *</label>
              <input
                {...register('name', { required: 'Введите имя' })}
                placeholder="Александр"
                className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d7a3a] ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Телефон *</label>
              <input
                {...register('phone', {
                  required: 'Введите телефон',
                  pattern: { value: /^[\d\s+\-()]{10,}$/, message: 'Некорректный номер' },
                })}
                placeholder="+7 999 000-00-00"
                className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d7a3a] ${errors.phone ? 'border-red-400' : 'border-gray-200'}`}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Тип теплицы</label>
              <select
                {...register('type')}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d7a3a]"
              >
                <option value="">Выберите тип</option>
                <option value="arch">Арочная</option>
                <option value="gable">Двускатная</option>
                <option value="industrial">Промышленная</option>
                <option value="farm">Фермерская</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Площадь (м²)</label>
              <input
                {...register('area')}
                type="number"
                placeholder="500"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d7a3a]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Комментарий</label>
            <textarea
              {...register('comment')}
              rows={3}
              placeholder="Опишите ваш проект..."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d7a3a] resize-none"
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Отправка...' : 'Получить расчёт бесплатно'}
          </Button>

          <p className="text-center text-xs text-gray-400">
            Нажимая кнопку, вы соглашаетесь с{' '}
            <a href="#" className="underline hover:text-gray-600">политикой конфиденциальности</a>
          </p>
        </form>
      </div>
    </section>
  )
}
