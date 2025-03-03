import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';

export default function Portfolio() {
  const [showProjects, setShowProjects] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);

  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };

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
      className="min-h-screen bg-gray-100 text-gray-900 p-6"
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
        <h1 className="text-4xl font-bold">Montout Thomas - Mon Portfolio</h1>
        <p className="text-lg mt-2">Développeur en recherche d'alternance</p>
        <div className="flex justify-center space-x-4 mt-4">
          <motion.a 
            href="https://www.linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin className="text-3xl text-blue-700" />
          </motion.a>
          <motion.a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub className="text-3xl text-gray-800" />
          </motion.a>
          <motion.a 
            href="mailto:montoutthomas@gmail.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope className="text-3xl text-red-600" />
          </motion.a>
        </div>
      </motion.header>

      <motion.section 
        className="text-center mb-10 bg-white p-6 rounded-lg shadow-lg"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800">À propos</h2>
        <p className="mt-2 text-gray-600">Après plusieurs années à chercher ma voie, j'ai découvert le développement. Depuis moins d'un an, je me forme pour intégrer un BTS SIO SLAM en alternance. Résoudre des problèmes, apprendre chaque jour et explorer de nouvelles technologies me motivent au quotidien.

Chaque défi est une opportunité d'acquérir de nouvelles compétences. Mon objectif est de devenir un développeur accompli, alliant rigueur, curiosité et persévérance.

Ce portfolio reflète mon parcours et mon engagement à évoluer dans ce domaine passionnant.</p>
      </motion.section>

      <motion.section 
        className="text-center mb-10 bg-white p-6 rounded-lg shadow-lg"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800">Projets</h2>
        <Button onClick={toggleProjects} className="mt-4">
          {showProjects ? 'Masquer' : 'Voir'} les projets
        </Button>
        {showProjects && (
          <motion.div 
            className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent>
                <h3 className="text-xl font-semibold">Portfolio</h3>
                <p className="mt-2">Ce projet est mon portfolio personnel, développé avec React. Il présente mes compétences, mes projets et permet de me contacter facilement.</p>
                <p className="mt-2 font-semibold">Technologies utilisées :</p>
                <ul className="list-disc list-inside mt-2 text-left">
                  <li>React</li>
                  <li>Framer Motion</li>
                  <li>EmailJS</li>
                  <li>React Icons</li>
                  <li>Tailwind CSS</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-xl font-semibold">Projet 2</h3>
                <p className="mt-2">à suivre</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-xl font-semibold">Projet 3</h3>
                <p className="mt-2">à suivre</p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </motion.section>

      <motion.section 
        className="text-center mb-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold">Contact</h2>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4 max-w-md mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Nom"
            className="w-full p-2 border rounded-lg"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded-lg"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-2 border rounded-lg"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <motion.button 
            type="submit" 
            className="w-full p-2 bg-blue-500 text-white rounded-lg"
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
