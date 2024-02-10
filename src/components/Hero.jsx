import React from "react";
import Car from "../img/Car1.gif";
import Esta from "../img/estacionamiento.png";

function Hero() {
  return (
    <div>
      <section>
        <section class="sticky">
          <div class="max-w-lg px-4 sm:pt-24 pt-12 sm:pb-8 mx-auto text-left md:max-w-none md:text-center">
            <div class="text-center py-4 hidden sm:block">
              <button class="bg-white border border-[#E2E8F0] hover:bg-neutral-200 text-xs font-bold py-2.5 px-4 rounded-full inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#00acee"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
                &nbsp; &nbsp;<span> Follow on Twitter </span>
              </button>
            </div>

            <h1 class="font-extrabold leading-11 tracking-tight text-black dark:text-white text-center sm:leading-none text-6xl sm:text-9xl mt-12">
              <span class="inline md:block">Welcome to{""}</span>
              <span class="relative mt-2 bg-clip-text text-amber-500 dark:text-white md:inline-block">
                Free
                <span className="dark:text-amber-500 text-black">Space</span>
              </span>
            </h1>
          </div>

          <div class="block lg:max-w-lg px-4 lg:pb-24 mx-auto mb-10 lg:text-left md:max-w-none md:text-center">
            <div class="text-center py-4 space-x-4">
              <button class="mt-2 backdrop-blur-sm transition duration-500 ease-in-out bg-amber-500 dark:bg-black dark:hover:bg-amber-500 border border-[#E2E8F0] translate-y-1 text-white hover:bg-neutral-200 text-lg font-semibold py-3 px-6 rounded-3xl inline-flex items-center">
                <span> Build Your Custom App</span>
              </button>

              <button class="mt-2 backdrop-blur-sm transition duration-500 ease-in-out bg-white border border-[#E2E8F0] translate-y-1 text-[#16161d] hover:bg-neutral-200 text-lg font-semibold py-3 px-6 rounded-3xl inline-flex items-center">
                <span> Explore Apps</span>
              </button>
            </div>
          </div>
          <div class="container mx-auto">
            <div class="lg:w-1/2 md:w-3/4 text-center mx-auto mb-20">
              <div class="hidden py-8 mt-5 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
                <div class="text-left">
                  <h6 class="text-lg font-semibold text-gray-700 dark:text-white">
                    The lowest price
                  </h6>
                  <p class="mt-2 text-gray-500">Some text here</p>
                </div>
                <div class="text-left">
                  <h6 class="text-lg font-semibold text-gray-700 dark:text-white">
                    The fastest on the market
                  </h6>
                  <p class="mt-2 text-gray-500">Some text here</p>
                </div>
                <div class="text-left">
                  <h6 class="text-lg font-semibold text-gray-700 dark:text-white">
                    The most loved
                  </h6>
                  <p class="mt-2 text-gray-500">Some text here</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <div class="text-left">
        <div class="sm:px-28">
          <section class="relative flex items-center w-full">
            <div class="relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
              <div class="relative flex-col items-start m-auto align-middle">
                <div class="grid grid-cols-1 md:gap-6 lg:grid-cols-2 lg:gap-24">
                  <div class="relative items-center gap-12 m-auto lg:inline-flex sm:order-first">
                    <div class="max-w-xl text-center lg:text-left">
                      <div>
                        <p class="text-3xl font-semibold tracking-tight text-[#201515] dark:text-white sm:text-5xl">
                          <span className="dark:text-amber-600">Space</span>{" "}
                          Management Software
                        </p>
                        <p class="max-w-xl mt-4 text-base tracking-tight text-gray-600 dark:text-white">
                          Use this paragraph to share information about your
                          company or products. Make it engaging and interesting,
                          and showcase your brand's personality. Thanks for
                          visiting our website!
                        </p>
                      </div>
                      <div className="flex justify-center gap-3 mt-10 mb-10 lg:justify-start">
                        <a
                          href="#aboutus"
                          className="p-3 rounded-2xl text-black border border-black hover:border-amber-500 dark:text-white dark:border-white dark:hover:border-amber-500 inline-flex items-center justify-center text-sm font-semibold duration-200 hover:text-amber-500"
                        >
                          <span className="text-2xl"> Read more &nbsp; → </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="order-first block w-full md:mt-12 aspect-square lg:mt-0">
                    <img
                      class="object-cover rounded-3xl object-center w-full mx-auto lg:ml-auto "
                      alt="hero"
                      src={Esta}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Hero;
