import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';

export default function Portfolio() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(null);
    try {
      await emailjs.send('service_a6zlae5', 'template_s8bzn7r', form, '2VbiBgbCMs_2mqCm-');
      setSubmitSuccess(true);
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitSuccess(false);
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-gray-100 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.header 
        className="text-center mb-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-white sm:text-3xl">Montout Thomas - Mon Portfolio</h1>
        <p className="text-2xl mt-2 text-gray-300 sm:text-xl">Développeur en recherche d'alternance</p>
        <div className="flex justify-center space-x-4 mt-4">
          <motion.a 
            href="www.linkedin.com/in/thomas-montout" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin className="text-4xl text-blue-500 sm:text-3xl" />
          </motion.a>
          <motion.a 
            href="https://github.com/TaeVieDev" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub className="text-4xl text-gray-300 sm:text-3xl" />
          </motion.a>
          <motion.a 
            href="mailto:montoutthomas@gmail.com"
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope className="text-4xl text-red-500 sm:text-3xl" />
          </motion.a>
        </div>
      </motion.header>

      <motion.section 
        className="text-center mb-10 bg-gray-800 p-6 rounded-lg shadow-lg bg-opacity-80"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-white sm:text-xl">À propos</h2>
        <p className="mt-2 text-gray-300 sm:text-base">
          Après plusieurs années dans l’éducation nationale, j'ai découvert le développement et ça a été une véritable révélation. Depuis un peu moins d'un an maintenant, je me forme avec passion dans le cadre d'une reprise d’étude en BTS SIO SLAM en alternance avec l'envie profonde de me construire un avenir dans ce domaine.
        </p>
        <p className="mt-2 text-gray-300 sm:text-base">
          Ce qui m'a fait tomber amoureux du code c’est quand j'ai compris que c'était la fusion parfaite entre <strong>« logique » et « création »</strong>. C'est la sensation unique que procure la résolution d'un problème après des heures de réflexion. Chaque bug, chaque défi est une opportunité d'apprendre et de progresser.
        </p>
        <p className="mt-2 text-gray-300 sm:text-base">
          Cette soif d'apprentissage me pousse chaque jour à aller plus loin, à explorer de nouvelles technologies et à me perfectionner. Je suis conscient que le chemin est long, mais déterminé à devenir un développeur accompli.
        </p>
        <p className="mt-2 text-gray-300 sm:text-base">
          Mon objectif est d'acquérir de solides compétences techniques, mais aussi de cultiver la <strong>rigueur</strong>, la <strong>curiosité</strong> et la <strong>persévérance</strong> qui font, selon moi, les meilleurs développeurs.
        </p>
        <p className="mt-2 text-gray-300 sm:text-base">
          Ce portfolio est à la fois le reflet de mon apprentissage et la preuve de mon engagement à évoluer dans ce métier qui me passionne.
        </p>
      </motion.section>

      <motion.section 
        className="text-center mb-10 bg-gray-800 p-6 rounded-lg shadow-lg bg-opacity-80"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-white sm:text-xl">Projets</h2>
        <motion.div 
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="bg-gray-700 text-gray-300 p-4 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-white sm:text-lg">Portfolio</h3>
            <p className="mt-2 text-gray-300 sm:text-base">Ce projet est mon portfolio personnel, développé avec React. Il présente mes compétences, mes projets et permet de me contacter facilement.</p>
            <p className="mt-2 font-semibold text-gray-300 sm:text-base">Technologies utilisées :</p>
            <ul className="list-disc list-inside mt-2 text-left text-gray-300 sm:text-base">
              <li>React</li>
              <li>Framer Motion</li>
              <li>EmailJS</li>
              <li>React Icons</li>
              <li>Tailwind CSS</li>
            </ul>
          </motion.div>
          <motion.div 
            className="bg-gray-700 text-gray-300 p-4 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-white sm:text-lg">Projet 2</h3>
            <p className="mt-2 text-gray-300 sm:text-base">à suivre</p>
          </motion.div>
          <motion.div 
            className="bg-gray-700 text-gray-300 p-4 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-white sm:text-lg">Projet 3</h3>
            <p className="mt-2 text-gray-300 sm:text-base">à suivre</p>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section 
        className="text-center mb-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-white sm:text-xl">Contact</h2>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4 max-w-md mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Nom"
            className="w-full p-2 border rounded-lg bg-gray-700 text-white border-gray-600 sm:p-1"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded-lg bg-gray-700 text-white border-gray-600 sm:p-1"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-2 border rounded-lg bg-gray-700 text-white border-gray-600 sm:p-1"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <motion.button 
            type="submit" 
            className="w-full p-2 bg-blue-500 text-white rounded-lg sm:p-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
          </motion.button>
          {submitSuccess === true && <p className="text-green-500 mt-2">Message envoyé !</p>}
          {submitSuccess === false && <p className="text-red-500 mt-2">Erreur lors de l'envoi, veuillez réessayer.</p>}
        </form>
      </motion.section>
    </motion.div>
  );
}
