import Head from "next/head";
import {
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { SiGooglemaps } from "react-icons/si";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";

import design from "../public/konsultasi.png";
import code from "../public/timbang.png";
import consulting from "../public/kontrak.png";
import web1 from "../public/ofice1.jpeg";
import web2 from "../public/ofice2.jpeg";
import web3 from "../public/ofice3.jpeg";
import web4 from "../public/ofice4.jpeg";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Notaris Cirebon | Idam Hudi, S.H., M.Kn.</title>
        <meta name="description" content="Layanan Notaris terpercaya di Cirebon bersama Idam Hudi, S.H., M.Kn. Pembuatan akta, legalisir, surat kuasa, dan konsultasi hukum." />
        <meta name="keywords" content="Notaris Cirebon, Jasa Akta Notaris, Legalisir Dokumen, Surat Kuasa, Konsultasi Hukum, Notaris Idam Hudi" />
        <meta name="author" content="Notaris Idam Hudi" />
        <meta property="og:title" content="Notaris Cirebon | Idam Hudi, S.H., M.Kn." />
        <meta property="og:description" content="Layanan Notaris terpercaya di Cirebon bersama Idam Hudi. Akta, legalisir, surat kuasa, dan konsultasi hukum." />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://idamhudi.vercel.app/" />
        <link rel="canonical" href="https://idamhudi.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Notrais Idam Hudi</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Idam Hudi, S.H.,M.Kn.
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Notaris.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Tuntaskan Pemenuhan Hak Legal Anda, Raih Keamanan Hukum Bersama Kami: Notaris, Pelindung Kepastian dan Pembuat Kenangan.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="#" rel="noreferrer"> <CgMail /></a>
              <a href="https://wa.me/6281310649885" target="_blank" rel="noreferrer"><AiOutlineWhatsApp /></a>
              <a href="https://maps.app.goo.gl/TvH46wtcvwNmmkDFA" target="_blank" rel="noreferrer"><SiGooglemaps /></a>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Pelayanan</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Pelayanan utama kami mencakup pembuatan <span className="text-teal-500">Akta</span> Notaris yang berkaitan dengan berbagai transaksi dan perjanjian. Apakah Anda sedang menjalani proses jual beli properti, mendirikan perusahaan, atau membagi harta warisan, kami di sini untuk membantu Anda menyusun dokumen-dokumen <span className="text-teal-500">hukum</span> yang sah dan sesuai dengan ketentuan perundang-undangan.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Verifikasi Dokumen
              </h3>
              <p className="py-2 text-teal-600">
                Pendaftaran Dan Pengesahan Legalisir.
              </p>
              <p className="text-gray-800 py-1">Verifikasi keabsahan dokumen-dokumen hukum</p>
              <p className="text-gray-800 py-1">Pendaftaran dokumen-dokumen tertentu di kantor pertanahan atau lembaga terkait</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Surat Kuasa
              </h3>
              <p className="py-2 text-teal-600">
                Pembuatan Surat Kuasa.
              </p>
              <p className="text-gray-800 py-1">Pembuatan akta kuasa.</p>
              <p className="text-gray-800 py-1">Pembuatan surat kuasa khusus</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Akta Notaris</h3>
              <p className="py-2 text-teal-600">Pembuatan akta pendirian perusahaan
              </p>
              <p className="text-gray-800 py-1">Akta CV</p>
              <p className="text-gray-800 py-1">Akta PT</p>
              <p className="text-gray-800 py-1">Perjanjian</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Galeri</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Kantor hukum saya, tempat di mana kepastian hukum bertemu dengan pelayanan berkualitas tinggi.kami menciptakan lingkungan yang mendukung kolaborasi kreatif dan diskusi hukum yang mendalam.

              Lokasi kantor kami strategis, memberikan akses mudah bagi klien dan mitra bisnis kami,Lokasi Kantor kami di <span className="text-teal-500">Cirebon </span>
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-10 mt-20">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-2">Notaris Idam Hudi</h2>
            <p className="max-w-sm text-center md:text-left text-sm">
              Menyediakan layanan legal terpercaya dan profesional untuk kepastian hukum Anda.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-10">
            <div>
              <h3 className="font-semibold mb-2">Layanan</h3>
              <ul className="space-y-1 text-sm">
                <li>Verifikasi Dokumen</li>
                <li>Surat Kuasa</li>
                <li>Akta Notaris</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Kontak</h3>
              <ul className="space-y-1 text-sm">
                <li>Email: <a href="mailto:idam.hudi79@gmail.com" className="text-teal-600 dark:text-teal-400">idam.hudi79@gmail.com</a></li>
                <li>WhatsApp: <a href="https://wa.me/6281310649885" target="_blank" rel="noreferrer" className="text-teal-600 dark:text-teal-400">+62 813 1064 9885</a></li>
                <li>Alamat: Cirebon, Indonesia</li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-5 text-3xl">
            <a href="mailto:info@notarisidamhudi.com" aria-label="Email" className="hover:text-teal-600 dark:hover:text-teal-400"><CgMail /></a>
            <a href="https://wa.me/6281310649885" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-teal-600 dark:hover:text-teal-400"><AiOutlineWhatsApp /></a>
            <a href="https://maps.app.goo.gl/TvH46wtcvwNmmkDFA" target="_blank" rel="noreferrer" aria-label="Lokasi" className="hover:text-teal-600 dark:hover:text-teal-400"><SiGooglemaps /></a>
          </div>
        </div>
        <div className="text-center text-xs mt-6 text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Notaris Idam Hudi. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
