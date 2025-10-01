export default function Blog() {
  const posts = [
    { title: "5 Ways Hospital ERPs Improve Patient Care", category: "Healthcare Tech" },
    { title: "Why Every School Needs a Smart ERP in 2025", category: "EdTech" },
    { title: "Digital Marketing Trends for Startups", category: "Digital Marketing" },
  ];

  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 min-h-screen max-w-6xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-deepNavy mb-8 text-center">Blog / Insights</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold text-deepNavy mb-2">{post.title}</h2>
            <p className="text-darkGray text-sm">{post.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
