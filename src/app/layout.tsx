import "./globals.css";
import "./style.css";
import "./template_style.css";
import "./global_loader.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Script from "next/script";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adzy Labs - One Stop Solution",
  description: "Adzy Labs and Deployment",
  other: {
    "msvalidate.01": "",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Zapier Interfaces */}
        <script
          async
          type="module"
          src="https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"
        ></script>
<script type="text/javascript" id="hs-script-loader" async defer src="//js-na2.hs-scripts.com/242403475.js"></script>
      </head>
      <body>
        {/* Google Analytics Tracking */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
            `,
          }}
        />

        {/* Bing Tracking */}
        <Script
          id="bing-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", '${process.env.NEXT_PUBLIC_BING_CLARITY_ID}');
            `,
          }}
        />

        {/* Facebook Pixel Tracking */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', ${process.env.NEXT_PUBLIC_META_PIXED_ID});
              fbq('track', 'PageView');
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
