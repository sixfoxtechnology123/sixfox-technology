export default function Contact() {
  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-deepNavy mb-8 text-center">Contact Us</h1>

      <form className="bg-white p-6 sm:p-8 rounded-lg shadow-md space-y-4">
        <input type="text" placeholder="Name" className="w-full border border-lightGray p-2 sm:p-3 rounded-md" />
        <input type="email" placeholder="Email" className="w-full border border-lightGray p-2 sm:p-3 rounded-md" />
        <input type="text" placeholder="Phone" className="w-full border border-lightGray p-2 sm:p-3 rounded-md" />
        <input type="text" placeholder="Organization" className="w-full border border-lightGray p-2 sm:p-3 rounded-md" />
        <textarea placeholder="Message" className="w-full border border-lightGray p-2 sm:p-3 rounded-md"></textarea>
        <button type="submit" className="bg-primaryOrange hover:bg-peach text-white px-6 py-3 rounded-md w-full sm:w-auto">
          Let's start your project
        </button>
      </form>
    </section>
  );
}
