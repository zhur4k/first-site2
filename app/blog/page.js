'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../blog/Blog.module.css';
import articles from '../blog/articles/articles.js';
import Breadcrumbs from '../BreadCrumbs/Breadcrumbs';

// Определяем фильтры для тегов
const filterTags = ['ВСЕ', 'Топ-10', 'Ивент Менеджерам', '2024-2025', 'Для профессии', 'Мероприятия'];

// Хлебные крошки
const crumbs = [
    { href: '/', title: 'Главная' },
    { href: '/blog', title: 'Блог' },
];

// Компонент Blog
export default function Blog() {
    const [selectedTag, setSelectedTag] = useState('ВСЕ');

    const filteredArticles = selectedTag === 'ВСЕ'
        ? articles
        : articles.filter(article => article.tags.includes(selectedTag));

    return (
        <div className={styles.container}>
            <Breadcrumbs crumbs={crumbs} />
            <div className={styles.tagButtons}>
                {filterTags.map(tag => (
                    <button
                        key={tag}
                        className={`${styles.button} ${selectedTag === tag ? styles.active : ''}`}
                        onClick={() => setSelectedTag(tag)}>
                        {tag}
                    </button>
                ))}
            </div>
            <main className={styles.main}>
                {filteredArticles.map(article => (
                    <Link href={`/blog/articles/${article.slug}`} passHref key={article.slug}>
                        <div className={styles.articleContainer}>
                            <div className={styles.imageContainer}>
                                <Image
                                    className={styles.bkgr}
                                    src={article.imageUrl}
                                    alt={article.title}
                                    width={400}
                                    height={400}
                                />
                                <span className={styles.imageOverlay}></span>
                            </div>
                            <div className={styles.articleContent}>
                                <p className={styles.date}>{article.date}</p>
                                <h2 className={styles.title}>{article.title}</h2>
                                <p className={styles.text}>{article.text}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </main>
        </div>
    );
}
