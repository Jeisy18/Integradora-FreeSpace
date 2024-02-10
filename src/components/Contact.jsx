import React from "react";

const ContactPage = () => {
  return (
    <div className="p-5 mb-9">
      <div id="contact" class="flex justify-center items-center mx-auto">
        <div class="container mx-auto px-4 lg:px-20">
          <div class="dark:bg-neutral-900 bg-slate-200 w-full p-8 my-4 md:px-12 lg:w-full lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div>
              <h1 class="dark:text-white text-black font-bold uppercase text-5xl">
                Send us a <br /> <span className="text-amber-500">message</span>
              </h1>
            </div>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
              />
            </div>
            <div class="my-4">
              <textarea
                placeholder="Message*"
                class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div class="my-2 w-1/2 lg:w-1/4">
              <button
                class="uppercase text-sm font-bold tracking-wide bg-amber-500 text-gray-100 p-3 rounded-lg w-full 
                          focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
