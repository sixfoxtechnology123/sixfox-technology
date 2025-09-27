export default function Portfolio() {
  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-6xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-deepNavy mb-8 text-center">
        Portfolio / Case Studies
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Apollo Hospital ERP", "Greenfield School ERP", "TechCorp Enterprise ERP"].map((proj, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold text-deepNavy mb-2">{proj}</h2>
            <p className="text-darkGray mb-2">Problem → Solution → Outcome</p>
            <img
              src={`https://via.placeholder.com/300x200?text=${proj.split(" ")[0]}`}
              alt={proj}
              className="w-full rounded-md mt-2"
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href="/contact" className="bg-primaryOrange hover:bg-peach text-white px-6 py-3 rounded-md">
          See how we can build for you
        </a>
      </div>
    </section>
  );
}
