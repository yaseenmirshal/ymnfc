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

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  // Show loading screen
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
    <div className="min-h-screen bg-white text-gray-800 relative">
      {/* Banner */}
      <div className="relative w-full h-36 bg-gray-900">
        <Image
          src="/banner.png"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-30"
        />
      </div>

      {/* Profile Section */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
        {/* Profile Image */}
        <div
          className="relative w-32 h-32 mx-auto mb-6"
          data-aos="zoom-in"
        >
          <Image
            src="/yaseen.png"
            alt="Profile"
            width={128}
            height={128}
            className="rounded-full object-cover border-4 border-gray-900 shadow-lg"
          />
          {/* <div className="absolute bottom-0 right-0 w-6 h-6 bg-white rounded-full animate-pulse border-2 border-gray-900"></div> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center mt-20 px-4">
        {/* Profile Name */}
        <h1
          className="text-3xl font-bold mb-2 text-gray-900"
          data-aos="fade-down"
        >
          Yaseen Mirshal
        </h1>
        <p
          className="text-gray-600 text-sm mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Software Developer
        </p>

        {/* Contact Information */}
        <div className="flex flex-col items-center space-y-4 mb-6" data-aos="fade-up" data-aos-delay="400">
          <ContactCard
            icon={<FaPhoneAlt size={20} />}
            text="+91 9947234099"
          />
          <ContactCard
            icon={<FaEnvelope size={20} />}
            text="mirshalranzomllp@gmail.com"
          />
          <Button
            text="Save Contact"
            isPrimary
            icon={<FaDownload />}
          />
        </div>

        {/* Social Media Icons */}
        <div
          className="flex justify-center gap-4 mb-6 flex-wrap"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <SocialLink
            icon={<FaInstagram />}
            href="https://www.instagram.com/yaseen_mirshal/"
            label="Instagram"
          />
          <SocialLink
            icon={<FaWhatsapp />}
            href="https://wa.me/+919947234099"
            label="WhatsApp"
          />
          <SocialLink
            icon={<FaLinkedin />}
            href="https://www.linkedin.com/in/yaseen-mirshal/"
            label="LinkedIn"
          />
          <SocialLink
            icon={<FaYoutube />}
            href="https://www.youtube.com/channel/UC-alWGLEsO8jUZaHeNBvgTA"
            label="YouTube"
          />
          <SocialLink
            icon={<FaGithub />}
            href="https://github.com/yaseenmirshal"
            label="GitHub"
          />
          <SocialLink
            icon={<FaTwitter />}
            href="https://x.com/yaseen_mirshal"
            label="Twitter"
          />
          <SocialLink
            icon={<FaFacebook />}
            href="https://www.facebook.com/yaseen.mirshal.5/"
            label="Facebook"
          />
          <SocialLink
            icon={<FaBehance />}
            href="https://www.behance.net/yaseenmirshal"
            label="Behance"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-center pb-10 gap-4">
          <a href="https://yaseen-mirshal-portfolio.vercel.app/">
            <Button text="My Portfolio" />
          </a>
          <a href="https://wa.me/+919947234099">
            <Button text="Get In Touch" isPrimary />
          </a>
        </div>
      </div>
    </div>
  );
}

// Contact Card Component
const ContactCard = ({ icon, text }) => (
  <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
    <div className="text-gray-900">{icon}</div>
    <span className="text-gray-700 text-sm font-medium">{text}</span>
  </div>
);

// Social Link Component
const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full text-gray-800 hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-md"
  >
    {icon}
  </a>
);

// Button Component
const Button = ({ text, isPrimary, icon }) => (
  <button
    className={`flex items-center justify-center gap-2 px-6 py-2 rounded-lg font-medium text-sm shadow-md transition-transform duration-300 ${
      isPrimary
        ? 'bg-gray-900 hover:bg-gray-700 text-white'
        : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
    } hover:scale-105`}
  >
    {icon && <span>{icon}</span>}
    {text}
  </button>
);
