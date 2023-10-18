import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/app/components/NavBar/NavBar.jsx";
import styles from "./layout.module.css";
import { FavProvider } from "@/app/contexts/FavContext.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Star Wars info",
  description: "This app is to provide information about Star wars world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FavProvider>
          <NavBar />
          <main className={styles.main}>{children}</main>
        </FavProvider>
      </body>
    </html>
  );
}
