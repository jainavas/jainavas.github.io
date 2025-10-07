export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
