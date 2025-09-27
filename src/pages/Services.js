export default function Services() {
  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-6xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-deepNavy mb-8 text-center">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Hospital Management System */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-deepNavy mb-2">
            Hospital Management System
          </h2>
          <p className="text-darkGray mb-4">
            Comprehensive platform to manage OPD, IPD, billing, inventory, labs, and more.
          </p>
          <ul className="text-darkGray list-disc list-inside mb-4">
            <li>Patient registration</li>
            <li>OPD/IPD management</li>
            <li>Emergency handling</li>
            <li>Billing & Pharmacy</li>
            <li>Reports & Analytics</li>
          </ul>
          <button className="bg-primaryOrange hover:bg-peach text-white px-4 py-2 rounded-md mt-auto">
            Request Demo
          </button>
        </div>

        {/* School Management System */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-deepNavy mb-2">
            School Management System
          </h2>
          <p className="text-darkGray mb-4">
            Smart ERP for admissions, academics, attendance, exams, and parent communication.
          </p>
          <ul className="text-darkGray list-disc list-inside mb-4">
            <li>Admission & Attendance</li>
            <li>Fee & Examination</li>
            <li>Parent Portal</li>
          </ul>
          <button className="bg-primaryOrange hover:bg-peach text-white px-4 py-2 rounded-md mt-auto">
            Explore Solutions
          </button>
        </div>

        {/* Enterprise Management */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-deepNavy mb-2">
            Enterprise Management
          </h2>
          <p className="text-darkGray mb-4">
            End-to-end ERP for corporate operations: HR, Payroll, Projects, Finance.
          </p>
          <ul className="text-darkGray list-disc list-inside mb-4">
            <li>HRMS & Payroll</li>
            <li>Document Management</li>
            <li>Analytics & Reports</li>
          </ul>
          <button className="bg-primaryOrange hover:bg-peach text-white px-4 py-2 rounded-md mt-auto">
            Talk to Us
          </button>
        </div>

        {/* Digital Marketing */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-deepNavy mb-2">
            Digital Marketing
          </h2>
          <p className="text-darkGray mb-4">
            Helping your brand grow online with targeted strategies.
          </p>
          <ul className="text-darkGray list-disc list-inside mb-4">
            <li>SEO</li>
            <li>Social Media</li>
            <li>PPC & Branding</li>
          </ul>
          <button className="bg-primaryOrange hover:bg-peach text-white px-4 py-2 rounded-md mt-auto">
            Grow With Us
          </button>
        </div>
      </div>
    </section>
  );
}
