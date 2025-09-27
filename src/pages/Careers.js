export default function Careers() {
  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-6xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-deepNavy mb-6 text-center">
        Careers
      </h1>
      <p className="text-darkGray text-center mb-8">
        Join a fast-growing startup transforming industries.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="font-bold text-xl sm:text-2xl text-deepNavy mb-2">Frontend Developer</h2>
          <p className="text-darkGray mb-4">Work on web apps using React & Tailwind CSS.</p>
          <a href="mailto:careers@sixfox.com" className="bg-primaryOrange hover:bg-peach text-white px-4 py-2 rounded-md">
            Apply Now
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="font-bold text-xl sm:text-2xl text-deepNavy mb-2">Backend Developer</h2>
          <p className="text-darkGray mb-4">API development with Node.js, Express & MongoDB.</p>
          <a href="mailto:careers@sixfox.com" className="bg-primaryOrange hover:bg-peach text-white px-4 py-2 rounded-md">
            Apply Now
          </a>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-darkGray mb-2">Other roles coming soon. Stay tuned!</p>
      </div>
    </section>
  );
}
