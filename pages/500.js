import { LuFrown } from "react-icons/lu";
import Header from "@/pages/components/Header";
import OpacityMotion from "@/pages/components/OpacityMotion";
import Head from "next/head";

export default function Page500() {
  return (
    <>
      <Head>
        <title>{`bencan.net: An error occurred`}</title>
        <meta name="description" content="An error occurred." />
        <meta name="keywords" content="bencan, bencan.net, bencan.net, bencan.net, bencan.net" />
        <meta name="author" content="Discord @ben.can" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={`bencan.net: An error occurred.`} />
        <meta property="og:description" content="An error occurred.." />
        <meta property="og:image" content="https://bencan.net/images/og-image.png" />
        <meta property="og:url" content={`https://bencan.net`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="tr_TR" />

        <meta name="twitter:title" content="bencan.net" />
        <meta name="twitter:description" content="An error occurred.." />
        <meta name="twitter:image" content="https://bencan.net/images/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="canonical" href="https://bencan.net" />
      </Head>
      <div className="flex justify-center w-full h-full">
        <div className="w-full min-h-[100dvh] max-w-[700px] px-6 mb-12">
          <Header />
          <OpacityMotion>
            <div className="flex flex-col mx-6 mt-28">
              <h1 className='flex items-center text-lg gap-x-1'>
                <LuFrown /> 500
              </h1>

              <p className='mt-4 text-sm text-light-secondaryText dark:text-dark-secondaryText'>
                An error occurred while trying to access the page you requested.
              </p>
            </div>
          </OpacityMotion>
        </div>
      </div>
    </>
  )
};