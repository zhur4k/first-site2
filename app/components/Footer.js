import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.leftContent}>
                <p>ООО "Визионер Групп" УНП 693257297</p>
                <p>Сайт не является интернет-магазином и предназначен только для оптовой продажи по образцам.</p>

                <div className={styles.socialLinks}>
                    <Link href="https://t.me/maksim_metrallo">
                        <Image
                            src="/svg/telegram.svg"
                            alt="метралло телеграм"
                            width={40}
                            height={40}
                        />
                    </Link>
                    <Link href="https://www.instagram.com/metrallo_by?igsh=Mm9wNm5jczB4MW0=">
                        <Image
                            src="/svg/instagram.svg"
                            alt="метрало инстаграм"
                            width={40}
                            height={40}
                        />
                    </Link>
                    <Link href="https://api.whatsapp.com/send?phone=375291092099">
                        <Image
                            src="/svg/whatsapp.svg"
                            alt="метралло ватсап"
                            width={40}
                            height={40}
                        />
                    </Link>
                    <Link href="mailto:maksimtiskevic5@gmail.com">
                        <Image
                            src="/svg/gmail.svg"
                            alt="метралло гмаил почта"
                            width={40}
                            height={40}
                        />
                    </Link>
                </div>
            </div>

            <div className={styles.rights}>
                <p>Все права защищены © 2020-2025</p>
            </div>
        </footer>
    );
};

export default Footer;
