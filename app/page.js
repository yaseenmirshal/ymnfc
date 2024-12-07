'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
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
          src="/ymloading.png" // Replace with your image path
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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="text-center max-w-md w-full p-6   ">
        {/* Profile Image */}
        <div
          className="relative w-28 h-28 mx-auto mb-6"
          data-aos="zoom-in"
        >
          <Image
            src="/yaseen.png"
            alt="Profile"
            width={112}
            height={112}
            className="rounded-full object-cover border-4 border-purple-500 shadow-md"
          />
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-purple-500 rounded-full animate-pulse border-2 border-gray-900"></div>
        </div>

        {/* Profile Name */}
        <h1
          className="text-3xl font-extrabold mb-2"
          data-aos="fade-down"
        >
          Yaseen Mirshal
        </h1>
        <p
          className="text-gray-400 text-sm mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Web Developer • Designer
        </p>
{/* Contact Information */}
<div
  className="space-y-4 mb-6" // Increased spacing to `space-y-4` for better gap
  data-aos="fade-up"
  data-aos-delay="400"
>
  <a
    href="tel:+919947234099"
    className="block"
  >
    <ContactCard
      icon={<FaPhoneAlt size={18} />}
      text="+91 9947234099"
    />
  </a>
  <a
    href="mailto:mirshalranzomllp@gmail.com"
    className="block"
  >
    <ContactCard
      icon={<FaEnvelope size={18} />}
      text="mirshalranzomllp@gmail.com"
    />
  </a>
</div>


        {/* Social Media Icons */}
        <div
          className="flex justify-center gap-4 mb-6 flex-wrap"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <a
            href="https://www.instagram.com/yaseen_mirshal/?igshid=NzZlODBkYWE4Ng%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <SocialIcon icon={<FaInstagram />} />
          </a>
          <a
            href="https://wa.me/+919947234099"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <SocialIcon icon={<FaWhatsapp />} />
          </a>
          <a
            href="https://www.linkedin.com/in/yaseen-mirshal/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <SocialIcon icon={<FaLinkedin />} />
          </a>
          <a
            href="https://www.youtube.com/channel/UC-alWGLEsO8jUZaHeNBvgTA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <SocialIcon icon={<FaYoutube />} />
          </a>
          <a
            href="https://github.com/yaseenmirshal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <SocialIcon icon={<FaGithub />} />
          </a>
          <a
            href="https://x.com/yaseen_mirshal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <SocialIcon icon={<FaTwitter />} />
          </a>
          <a
            href="https://www.facebook.com/yaseen.mirshal.5/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <SocialIcon icon={<FaFacebook />} />
          </a>
          <a
            href="https://www.behance.net/yaseenmirshal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
          >
            <SocialIcon icon={<FaBehance />} />
          </a>
        </div>

        {/* Buttons */}
        <div
          className="flex justify-center gap-4"
          
        >
          
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
  <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-lg border border-white/10 hover:scale-105 transition-transform duration-300 shadow-lg">
    <div className="text-purple-400">{icon}</div>
    <span className="text-gray-300 text-sm">{text}</span>
  </div>
);

// Social Icon Component
const SocialIcon = ({ icon }) => (
  <div className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/10 hover:bg-purple-600 hover:scale-110 text-gray-200 hover:text-white transition-all duration-300 shadow-lg">
    {icon}
  </div>
);

// Button Component
const Button = ({ text, isPrimary }) => (
  <button
    className={`px-6 py-2 rounded-full font-medium text-sm shadow-lg transition-all duration-300 ${
      isPrimary
        ? 'bg-purple-600 hover:bg-purple-500 text-white'
        : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
    } hover:scale-105`}
  >
    {text}
  </button>
);
