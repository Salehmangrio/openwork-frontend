import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentClient } from "../../store/slices/clientsSlice.js";

const PostJob = () => {
  const currentClient = useSelector(selectCurrentClient);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    skills: "",
    location: "",
    salary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentClient) return;

    const jobData = {
      id: Date.now(),
      clientId: currentClient.id,
      clientName: currentClient.name,
      title: formData.title,
      description: formData.description,
      skills: formData.skills.split(",").map((s) => s.trim()),
      location: formData.location,
      salary: formData.salary,
      posted: "just now",
    };

    console.log("Job Posted:", jobData);
    // dispatch(addJob(jobData));

    setFormData({
      title: "",
      description: "",
      skills: "",
      location: "",
      salary: "",
    });
  };

  if (!currentClient) {
    return (
      <div className="w-full flex justify-center items-center py-20">
        <p className="text-gray-500 text-xl">Loading Client Data...</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">
          Post a Job as {currentClient.name}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Job Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Frontend Developer for E-Commerce App"
          />

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Need a frontend developer with React and TailwindCSS..."
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <InputField
            label="Skills (comma separated)"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="React, TailwindCSS, JavaScript"
          />

          <InputField
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Remote / On-site / City, Country"
          />

          <InputField
            label="Salary Range"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="$3,000 - $5,000"
          />

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200"
          >
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

// Reusable Input Component
const InputField = ({ label, name, value, onChange, placeholder, type = "text" }) => (
  <div>
    <label className="block text-gray-700 font-medium mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>
);

export default PostJob;
