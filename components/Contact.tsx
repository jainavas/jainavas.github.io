export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          I'm always open to new opportunities and collaborations.
          Feel free to reach out if you'd like to work together!
        </p>
        <div className="flex gap-6 justify-center flex-wrap">
          <a
            href="mailto:your.email@example.com"
            className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Email Me
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
