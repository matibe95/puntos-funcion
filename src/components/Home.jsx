import { Link } from "react-router-dom";
import { MouseIcon, PageIcon } from "../assets/Icons";
import { homeReasons } from "../constants/HomeReasons";
import { Footer } from "./Footer";
import { ValuesTables } from "./ValuesTables";
import "./home.css";

export const Home = () => {
  return (
    <>
      <div className="main_container flex justify-between py-12 text-baseColor">
        <section className="main_text flex flex-col gap-8 text-left">
          <h1 className="text-4xl font-bold">
            Calcula Tus <span className="text-primary">Puntos de Función</span>{" "}
            Online
          </h1>
          <div className="text-lg">
            <p>¿Necesitas determinar la complejidad de tu software?</p>
            <p>
              Usa nuestra herramienta para realizar cálculos precisos de puntos
              de función en un instante.
            </p>
          </div>
          <section className="main_buttons_container flex text-center gap-4">
            <Link
              to={"/vpfsa"}
              className="bg-primary text-black py-3 boton-principal"
            >
              Comenzar
            </Link>
            {/* <button className="boton-secundario bg-secondary py-3 px-6">
              ¿Cómo funciona?
            </button> */}
          </section>
          <div className="flex gap-2 items-center">
            <MouseIcon />
            <p>Baja para ver más secciones</p>
          </div>
        </section>
        <section className="main_img flex items-center">
          <PageIcon />
        </section>
      </div>
      <section className="flex flex-col justify-center text-baseColor gap-12">
        <h2 className="text-xl font-semibold">¿Por qué usar Swift Points?</h2>
        <div className="main_reasons_container flex gap-12">
          {homeReasons.map((item) => {
            return (
              <ReasonCard
                key={item.id}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            );
          })}
        </div>
      </section>
      <section className="text-baseColor mt-16 flex flex-col gap-4">
        <h2 className="text-xl text-left font-semibold">
          Próxima implementación:{" "}
          <span className="text-primary">Documentación 📚</span>
        </h2>
      </section>
      {/* <section className="text-baseColor mt-16 flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Preguntas Frecuentes</h2>
        <p>Aquí las respuestas a algunas de las preguntas que puedas tener.</p>
      </section> */}
      {/* <ValuesTables /> */}
    </>
  );
};

const ReasonCard = ({ title, description, icon }) => {
  return (
    <article className="reason_card">
      <h3>{title}</h3>
      {icon}
      <p>{description}</p>
    </article>
  );
};
