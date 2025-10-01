import { useState, useEffect } from "react";

export default function Project() {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [lightboxData, setLightboxData] = useState({ visible: false, images: [], current: 0 });
  const [formData, setFormData] = useState({
    name: "",
    problem: "",
    solution: "",
    outcome: "",
    images: [],
  });
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin") === "true");

  useEffect(() => {
    fetchProjects();

    // Listen for changes in localStorage (login/logout)
    const handleStorageChange = () => {
      setIsAdmin(localStorage.getItem("isAdmin") === "true");
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/projects");
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, images: e.target.files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("problem", formData.problem);
    data.append("solution", formData.solution);
    data.append("outcome", formData.outcome);

    for (let i = 0; i < formData.images.length; i++) {
      data.append("images", formData.images[i]);
    }

    try {
      const res = await fetch("http://localhost:5000/api/projects", {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error("Failed to save project");

      setShowModal(false);
      setFormData({ name: "", problem: "", solution: "", outcome: "", images: [] });
      fetchProjects();
    } catch (err) {
      console.error(err);
      alert("Error saving project");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/projects/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Delete failed");
      fetchProjects();
    } catch (err) {
      console.error(err);
      alert("Error deleting project");
    }
  };

  // Lightbox controls
  const openLightbox = (images, index) => {
    setLightboxData({ visible: true, images, current: index });
  };

  const closeLightbox = () => {
    setLightboxData({ visible: false, images: [], current: 0 });
  };

  const prevImage = () => {
    setLightboxData((prev) => ({
      ...prev,
      current: (prev.current - 1 + prev.images.length) % prev.images.length,
    }));
  };

  const nextImage = () => {
    setLightboxData((prev) => ({
      ...prev,
      current: (prev.current + 1) % prev.images.length,
    }));
  };

  return (
    <div className="px-4 sm:px-6 sm:py-4 min-h-screen max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Projects</h2>

      {/* Admin Add Button */}
      {isAdmin && (
        <div className="text-center mb-6">
          <button
            onClick={() => setShowModal(true)}
            className="bg-primaryOrange hover:bg-peach text-white px-6 py-2 rounded-md"
          >
            + Add Project
          </button>
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <div key={proj._id} className="border p-4 rounded-md shadow-md relative">
            <h3 className="text-xl font-semibold mb-2">{proj.name}</h3>
            <p><b>Problem:</b> {proj.problem}</p>
            <p><b>Solution:</b> {proj.solution}</p>
            <p><b>Outcome:</b> {proj.outcome}</p>

            {/* Images */}
            <div className="grid grid-cols-2 gap-2 mt-3">
              {proj.images?.map((img, idx) => (
                <img
                  key={idx}
                  src={`data:image/png;base64,${img}`}
                  alt="screenshot"
                  className="w-full h-24 object-cover rounded cursor-pointer"
                  onClick={() => openLightbox(proj.images, idx)}
                />
              ))}
            </div>

            {/* Delete button for admin */}
            {isAdmin && (
              <button
                onClick={() => handleDelete(proj._id)}
                className="absolute top-2 right-2 text-red-600 font-bold"
              >
                ✖
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 relative">
            <button
              className="absolute top-2 right-2 text-red-500 font-bold"
              onClick={() => setShowModal(false)}
            >
              ✖
            </button>
            <h3 className="text-xl font-bold mb-4 text-center">Add Project</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Project Name"
                className="border p-2 w-full"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <textarea
                placeholder="Problem"
                className="border p-2 w-full"
                value={formData.problem}
                onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                required
              />
              <textarea
                placeholder="Solution"
                className="border p-2 w-full"
                value={formData.solution}
                onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                required
              />
              <textarea
                placeholder="Outcome"
                className="border p-2 w-full"
                value={formData.outcome}
                onChange={(e) => setFormData({ ...formData, outcome: e.target.value })}
                required
              />
              <input
                type="file"
                name="images"
                multiple
                className="border p-2 w-full"
                onChange={handleImageChange}
                required
              />
              <button
                type="submit"
                className="bg-primaryOrange hover:bg-peach text-white px-4 py-2 rounded-md w-full"
              >
                Save Project
              </button>
            </form>
          </div>
        </div>
      )}

        {/* Lightbox Carousel */}
        {lightboxData.visible && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={closeLightbox}
          >
            {/* Previous Arrow */}
            <button
              className="absolute left-3 sm:left-5 md:left-10 text-white text-4xl sm:text-5xl font-bold bg-black bg-opacity-30 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center hover:bg-opacity-50 transition"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              ‹
            </button>

            <img
              src={`data:image/png;base64,${lightboxData.images[lightboxData.current]}`}
              alt="Preview"
              className="max-h-[90%] max-w-[90%] rounded-lg object-contain"
            />

            {/* Next Arrow */}
            <button
              className="absolute right-3 sm:right-5 md:right-10 text-white text-4xl sm:text-5xl font-bold bg-black bg-opacity-30 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center hover:bg-opacity-50 transition"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              ›
            </button>
          </div>
        )}

    </div>
  );
}
