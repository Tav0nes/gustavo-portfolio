export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 px-6 py-6">
      <div className="mx-auto max-w-5xl text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Gustavo Bastos. All rights reserved.
      </div>
    </footer>
  );
}