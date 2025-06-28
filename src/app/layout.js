
import { Inter, Roboto, poppins } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"] });
import "./globals.css"

export const metadata={
  title:"kapil project",
  description:"This is my First Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
    
          <div className="container">
          
            {children}

          </div>
  
      </body>
    </html>
  );
}
