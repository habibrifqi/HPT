// import type { Metadata } from "next";

// import "@/public/template/dashboard/src/assets/css/remixicon.css";
// import "@/public/template/dashboard/src/assets/css/apexcharts.css";
// import "@/public/template/dashboard/src/assets/css/simplebar.css";
// import "@/public/template/dashboard/src/assets/css/prism.css";
// import "@/public/template/dashboard/src/assets/css/jsvectormap.min.css";
// import "@/public/template/dashboard/src/assets/css/swiper-bundle.min.css";
// import "@/public/template/dashboard/src/assets/css/quill.snow.css";
// import "@/public/template/dashboard/src/assets/css/style.css";
// import Head from "next/head";
// import Script from "next/script";
// /* Import font */

// export const metadata: Metadata = {
//   title: "Trezo - Tailwind CSS Admin Dashboard",
//   description: "Admin Dashboard Template",
//   viewport: "width=device-width, initial-scale=1.0",
// };

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
      {/* <Head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        
      </Head>
      <Script  src="/assets/js/apexcharts.min.js" strategy="lazyOnload" />
        <Script  src="/assets/js/fslightbox.js" strategy="lazyOnload" />
        <Script  src="/assets/js/simplebar.min.js" strategy="lazyOnload" />
        <Script  src="/assets/js/prism.js" strategy="lazyOnload" />
        <Script  src="/assets/js/clipboard.min.js" strategy="lazyOnload" />
        <Script  src="/assets/js/swiper-bundle.min.js" strategy="lazyOnload" />
        <Script  src="/assets/js/fullcalendar.min.js" strategy="lazyOnload" />
        <Script  src="/assets/js/jsvectormap.min.js" strategy="lazyOnload" />
        <Script  src="/assets/js/world-merc.js" strategy="lazyOnload" />
        <Script  src="/assets/js/quill.min.js" strategy="lazyOnload" />
        <Script  src="/assets/js/custom.js" strategy="lazyOnload" /> */}
     
        {children}
    </>
  );
}
