'use client'

import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';

// Функция для получения списка статей
const getArticles = () => {
  const articlesDirectory = path.join(process.cwd(), 'app/blog/articles/');
  const filenames = fs.readdirSync(articlesDirectory);

  return filenames.map(name => {
    // Убедитесь, что убираете расширение файла, если оно есть
    const slug = name.replace(/\.mdx$/, '');
    return slug;
  });
};

const Navigation = () => {
  const router = useRouter();
  const { slug } = router.query;
  const articles = getArticles();

  // Находим индекс текущей статьи
  const currentIndex = articles.findIndex(currentSlug => currentSlug === slug);

  // Определяем slug для предыдущей и следующей статей
  const prevArticleSlug = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticleSlug = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <div className="prevLinkWrap">
      {/* Кнопка для предыдущей статьи */}
      {prevArticleSlug && (
        <Link href={`/blog/articles/${prevArticleSlug}`}>
          <a>
            <Image
              src="/icons/l-nav.png"
              alt="Назад"
              width={50}
              height={50}
            />
          </a>
        </Link>
      )}

      {/* Кнопка для возврата к списку статей */}
      <Link href="/blog">
        <a>
          <Image
            src="/icons/list-nav.png"
            alt="Список статей"
            width={50}
            height={50}
          />
        </a>
      </Link>

      {/* Кнопка для следующей статьи */}
      {nextArticleSlug && (
        <Link href={`/blog/articles/${nextArticleSlug}`}>
          <a>
            <Image
              src="/icons/r-nav.png"
              alt="Вперёд"
              width={50}
              height={50}
            />
          </a>
        </Link>
      )}
    </div>
  );
};

export default Navigation;