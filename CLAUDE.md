# CLAUDE.md — teplica-leads

> Этот файл читает Claude Code при каждом старте сессии.
> Здесь — полная история проекта, архитектура связки инструментов и правила работы.

---

## О проекте

**Название:** teplica-leads (greenhouse-landing)
**Тип:** Лендинг-сайт для сбора заявок на промышленные теплицы
**Цель:** Лид-генерация — пользователь заполняет форму заявки, компания перезванивает

Сайт — one-page с якорной навигацией. Sticky header. 11 секций от Hero до Footer.
Основная конверсионная точка — форма заявки в секции `#contacts`.

**KPI:**
- Конверсия в заявку: 3–5%
- Lighthouse mobile > 90
- LCP < 2.5s, CLS < 0.1

---

## История проекта

Проект создан 22 марта 2026 года как учебно-рабочий эксперимент по связке:
**Claude Code ↔ Notion ↔ GitHub**

**Что было сделано по шагам:**
1. Создан Notion-воркспейс, подключён MCP-сервер Notion к Claude Code
2. В Notion создана база задач (Tasks DB) и документация проекта
3. Написан план инициализации в Notion (страница «🔧 План инициализации проекта»)
4. Описан CLAUDE.md в Notion (страница «📐 CLAUDE.md — Сайт для теплиц»)
5. Claude Code инициализировал проект: Vite + React + TS, установил все зависимости
6. Созданы все 11 компонентов лендинга
7. Подключён GitHub, создан репозиторий `teplica-leads`

---

## Архитектура связки инструментов

```
┌─────────────────────────────────────────────────────────┐
│                     РАБОЧИЙ ПРОЦЕСС                     │
│                                                         │
│  Notion (задачи)                                        │
│      │                                                  │
│      │  MCP-сервер notion (claude code mcp)             │
│      ▼                                                  │
│  Claude Code  ──── читает задачи из Notion              │
│      │        ──── создаёт ветки в GitHub               │
│      │        ──── пишет код                            │
│      │        ──── обновляет статус задач в Notion      │
│      │                                                  │
│      │  GitHub CLI (gh) / GitHub MCP                    │
│      ▼                                                  │
│  GitHub (teplica-leads)                                 │
│      │                                                  │
│      │  Pull Request → review → merge                   │
│      ▼                                                  │
│  main branch → деплой на Vercel/Netlify                 │
└─────────────────────────────────────────────────────────┘
```

### Инструменты и их роли

| Инструмент | Роль |
|-----------|------|
| **Notion** | База задач (Tasks DB), документация, план спринтов |
| **GitHub** | Репозиторий кода, ветки, PR, история изменений |
| **Claude Code** | AI-агент, который читает задачи, пишет код, коммитит |
| **MCP Notion** | Протокол, через который Claude видит и редактирует Notion |
| **gh CLI** | Утилита для создания репо и PR из терминала |
| **Vite + React + TS** | Фреймворк фронтенда |
| **Tailwind CSS v4** | Стили |

---

## Notion — ссылки

| Страница | URL |
|---------|-----|
| Корень проекта (Тест 0.1 Заявки) | https://www.notion.so/32bc20722bca814ea8d6e44fabcbdddc |
| Tasks — база задач | https://www.notion.so/09ec88f8144c48fb8701d7ea42168b93 |
| CLAUDE.md в Notion | https://www.notion.so/32bc20722bca814bbafbf2f9f59ec8a1 |
| План инициализации | https://www.notion.so/32bc20722bca81529c62e3dd13dde7be |

**Статусы задач в Notion:** `Todo` → `In Progress` → `Done`

---

## GitHub

- **Репозиторий:** `teplica-leads`
- **Токен:** переменная окружения `GITHUB_TOKEN` (User variables Windows)
  - Проверить: `echo $GITHUB_TOKEN`
- **Ветка по умолчанию:** `main`

---

## Рабочий процесс с задачами (как работать с Claude)

### Старт задачи
Скажи Claude:
> «Возьми задачу [название] из Notion, создай ветку, реализуй компонент»

Claude сделает:
1. Прочитает задачу из Notion Tasks DB через MCP
2. Обновит статус → `In Progress`
3. Создаст ветку: `feat/greenhouse-<task-name>`
4. Напишет код
5. Сделает коммит и push
6. Создаст PR

### Завершение задачи
После merge PR — скажи Claude обновить статус → `Done`

### Конвенция веток
```
feat/greenhouse-hero-section
feat/greenhouse-lead-form
fix/greenhouse-header-mobile
chore/greenhouse-seo-meta
```

---

## Стек технологий

- **Framework:** React 18 + TypeScript + Vite
- **Стили:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Анимации:** Framer Motion
- **Формы:** React Hook Form (без zodResolver — встроенная валидация)
- **Иконки:** Lucide React
- **SEO:** React Helmet Async
- **Тесты:** Vitest + @testing-library/react
- **Деплой:** Vercel / Netlify

---

## Структура папок

```
src/
  app/              # App.tsx, main.tsx — точка входа
  shared/
    components/     # Button, Modal — переиспользуемые UI-примитивы
    hooks/          # useScrolled, useModal — общие хуки
    utils/          # вспомогательные функции
    types/          # общие TypeScript типы
  features/
    header/         # Sticky header + навигация + бургер
    hero/           # Главный экран с градиентом и CTA
    advantages/     # 6 карточек «Почему мы»
    catalog/        # 4 типа теплиц + модальное окно
    process/        # 7 шагов работы (таймлайн)
    gallery/        # Портфолио с фильтром и лайтбоксом
    pricing/        # 3 тарифных плана
    reviews/        # Карусель отзывов (Framer Motion)
    faq/            # Аккордеон FAQ
    lead-form/      # Форма заявки — ГЛАВНЫЙ конверсионный блок
    footer/         # Контакты, навигация, копирайт
```

**Алиас:** `@/` → `src/`

---

## Конвенции кода

- Один компонент = один файл, имя PascalCase
- Named exports везде (кроме `App.tsx` — default)
- Хук живёт рядом с компонентом (colocate)
- Строгая типизация, `any` запрещён
- Порядок импортов: внешние библиотеки → `@/shared` → `@/features` → относительные
- Функции компонентов — не стрелочные (`function Header()`, не `const Header = () =>`)

---

## Спринты (план разработки)

| Спринт | Что | Статус |
|--------|-----|--------|
| Sprint 1 | Инициализация проекта, стек, структура, CLAUDE.md | ✅ Done |
| Sprint 2 | Дизайн-система: Button, Modal, типографика, цвета | 🔄 Частично |
| Sprint 3 | Header + якорная навигация | ✅ Done |
| Sprint 4 | Hero-секция | ✅ Done |
| Sprint 5 | Advantages + Catalog | ✅ Done |
| Sprint 6 | Gallery + Process | ✅ Done |
| Sprint 7 | Pricing + Reviews | ✅ Done |
| Sprint 8 | LeadForm (React Hook Form) | ✅ Done |
| Sprint 9 | Footer + SEO meta | 🔲 Todo |
| Sprint 10 | Lighthouse audit, адаптив, деплой | 🔲 Todo |

---

## Следующие шаги

- [ ] Настроить GitHub Actions (CI: lint + build)
- [ ] Добавить React Helmet Async — meta-теги, OG-теги
- [ ] Подключить webhook для отправки формы (Telegram / email)
- [ ] Задеплоить на Vercel
- [ ] Добавить реальные фото теплиц в галерею
- [ ] Lighthouse audit и оптимизация
