import { Link } from "react-router-dom";  

export default function Services() {
  return (
    <section className="px-4 sm:px-6 py-6 sm:py-6 min-h-screen max-w-full mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-deepNavy mb-8 text-center">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Hospital Management System */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-deepNavy mb-2">
            Hospital Management System
          </h2>
          <p className="text-darkGray mb-2">
            Comprehensive platform to manage OPD, IPD, billing, inventory, labs, and more.
          </p>
          <ul className="text-darkGray list-disc list-inside mb-2">
            <li>Patient registration</li>
            <li>OPD/IPD management</li>
            <li>Emergency handling</li>
            <li>Billing & Pharmacy</li>
            <li>Reports & Analytics</li>
          </ul>
         <Link to="/contact">
          <button className="bg-primaryOrange hover:bg-peach text-white px-4 py-1 rounded-md mt-auto">
            Request Demo
          </button>
         </Link>
        </div>

        {/* School Management System */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-deepNavy mb-2">
            School Management System
          </h2>
          <p className="text-darkGray mb-2">
            Smart ERP for admissions, academics, attendance, exams, and parent communication.
          </p>
          <ul className="text-darkGray list-disc list-inside mb-2">
            <li>Admission & Attendance</li>
            <li>Fee & Examination</li>
            <li>Parent Portal</li>
          </ul>
          <Link to="/contact">
          <button className="bg-primaryOrange hover:bg-peach text-white px-4 py-1 rounded-md mt-auto">
            Explore Solutions
          </button>
          </Link>
        </div>

        {/* Enterprise Management */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-deepNavy mb-2">
            Enterprise Management
          </h2>
          <p className="text-darkGray mb-2">
            End-to-end ERP for corporate operations: HR, Payroll, Projects, Finance.
          </p>
          <ul className="text-darkGray list-disc list-inside mb-2">
            <li>HRMS & Payroll</li>
            <li>Document Management</li>
            <li>Analytics & Reports</li>
          </ul>
          <Link to="/contact">
          <button className="bg-primaryOrange hover:bg-peach text-white px-4 py-1 rounded-md mt-auto">
            Talk to Us
          </button>
          </Link>
        </div>

        {/* Digital Marketing */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-deepNavy mb-2">
            Digital Marketing
          </h2>
          <p className="text-darkGray mb-2">
            Helping your brand grow online with targeted strategies.
          </p>
          <ul className="text-darkGray list-disc list-inside mb-2">
            <li>SEO</li>
            <li>Social Media</li>
            <li>PPC & Branding</li>
          </ul>
         <Link to="/contact">
          <button className="bg-primaryOrange hover:bg-peach text-white px-4 py-1 rounded-md mt-auto">
            Grow With Us
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
