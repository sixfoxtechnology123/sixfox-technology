import { useState, useEffect } from "react";

export default function Careers() {
  const [jobs, setJobs] = useState([]);
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newJobTitle, setNewJobTitle] = useState("");
  const [newJobDesc, setNewJobDesc] = useState("");

  useEffect(() => {
    fetchJobs();
    setIsAdmin(localStorage.getItem("isAdmin") === "true");
  }, []);

  const fetchJobs = async () => {
    const res = await fetch("http://localhost:5000/api/careers/jobs");
    const data = await res.json();
    if (data.success) setJobs(data.jobs);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!subscriberEmail) return;

    setError(null);
    setLoading(true);
    setSubscribed(false);

    try {
      const res = await fetch("http://localhost:5000/api/careers/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: subscriberEmail }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong");
        setTimeout(() => setError(null), 2000);
      } else if (data.alreadyExists) {
        setError("Email already subscribed");
        setTimeout(() => setError(null), 2000);
      } else {
        setSubscribed(true);
        setTimeout(() => setSubscribed(false), 2000);
        setSubscriberEmail("");
      }
    } catch (err) {
      setError("Network error. Try again later.");
      setTimeout(() => setError(null), 2000);
    } finally {
      setLoading(false);
    }
  };

  const handleAddJob = async () => {
    if (!newJobTitle || !newJobDesc) return alert("Title & Description required");

    // Temporary job with tempId for frontend
    const tempJob = { title: newJobTitle, description: newJobDesc, tempId: Date.now().toString() };
    setJobs([...jobs, tempJob]);
    alert("Job added successfully!");
    setNewJobTitle("");
    setNewJobDesc("");
    setShowModal(false);

    // Save to backend
    try {
      const res = await fetch("http://localhost:5000/api/careers/addJob", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newJobTitle, description: newJobDesc }),
      });
      const data = await res.json();

      if (!data.success) {
        alert("Failed to save job in database. Please try again.");
        setJobs(prev => prev.filter(job => job.tempId !== tempJob.tempId));
      } else {
        // Replace tempJob with real DB job
        setJobs(prev =>
          prev.map(job => (job.tempId === tempJob.tempId ? data.job : job))
        );
      }
    } catch (err) {
      console.error("Add Job Error:", err);
      alert("Network error while saving job.");
      setJobs(prev => prev.filter(job => job.tempId !== tempJob.tempId));
    }
  };

  const handleDeleteJob = async (id) => {
    if (!id) return; // temp jobs cannot be deleted
    if (!window.confirm("Are you sure to delete this job?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/careers/deleteJob/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) setJobs(jobs.filter(job => job._id !== id));
      alert(data.message);
    } catch (err) {
      console.error(err);
      alert("Failed to delete job.");
    }
  };

  const handleNotifySubscribers = async (jobId) => {
    alert("Notification is being sent to subscribers...");

    try {
      const res = await fetch("http://localhost:5000/api/careers/notifySubscribers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobId }),
      });
      const data = await res.json();
      if (!data.success) alert("Failed to send notifications. Please try again.");
    } catch (err) {
      console.error("Notify Error:", err);
      alert("Network error while sending notification.");
    }
  };

  return (
    <section className="px-4 sm:px-6 py-6 max-w-full min-h-screen mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-deepNavy mb-3 text-center">Careers</h1>
      <p className="text-darkGray text-center mb-3">Join a fast-growing startup transforming industries.</p>

      {isAdmin && (
        <div className="text-center mb-6">
          <button
            onClick={() => setShowModal(true)}
            className="bg-primaryOrange hover:bg-peach text-white px-4 py-1 rounded-md"
          >
            Add New Job Role
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map(job => (
          <div key={job._id || job.tempId} className="bg-white p-6 rounded-lg shadow-md text-center relative">
            <h2 className="font-bold text-xl sm:text-2xl text-deepNavy mb-2">{job.title}</h2>
            <p className="text-darkGray mb-4">{job.description}</p>
            <a href="mailto:sixfoxtechnology12@gmail.com">
              <button className="bg-primaryOrange hover:bg-peach text-white px-4 py-0 rounded-md">
                Apply Now
              </button>
            </a>

            {isAdmin && job._id && (
              <>
                <button
                  onClick={() => handleDeleteJob(job._id)}
                  className="absolute top-2 right-2 text-red-600 font-bold text-xl hover:text-red-800"
                  title="Delete Job"
                >
                  ✖
                </button>

                <button
                  onClick={() => handleNotifySubscribers(job._id)}
                  className="mt-2 ml-3 bg-green-500 hover:bg-green-600 text-white px-2 py-0 rounded"
                >
                  Send Notification
                </button>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-darkGray mb-2">Other roles coming soon. Stay tuned!</p>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-4">
          <input
            type="email"
            placeholder="Enter your email to subscribe"
            value={subscriberEmail}
            onChange={(e) => setSubscriberEmail(e.target.value)}
            className="border p-2 rounded-md w-full sm:w-auto"
            required
          />
          <button
            type="submit"
            className="bg-primaryOrange hover:bg-peach text-white px-4 py-1 rounded-md"
            disabled={loading}
          >
            {loading ? "Sending..." : "Subscribe"}
          </button>
        </form>

        {subscribed && <p className="text-green-600 mt-2">Subscribed! We will notify you about new roles.</p>}
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
            <h2 className="text-xl font-bold mb-4">Add New Job Role</h2>
            <input
              type="text"
              placeholder="Job Title"
              value={newJobTitle}
              onChange={(e) => setNewJobTitle(e.target.value)}
              className="border p-2 rounded w-full mb-2"
            />
            <input
              type="text"
              placeholder="Job Description"
              value={newJobDesc}
              onChange={(e) => setNewJobDesc(e.target.value)}
              className="border p-2 rounded w-full mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAddJob}
                className="px-4 py-2 rounded bg-primaryOrange text-white hover:bg-peach"
              >
                Add Job
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
