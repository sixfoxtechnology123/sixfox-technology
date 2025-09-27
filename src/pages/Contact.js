export default function Contact() {
  return (
    <section className="px-4 sm:px-6 sm:py-4 max-w-6xl mx-auto">
      <h1 className="text-2xl sm:text-2xl font-bold text-deepNavy mb-2  text-center">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side - Contact Form */}
        <form className="bg-white p-6 sm:p-8 rounded-xl shadow-xl space-y-4 border border-gray-100">
            {/* Name */}
            <div className="flex items-center gap-2">
              <label className="w-24 text-gray-700 font-medium">Name  :</label>
              <input
                type="text"
                placeholder="Name"
                className="flex-1 border border-2-solid p-1 rounded-md focus:ring-2 focus:ring-primaryOrange focus:outline-none bg-gray-200"
              />
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <label className="w-24 text-gray-700 font-medium">Email  :</label>
              <input
                type="email"
                placeholder="Email"
                className="flex-1 border border-lightGray p-1 rounded-md focus:ring-2 focus:ring-primaryOrange focus:outline-none bg-gray-200"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2">
              <label className="w-24 text-gray-700 font-medium">Phone :</label>
              <input
                type="text"
                placeholder="Phone"
                className="flex-1 border border-lightGray p-1 rounded-md focus:ring-2 focus:ring-primaryOrange focus:outline-none bg-gray-200"
              />
            </div>

            {/* Organization */}
            <div className="flex items-center gap-2">
              <label className="w-24 text-gray-700 font-medium">Org :</label>
              <input
                type="text"
                placeholder="Organization"
                className="flex-1 border border-lightGray p-1 rounded-md focus:ring-2 focus:ring-primaryOrange focus:outline-none bg-gray-200"
              />
            </div>

            {/* Message */}
            <div className="flex items-start gap-2">
              <label className="w-24 text-gray-700 font-medium">Message :</label>
              <textarea
                rows={3}
                placeholder="Message"
                className="flex-1 border border-lightGray p-1 rounded-md focus:ring-2 focus:ring-primaryOrange focus:outline-none bg-gray-200"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-primaryOrange hover:bg-peach text-white px-4 py-1 rounded-md transition-all duration-300 font-semibold"
              >
               Submit
              </button>
            </div>
          </form>


        {/* Right Side - Address & Map */}
        <div className="flex flex-col space-y-2">
          <div className="bg-white p-2 sm:p-4 rounded-xl shadow-xl border border-gray-100">
            <h2 className="text-xl font-semibold text-deepNavy mb-2 text-center">Our Office</h2>
            <p className="text-gray-700 leading-relaxed">
             <b> Sixfox Technology</b> <br />
              A -10, 74, A Block, Kalyani, West Bengal 741235, India
            </p>
          </div>

          <div className="w-full rounded-xl overflow-hidden shadow-xl border border-gray-100 h-72">
            <iframe
              title="Sixfox Technology Location"
              src="https://www.google.com/maps?q=Sixfox+Technology,+A-10,+74,+A+Block,+Kalyani,+West+Bengal+741235,+India&output=embed"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
