import Head from "next/head";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Infravenous</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Biometric authentication</span>
            <span className="block text-pink-600">done right.</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Compared to conventional fingerprint authentication, vein pattern
            technology is more accurate, requires less maintenance, and is
            unaffected by interference on the skin surface. Infravenous is a
            versatile, compact, and cost-effective biometric authentication
            device. To authenticate users, the device uses infrared light to
            image their finger vein pattern. Our imaging processing pipeline
            then extracts key features from the pattern and uses a machine
            learning model to identify the user. This device can integrate with
            both digital and physical systems, meaning Infravenous’ applications
            span from physical locks to mobile apps. Ultimately, Infravenous
            makes cutting-edge biometric technology easily accessible and
            affordable.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 md:py-4 md:text-lg md:px-10"
              >
                Sign up
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-pink-700 bg-pink-100 hover:bg-pink-200 md:py-4 md:text-lg md:px-10"
              >
                Sign in
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
