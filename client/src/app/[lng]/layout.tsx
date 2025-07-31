import type { Metadata, ResolvingMetadata } from "next";
import Header from "@/components/website/layout/Header";
import Footer from "@/components/website/layout/Footer";
import PageSettingProvider from "@/contexts/PageSettingContext";
import { Kanit, Noto_Sans_JP } from "next/font/google";
import { ConfigProvider } from "antd";
import Favicon from "../icon.ico";
import "./globals.css";
import "./../../css/all.scss";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import ContactButton from "@/components/website/molecule/ContactButton";
import ToTop from "@/components/website/molecule/ToTop";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
});

const noto = Noto_Sans_JP({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const pageName = "home";
export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const lng = "TH";

  const seoRoute = `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/seo/page-name/${pageName}`;

  // fetch data
  const response = await fetch(seoRoute, { cache: "no-store" }).then((res) =>
    res.json()
  );

  return {
    metadataBase: new URL("https://siam-nistrans.com"),
    title: response[`seoTitle${lng}`],
    description: response[`seoDescription${lng}`],
    keywords: response[`seoKeyword${lng}`],
    alternates: {
      canonical: "./",
    },
    icons: [{ rel: "icon", url: Favicon.src }],
  };
}

export default async function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode;
  params: { lng: string };
}>) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(lng as any)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={lng}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: kanit.style.fontFamily,
          },
          components: {
            Pagination: {
              colorPrimary: "#F87607",
              colorPrimaryHover: "#F87607",
              borderRadius: 60,
              colorBgTextHover: "white",
            },
          },
        }}
      >
        <PageSettingProvider>
          <body
            className={
              lng !== "jp" ? `${kanit.className}` : `${noto.className} `
            }
          >
            <NextIntlClientProvider messages={messages}>
              <Header lng={lng} />
              {children}
              <ContactButton />
              <ToTop />
              <Footer />
            </NextIntlClientProvider>
          </body>
        </PageSettingProvider>
      </ConfigProvider>
    </html>
  );
}
