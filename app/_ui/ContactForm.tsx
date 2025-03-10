"use client";
import React from "react";

export default function ContactForm() {
  return (
    <form className="w-full flex flex-col gap-5 bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
      <h3 className="font-semibold text-2xl md:text-3xl text-gray-900 border-b border-gray-300 pb-2">
        Bizə yazın
      </h3>
      <div>
        <label htmlFor="username" className="block mb-1 text-base font-medium text-gray-800">
          Adınız
        </label>
        <input type="text" id="username" className="bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 text-base rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-3" placeholder="Bonnie Green" />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1 text-base font-medium text-gray-800">
          Email
        </label>
        <input type="email" id="email" className="bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 text-base rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-3" placeholder="bonnie.green@example.com" />
      </div>
      <div>
        <label htmlFor="message" className="block mb-1 text-base font-medium text-gray-800">
          Mesajınız
        </label>
        <textarea id="message" className="bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 text-base rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-3 h-28" placeholder="Write your message here..."></textarea>
      </div>
      <button type="submit" className="w-full py-3 bg-purple-800 text-white text-lg font-medium rounded-lg shadow-md hover:bg-[#21304F] focus:ring-4 focus:ring-purple-300 transition-all duration-300">
        Göndər
      </button>
    </form>
  );
}
