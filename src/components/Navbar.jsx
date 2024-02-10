import { useEffect, useState } from "react";
import LogoFreeSpace from "../img/free-space.png";
import LogoFreeSpaceWhite from "../img/free-space-white.png";

function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <nav className="z-10 w-full absolute">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
          <input
            aria-hidden="true"
            type="checkbox"
            name="toggle_nav"
            id="toggle_nav"
            className="hidden peer"
          />
          <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
            <a
              href="#home"
              aria-label="logo"
              className="flex space-x-2 items-center"
            >
              <div className="w-10">
                <img
                  className="w-full"
                  src={theme === "light" ? LogoFreeSpace : LogoFreeSpaceWhite}
                  alt="LogoFreeSpace"
                />
              </div>
              <span className="text-3xl font-bold text-amber-500 dark:text-white">
                Free
                <span className="dark:text-amber-500 text-slate-900">
                  Space
                </span>
              </span>
            </a>

            <div className="relative flex items-center lg:hidden max-h-10">
              <label
                role="button"
                for="toggle_nav"
                aria-label="humburger"
                id="hamburger"
                className="relative  p-6 -mr-6"
              >
                <div
                  aria-hidden="true"
                  id="line"
                  className="m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  id="line2"
                  className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                ></div>
              </label>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70"
          ></div>
          <div
            className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
                                lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                                peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none 
                                dark:shadow-none dark:bg-black dark:border-black"
          >
            <div className="text-black dark:text-white lg:pr-4 lg:w-auto w-full lg:pt-0">
              <ul className="tracking-wide font-medium lg:text-lg flex-col flex justify-center items-center lg:flex-row gap-6 lg:gap-0">
                <li>
                  <a
                    href="#aboutus"
                    className="hover:text-amber-500 block md:px-4 transition hover:text-primary"
                  >
                    <span>About us</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-amber-500 block md:px-4 transition hover:text-primary"
                  >
                    <span>Contact</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="hover:text-amber-500 block md:px-4 transition hover:text-primary"
                  >
                    <span>Testimonials</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="hover:text-amber-500 block md:px-4 transition hover:text-primary"
                  >
                    <span>Blog</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex justify-center items-center mt-12 lg:mt-0">
              <a
                href="#"
                class="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-amber-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-sm font-semibold text-white">
                  Get Started
                </span>
              </a>
            </div>
            <div className="flex justify-center items-center m-2">
              <button
                onClick={handleChangeTheme}
                class="text-slate-500 hover:text-amber-500 rounded-full transition-colors focus:ring-2 focus:ring-offset-1 focus:ring-slate-200"
              >
                {theme === "light" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-8 h-8"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-8 h-8"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
