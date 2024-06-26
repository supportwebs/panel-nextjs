
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/header";
import Footer from "./component/footer";
import Drawer from "./component/Drawer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
            integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
            crossOrigin="anonymous" referrerPolicy="no-referrer"/>
    </head>

    <body dir="rtl" className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative font-body">
    <div dir="rtl" className="w-full relative">
      <div className="flex items-start justify-between">
          <Drawer />
        <div className="flex flex-col w-full md:space-y-4">
            <Header />
            {children}
        </div>
      </div>
          <Footer />
      </div>
      </body>
    </html>
  );
}



