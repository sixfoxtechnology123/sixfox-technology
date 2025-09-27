export default function Home() {
  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-12 text-center mb-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deepNavy mb-4">
          Transforming Healthcare, Education, and Enterprise with Smart Software Solutions
        </h1>
        <button className="bg-primaryOrange hover:bg-peach text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md mt-4">
          Request a Free Consultation
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-deepNavy mb-2">About Sixfox</h2>
        <p className="text-darkGray mb-4">
          Sixfox Technology is a startup software company building advanced systems for hospitals, schools, and enterprises while empowering brands with digital marketing.
        </p>
        <a href="/about" className="text-primaryOrange hover:text-peach underline">Learn More</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-deepNavy mb-2">Hospital Management System</h3>
          <p className="text-darkGray mb-2">Manage OPD, IPD, Billing, Inventory, Labs...</p>
          <a href="/services" className="text-primaryOrange hover:text-peach underline">Explore</a>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-deepNavy mb-2">School Management System</h3>
          <p className="text-darkGray mb-2">Admissions, Academics, Attendance, Exams...</p>
          <a href="/services" className="text-primaryOrange hover:text-peach underline">Explore</a>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-deepNavy mb-2">Enterprise Management System</h3>
          <p className="text-darkGray mb-2">HR, Payroll, Projects, Finance...</p>
          <a href="/services" className="text-primaryOrange hover:text-peach underline">Explore</a>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-deepNavy mb-2">Digital Marketing</h3>
          <p className="text-darkGray mb-2">SEO, Social Media, PPC, Branding...</p>
          <a href="/services" className="text-primaryOrange hover:text-peach underline">Explore</a>
        </div>
      </div>
    </section>
  );
}
