import Link from "next/link";
import notFound from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={notFound.page_404}>
      <h1 className={notFound.title}>404</h1>
      <div className={notFound.background}></div>
      <p className={notFound.text}>Выгляди так, будто ты потерялся</p>
      <p className={notFound.subText}>
        страница, которую вы ищете, недоступна!
      </p>
      <Link className={notFound.link_404} href="/">
        На главную страницу
      </Link>
    </section>
  );
}
