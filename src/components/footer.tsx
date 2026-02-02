export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 px-6 py-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4">
        <div className="flex gap-4">
          <a href="https://github.com/Tav0nes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 transition-colors hover:text-white">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/gustavoelhuaickaraujo/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 transition-colors hover:text-white">
            LinkedIn
          </a>  
          <a href="mailto:gustavoelhuaick@gmail.com"
          className="text-gray-400 transition-colors hover:text-white">
            Email
          </a>
        </div>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Gustavo Bastos. All rights reserved.
        </p>
      </div>
    </footer>
  );
}