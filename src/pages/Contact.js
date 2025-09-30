import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [org, setOrg] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus(null);

  if (!name || !email || !message) {
    setStatus({ type: "error", text: "Please fill Name, Email and Message." });
    return;
  }

  setSending(true);

  // Step 1: Show "Sending..." immediately
  setStatus({ type: "info", text: "Sending..." });

  // Save form data
  const formData = { name, email, phone, org, message };

  // Clear form immediately
  setName(""); setEmail(""); setPhone(""); setOrg(""); setMessage("");

  try {
    const res = await fetch("http://localhost:5000/api/contact/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    // Step 2: Wait 1 second, then show success/error
    setTimeout(() => {
      if (res.ok && data.success) {
        setStatus({ type: "success", text: "Message sent — we will contact you soon!" });

        // Step 3: Hide success message after 3 seconds
        setTimeout(() => setStatus(null), 3000);
      } else {
        setStatus({ type: "error", text: data.message || "Failed to send. Try again later." });
      }
      setSending(false);
    }, 1000); // 1 second "Sending..."
  } catch (err) {
    console.error(err);
    setTimeout(() => {
      setStatus({ type: "error", text: "Network error. Could not send message." });
      setSending(false);
    }, 1000);
  }
};


  return (
    <section className="px-4 sm:px-6 sm:py-4 max-w-6xl mx-auto">
      <h1 className="text-2xl sm:text-2xl font-bold text-deepNavy mb-2 text-center">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side - Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 rounded-xl shadow-xl space-y-4 border border-gray-100"
        >
          {status && (
            <div className={`p-2 rounded-md text-sm ${status.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
              {status.text}
            </div>
          )}

          <div className="flex items-center gap-2">
            <label className="w-24 text-gray-700 font-medium">Name  :</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}
              placeholder="Name" className="flex-1 border p-1 rounded-md focus:ring-2 focus:ring-primaryOrange focus:outline-none bg-gray-200" />
          </div>

          <div className="flex items-center gap-2">
            <label className="w-24 text-gray-700 font-medium">Email  :</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="Email" className="flex-1 border p-1 rounded-md focus:ring-2 focus:ring-primaryOrange focus:outline-none bg-gray-200" />
          </div>

          <div className="flex items-center gap-2">
            <label className="w-24 text-gray-700 font-medium">Phone :</label>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone" className="flex-1 border p-1 rounded-md focus:ring-2 focus:ring-primaryOrange focus:outline-none bg-gray-200" />
          </div>

          <div className="flex items-center gap-2">
            <label className="w-24 text-gray-700 font-medium">Org :</label>
            <input type="text" value={org} onChange={(e) => setOrg(e.target.value)}
              placeholder="Organization" className="flex-1 border p-1 rounded-md focus:ring-2 focus:ring-primaryOrange focus:outline-none bg-gray-200" />
          </div>

          <div className="flex items-start gap-2">
            <label className="w-24 text-gray-700 font-medium">Message :</label>
            <textarea rows={3} value={message} onChange={(e) => setMessage(e.target.value)}
              placeholder="Message" className="flex-1 border p-1 rounded-md focus:ring-2 focus:ring-primaryOrange focus:outline-none bg-gray-200"></textarea>
          </div>

          <div className="flex justify-center">
            <button type="submit" disabled={sending}
              className="bg-primaryOrange hover:bg-peach text-white px-4 py-1 rounded-md transition-all duration-300 font-semibold disabled:opacity-60 disabled:cursor-not-allowed">
              {sending ? "Sending..." : "Let’s start your project"}
            </button>
          </div>
        </form>

        {/* Right Side - Address & Map stays unchanged */}
        <div className="flex flex-col space-y-2">
          <div className="bg-white p-2 sm:p-4 rounded-xl shadow-xl border border-gray-100">
            <h2 className="text-xl font-semibold text-deepNavy mb-2 text-center">Our Office</h2>
            <p className="text-gray-700 leading-relaxed">
              <b> Sixfox Technology</b> <br />
              A -10, 74, A Block, Kalyani, West Bengal 741235, India
            </p>
          </div>

          <div className="w-full rounded-xl overflow-hidden shadow-xl border border-gray-100 h-72">
            <iframe title="Sixfox Technology Location"
              src="https://www.google.com/maps?q=Sixfox+Technology,+A-10,+74,+A+Block,+Kalyani,+West+Bengal+741235,+India&output=embed"
              width="100%" height="100%" className="border-0" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
