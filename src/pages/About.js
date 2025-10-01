export default function About() {
  return (
    <section className="px-8 sm:px-8 py-6 sm:py-6 min-h-screen max-w-full mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-deepNavy mb-6">About Sixfox Technology</h1>
      <p className="text-darkGray mb-4">
        Our goal is to simplify complex operations for hospitals, schools, and enterprises with innovative technology.
      </p>
      <p className="text-darkGray mb-4">
        Sixfox Technology started as a startup focused on building smart solutions for critical industries. We combine startup agility with enterprise expertise to deliver reliable software products.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-deepNavy mt-8 mb-4">Founder & CTO</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="font-bold text-primaryOrange">Neel Palash Mondal & Aloke Chatterjee</p>
          <p className="text-darkGray">Founder</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="font-bold text-primaryOrange">Neel Palash Mondal</p>
          <p className="text-darkGray">CTO</p>
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-deepNavy mt-8 mb-4">Why Choose Sixfox</h2>
      <ul className="list-disc list-inside text-darkGray space-y-2">
        <li>Startup agility + enterprise expertise</li>
        <li>Tailored solutions for critical industries</li>
        <li>Full-cycle development & support</li>
      </ul>
    </section>
  );
}
