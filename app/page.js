'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaGithub,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaBehance,
  FaDownload,
} from 'react-icons/fa';

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const timer = setTimeout(() => setLoading(false), 2000); // Stop loading after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
        <Image
          src="/ymloading.png"
          alt="Loading"
          width={300}
          height={300}
          priority
          className="animate-pulse"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-200 text-gray-800 relative">
      {/* Banner */}
      <div className="relative w-full h-44 bg-gradient-to-r from-gray-800 to-gray-600 shadow-lg">
        <Image
          src="/banner.png"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-50"
        />
      </div>

      {/* Profile Section */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
        <div
          className="relative w-36 h-36 mx-auto mb-4"
          data-aos="zoom-in"
        >
          <Image
            src="/yaseen.png"
            alt="Profile"
            width={144}
            height={144}
            className="rounded-full object-cover border-4 border-gray-700 shadow-2xl hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center mt-24 px-4">
        <h1
          className="text-4xl font-extrabold mb-2 text-gray-800"
          data-aos="fade-down"
        >
          Yaseen Mirshal
        </h1>
        <p
          className="text-gray-600 text-sm mb-8 italic"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Software Developer | Designer
        </p>

        {/* Contact Cards */}
        <div
          className="flex flex-col items-center space-y-4 mb-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <ContactCard icon={<FaPhoneAlt size={20} />} text="+91 9947234099" />
          <ContactCard
            icon={<FaEnvelope size={20} />}
            text="mirshalranzomllp@gmail.com"
          />
        </div>

        {/* Social Media Icons */}
        <div
          className="flex justify-center gap-5 flex-wrap mb-8"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <SocialLink icon={<FaInstagram />} href="https://www.instagram.com/yaseen_mirshal/" />
          <SocialLink icon={<FaWhatsapp />} href="https://wa.me/+919947234099" />
          <SocialLink icon={<FaLinkedin />} href="https://www.linkedin.com/in/yaseen-mirshal/" />
          <SocialLink icon={<FaYoutube />} href="https://www.youtube.com/channel/UC-alWGLEsO8jUZaHeNBvgTA" />
          <SocialLink icon={<FaGithub />} href="https://github.com/yaseenmirshal" />
          <SocialLink icon={<FaTwitter />} href="https://x.com/yaseen_mirshal" />
          <SocialLink icon={<FaFacebook />} href="https://www.facebook.com/yaseen.mirshal.5/" />
          <SocialLink icon={<FaBehance />} href="https://www.behance.net/yaseenmirshal" />
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 pb-2">
          <a href="https://yaseen-mirshal-portfolio.vercel.app/">
            <Button text="Portfolio" />
          </a>
          <a href="/YaseenMirshal.vcf" download="Yaseen_Mirshal_Contact">
            <Button text="Save Contact" isPrimary icon={<FaDownload />} />
          </a>
        </div>
      </div>

      {/* Footer */}
      <p className="text-center text-gray-500 text-sm mt-6 pb-5">
        Powered by{' '}
        <span className="font-bold text-gray-700">YMInnovation</span>
      </p>
    </div>
  );
}

// Contact Card Component
const ContactCard = ({ icon, text }) => (
  <div className="flex items-center gap-3 bg-white/50 backdrop-blur-md px-5 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
    <div className="text-gray-700">{icon}</div>
    <span className="text-gray-700 text-sm font-semibold">{text}</span>
  </div>
);

// Social Link Component
const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white hover:scale-110 transition-all duration-300 shadow-md"
  >
    {icon}
  </a>
);

// Button Component
const Button = ({ text, isPrimary, icon }) => (
  <button
    className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-md shadow-md transition-transform duration-300 ${
      isPrimary
        ? 'bg-gradient-to-r from-gray-800 to-gray-600 hover:from-gray-700 hover:to-gray-500 text-white'
        : 'bg-gray-300 hover:bg-gray-400 text-gray-700'
    } hover:scale-110`}
  >
    {icon && <span>{icon}</span>}
    {text}
  </button>
);
