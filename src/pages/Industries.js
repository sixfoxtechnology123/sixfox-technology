export default function Industries() {
  return (
    <section className="px-4 sm:px-6 py-6 sm:py-6 min-h-screen max-w-full mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-deepNavy mb-8 text-center">
        Industries We Serve
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-deepNavy mb-2">Healthcare</h2>
          <p className="text-darkGray mb-2">Why digital systems matter →</p>
          <a href="/services" className="text-primaryOrange hover:text-peach underline">
            Hospital Management System
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-deepNavy mb-2">Education</h2>
          <p className="text-darkGray mb-2">Benefits of digitizing schools →</p>
          <a href="/services" className="text-primaryOrange hover:text-peach underline">
            School Management System
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-deepNavy mb-2">Corporate</h2>
          <p className="text-darkGray mb-2">Scaling businesses with ERP →</p>
          <a href="/services" className="text-primaryOrange hover:text-peach underline">
            Enterprise Management System
          </a>
        </div>
      </div>
    </section>
  );
}
