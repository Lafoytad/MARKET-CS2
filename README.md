Проект залит на хостинг Vercel (Vercel не поддерживает SQLite), вы можете посмотреть его перейдя по ссылке: https://market-cs2.vercel.app

Что сделал: Для реализации каждого компонента использовалась методология Atomic Design. Каждый предмет, находящийся на сайте, имеет разное название, информацию и т.д. О каждом предмете доступны следующие данные: "thing, type, name, price, rarity, collection, caseOn, path, info1, info2, info3, icon, url?, textUrl?". В чате реализована СУБД SQLite с помощью Prisma. На главной странице есть карусель отфильтрованных предметов из списка "новое и популярное". На странице "Новости" используется REST API для подключения к Steam API, нажав на картинку, можно перейти по ссылке каждого поста. На странице "Магазин" в разделе "Главная" используется LocalStorage для реализации "ежедневного набора", который можно получить бесплатно в количестве 2 шт. за сессию. Также на этой и последующих страницах "Общее", "Копенгаген-2024", "Торговая площадка", "Инструменты" используется LocalStorage для сохранения предметов в Корзину, а также локальная база данных на 2600 строк, которая показывает каждый предмет и выводит информацию о каждом предмете по отдельности. Для вывода информации о добавлении элемента в корзину используется Ant Design. Все предметы, находящиеся в корзине, можно как купить все сразу, так и убрать поштучно из корзины. При покупке предметов используется LocalStorage, и они добавляются как в Корзину, где можно их продать или посмотреть время и дату покупки, так и на страницу "Инвентарь", где можно использовать фильтры "По новизне", "По алфавиту", "По типу", "По коллекции", "По редкости", а также выбрать категорию предметов "Всё", "Экипировка", "Кейсы", "Наклейки". Redux используется для запоминания информации для фильтров (dropdown меню), а также показывает информацию о каждом элементе.

Технологии: React (фреймфорк next.js) • Redux (toolkit, Slice) • JavaScript • Axios • Ant Design • SQLite(prisma) • local database • REST API • dynamic Loading • LocalStorage && SessionStorage • SCSS • Atomic design • Hooks • Git • Postman

-------------------------------------------------------------------
-------------------------------------------------------------------

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
