import Image from "next/image";
import Link from "next/link";
import styles from './NotFound.module.css';

export default function NotFound() {
    return (
        <div className={styles.container}>
            <Image
                src="/stickers/404.png"
                alt="Страница не найдена"
                width={900}
                height={360}
                className={styles.image}
            />
            <h1 className={styles.title}>Страница не найдена</h1>
            <p className={styles.description}>
                Возможно, она была перемещена, или Вы просто неверно указали адрес страницы.
            </p>
            <Link href="/" className={styles.button}>
                На главную
            </Link>
        </div>
    );
}
