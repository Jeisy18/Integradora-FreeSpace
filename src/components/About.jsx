import React from "react";
import esta from "../img/esta.webp";
import Car from "../img/Car.gif";

function AboutPage() {
  return (
    <div
      id="aboutus"
      className="container lg:w-5/6 w-full mx-auto lg:mt-24 lg:mb-24 lg:px-20"
    >
      <h1 className="text-black dark:text-white text-6xl text-center mb-10">
        Sobre {""}
        <span className="dark:text-amber-500">nosotros</span>
      </h1>
      <div className="text-black dark:text-white text-left p-10">
        <div className="container gap-3 grid grid-cols-1 lg:grid-cols-2 ">
          <img className="w-full mx-auto rounded-xl" src={Car} />
          <p className="text-lg italic items-center p-10 rounded-lg">
            <h1 className="text-black dark:text-white text-xl mb-3 font-bold not-italic">
              Nuestra historia
            </h1>
            En FreeSpace, creemos que encontrar estacionamiento no debería ser
            una tarea complicada. Fundada en el año 20XX, nuestra empresa nació
            de la idea de simplificar la experiencia de estacionamiento para
            todos. Desde entonces, hemos estado comprometidos en proporcionar
            soluciones innovadoras que faciliten la vida diaria.
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 mt-3 gap-3">
          <div className="bg-slate-200 dark:bg-neutral-800 p-5 rounded-xl flex justify-center items-center flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="dark:stroke-amber-500 justify-center icon icon-tabler icon-tabler-eye"
              width="96"
              height="96"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#0b0907"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
              <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
            </svg>
            <span className="text-black dark:text-amber-500 font-semibold">
              Vision
            </span>
            <p className="text-black dark:text-white p-5">
              Ser la plataforma líder en la transformación de la experiencia de
              estacionamiento, brindando libertad y comodidad a conductores de
              todo el mundo.
            </p>
          </div>
          <div className="bg-slate-200 dark:bg-neutral-800 p-5 rounded-xl flex justify-center items-center flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="dark:stroke-amber-500 justify-center icon icon-tabler icon-tabler-target-arrow"
              width="96"
              height="96"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#0b0907"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 7a5 5 0 1 0 5 5" />
              <path d="M13 3.055a9 9 0 1 0 7.941 7.945" />
              <path d="M15 6v3h3l3 -3h-3v-3z" />
              <path d="M15 9l-3 3" />
            </svg>
            <span className="text-black dark:text-amber-500 font-semibold">
              Mision
            </span>
            <p className="text-black dark:text-white p-5">
              Facilitar el acceso a estacionamiento conveniente y seguro,
              utilizando la tecnología para mejorar la movilidad urbana.
            </p>
          </div>
        </div>
        <div className="bg-slate-200 dark:bg-neutral-800 rounded-xl p-5 mt-5 mb-5">
          <p className="text-lg italic">
            <h1 className="text-black dark:text-white text-3xl mb-3 mt-3 font-bold not-italic">
              Valores de Free<span className="dark:text-amber-500">Space</span>
            </h1>
            En FreeSpace, nuestros valores son la base de todo lo que hacemos.
            Estamos comprometidos con:
          </p>
          <div className="container mx-auto grid lg:grid-cols-3 mt-16 gap-3">
            <div className="bg-white dark:bg-black p-3 rounded-xl flex justify-center items-center flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="dark:stroke-amber-500 icon icon-tabler icon-tabler-accessible"
                width="96"
                height="96"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#0b0907"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1" />
                <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
              </svg>
              <span className="text-black dark:text-amber-500 font-semibold">
                Accesibilidad
              </span>
              <p className="text-black dark:text-white p-5">
                Queremos que encontrar estacionamiento sea accesible para todos,
                en cualquier momento y lugar.
              </p>
            </div>
            <div className="bg-white dark:bg-black p-3 rounded-xl flex justify-center items-center flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="dark:stroke-amber-500 icon icon-tabler icon-tabler-bulb"
                width="96"
                height="96"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#0b0907"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
                <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
                <path d="M9.7 17l4.6 0" />
              </svg>
              <span className="text-black dark:text-amber-500 font-semibold">
                Innovación
              </span>
              <p className="text-black dark:text-white p-5">
                Buscamos constantemente nuevas formas de mejorar y simplificar
                la experiencia de estacionamiento.
              </p>
            </div>
            <div className="bg-white dark:bg-black p-3 rounded-xl flex justify-center items-center flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="dark:stroke-amber-500 icon icon-tabler icon-tabler-shield-check"
                width="96"
                height="96"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#0b0907"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" />
                <path d="M15 19l2 2l4 -4" />
              </svg>
              <span className="text-black dark:text-amber-500 font-semibold">
                Confiabilidad
              </span>
              <p className="text-black dark:text-white p-5">
                Nos esforzamos por ofrecer servicios de alta calidad y confianza
                a nuestros usuarios..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
