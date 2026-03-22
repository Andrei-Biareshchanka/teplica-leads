# teplica-leads — Лендинг для теплиц

Лендинг-сайт для сбора заявок на промышленные теплицы. One-page с якорной навигацией и формой заявки.

## Стек

- **React 18 + TypeScript + Vite**
- **Tailwind CSS v4**
- **Framer Motion** — анимации
- **React Hook Form** — форма заявки
- **Lucide React** — иконки
- **React Helmet Async** — SEO

## Запуск

```bash
npm install
npm run dev
```

## Структура

```
src/
  app/           # точка входа
  shared/        # UI-примитивы, хуки, утилиты
  features/      # секции лендинга (header, hero, catalog, ...)
```

## KPI

- Конверсия в заявку: 3–5%
- Lighthouse mobile > 90
- LCP < 2.5s, CLS < 0.1
