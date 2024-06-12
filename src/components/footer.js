import React from "react";

const Footer = () => {
  return (
    <footer class="bg-gray-800 py-4">
    <div class="container mx-auto flex justify-center items-center">
      <p class="text-white text-center">
        Copyright &copy; <script>document.write(new Date().getFullYear());</script>
        <a href="#" target="_blank" class="underline ml-1 uppercase">pradul p</a>
      </p>
    </div>
  </footer>
  );
};

export default Footer;