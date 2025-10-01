import { Link } from "react-router-dom";  

export default function Home() {
  return (
    <section className="px-4 sm:px-6 py-6 sm:py-6 min-h-screen max-w-full mx-auto">

      {/* Hero Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-12 text-center mb-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deepNavy mb-4">
          Transforming Healthcare, Education, and Enterprise with Smart Software Solutions
        </h1>
        <Link to="/contact">
          <button className="bg-primaryOrange hover:bg-peach text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md mt-4">
            Request a Free Consultation
          </button>
        </Link>
      </div>

      {/* About Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-6 text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-deepNavy mb-2">About Sixfox</h2>
        <p className="text-darkGray mb-4">
          Sixfox Technology is a startup software company building advanced systems for hospitals, schools, and enterprises while empowering brands with digital marketing.
        </p>
        <a href="/about" className="text-primaryOrange hover:text-peach underline">Learn More</a>
      </div>

      {/* Our Solutions Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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


      {/* Testimonials / Client Logos */}
      <div className="bg-gray-50 rounded-xl shadow-lg p-6 mb-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-deepNavy mb-6">Trusted by Hospitals, Schools & Corporations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          <div className="bg-white p-4 rounded-lg shadow">“Sixfox transformed our hospital operations efficiently.”</div>
          <div className="bg-white p-4 rounded-lg shadow">“Our school admin processes are now fully digital.”</div>
          <div className="bg-white p-4 rounded-lg shadow">“Enterprise management made easy with Sixfox solutions.”</div>
        </div>
      </div>

      {/* 7. Call-to-Action Strip */}
      <div className="bg-primaryOrange text-white rounded-xl shadow-lg p-6 mb-2 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to take your organization digital? Let’s talk.</h2>
        <Link to="/contact">
          <button className="bg-white text-primaryOrange font-bold px-6 py-2 rounded-md hover:bg-gray-100 transition">
            Contact Us
          </button>
        </Link>
      </div>

    </section>
  );
}
