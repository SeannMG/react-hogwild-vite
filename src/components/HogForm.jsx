import { useState } from "react";

function HogForm({ onAddHog }) {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    weight: "",
    greased: false,
    "highest medal achieved": "",
    image: "",
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddHog({
      ...formData,
      weight: Number(formData.weight),
    });

    setFormData({
      name: "",
      specialty: "",
      weight: "",
      greased: false,
      "highest medal achieved": "",
      image: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Specialty:
        <input
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}
        />
      </label>

      <label>
        Weight:
        <input
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
      </label>

      <label>
        Greased?
        <input
          type="checkbox"
          name="greased"
          checked={formData.greased}
          onChange={handleChange}
        />
      </label>

      <label>
        Highest Medal Achieved:
        <input
          name="highest medal achieved"
          value={formData["highest medal achieved"]}
          onChange={handleChange}
        />
      </label>

      <label>
        Image:
        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;