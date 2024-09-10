import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

const opensans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XsavLab",
  description: "Created by Priyanshu",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <body className={opensans.className}>
          {children}
          </body>
      </AppRouterCacheProvider>
      
    </html>
  );
}
