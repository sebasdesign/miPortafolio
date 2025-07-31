import profile from "../assets/Foto.jpg";
import "../componets/About.css";
import { motion } from "framer-motion";

export const AboutMe = () => {
  return (
    <section
      id="about"
      className="flex flex-col-reverse pt-30 md:flex-row items-center justify-between px-6 py-16 max-w-6xl mx-auto"
    >
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-6xl font-bold mb-4">Más Sobre Mi</h1>
        <p className="text-gray-600 text-lg mb-4 w-9/12">
          Más allá del código, me considero una persona empática, curiosa y
          comprometida con el aprendizaje constante. Disfruto trabajar en
          equipo, escuchar diferentes perspectivas y encontrar soluciones que no
          solo funcionen, sino que también generen una buena experiencia para
          quienes las usan. Me adapto fácilmente a los cambios, valoro la
          comunicación honesta y siempre busco crecer, tanto a nivel técnico
          como personal. Para mí, la tecnología es una herramienta poderosa
          cuando se combina con la sensibilidad humana.
        </p>
      </motion.div>

      <div className="relative flex flex-col items-center mb-5 md:mb-0">
        <img
          src={profile}
          className="w-96 h-96 rounded-full border-4 border-emerald-500 float-animation"
          alt="Tu foto"
        />
      </div>
    </section>
  );
};
