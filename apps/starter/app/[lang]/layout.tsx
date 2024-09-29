import "@repo/ui/globals.css";
import { ThemeProvider } from "@repo/ui/components/theme-provider";
import { Header } from "@repo/ui/components/header";
import { Inter } from "next/font/google";

import { getDictionary } from "../../get-dictionary";
import { Locale } from "@repo/config/i18n-config";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const dictionary = await getDictionary(params.lang);
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header
            className="h-16 flex items-center"
            currentLocale={params.lang}
            dictionary={dictionary}
          ></Header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
