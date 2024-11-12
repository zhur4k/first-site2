import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from './components/ScrollToTopButton/page';
import Popup from './components/Popup/page'
import Bitrix24 from './components/Bitrix24/Bitrix24'
import MobileMenu from './components/MobileMenu'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Подарки Беларусь",
  description: "by Metrallo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
       <Header />
        <div className='container'>{children}</div>
        <ScrollToTopButton />
        <Popup/>
        <Footer />
        <Bitrix24 />
      </body>
    </html>
  );
}
