import profile from "../assets/Foto.jpg";
import "../componets/Hero.css";

export const Hero = () => {
  return (
    <section id="hero" className="flex flex-col-reverse pt-30 md:flex-row items-center justify-between px-6 py-16 max-w-6xl mx-auto">
      <div className="flex-1 hero-fade">
        <h1 className="text-5xl font-bold mb-4  ">
          ¡Hola! <br /> Soy{" "}
          <span className="text-emerald-500">Sebastian Palacio</span>
        </h1>
        <p className="text-gray-600 text-lg mb-4 w-9/12">
          Soy un desarrollador con experiencia en la creación de interfaces
          modernas, accesibles y eficientes utilizando tecnologías como React,
          TypeScript y Tailwind CSS. Me interesa construir soluciones que
          combinen funcionalidad y estética, manteniendo siempre un enfoque
          centrado en el usuario. Además, tengo conocimientos en bases de datos
          relacionales como PostgreSQL, lo que me permite integrar y manejar
          datos de manera efectiva en aplicaciones web.
        </p>
        <p className="text-sm text-gray-500 pt-5">Contactame 📫</p>
        <a href="mailto:sebastianpalaciohernandez8@gmail.com?subject=Hola&body=Quiero contactarte" className="text-blue-600 underline">
          sebastianpalaciohernandez8@gmail.com
        </a>
      </div>

      <div className="relative flex flex-col items-center mb-5 md:mb-0 hero-fade-delay">
        <img
          src={profile}
          className="w-96 h-96 rounded-full border-4 border-emerald-500"
          alt="Tu foto"
        />
        <div className="absolute bottom-0 w-64 translate-y-1/2 bg-white shadow-md px-4 py-2 rounded-xl text-center font-medium">
          Frontend Development
          <br />
          UX/UI designer
        </div>
      </div>
    </section>
  );
};
