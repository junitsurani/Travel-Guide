import React, { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";

export const AddPlaceForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    type: "hotel", // default value
    imageUrl: "",
  });

  // Handle form field change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically send the data to the server
    console.log("Form data submitted:", formData);

    // Reset the form
    setFormData({
      name: "",
      location: "",
      description: "",
      type: "hotel",
      imageUrl: "",
    });
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-primary mb-6">
        Add a New Hotel or Historic Place
      </h2>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Name"
          placeholder="Enter the name of the place"
          value={formData.name}
          onChange={handleInputChange}
          name="name"
          required
        />
        <InputField
          label="Location"
          placeholder="Enter the location (address)"
          value={formData.location}
          onChange={handleInputChange}
          name="location"
          required
        />
        <InputField
          label="Description"
          placeholder="Enter a short description"
          value={formData.description}
          onChange={handleInputChange}
          name="description"
          required
        />
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none shadow-sm transition duration-300"
          >
            <option value="hotel">Hotel</option>
            <option value="historicPlace">Historic Place</option>
          </select>
        </div>
        <InputField
          label="Image URL"
          placeholder="Enter image URL for the place"
          value={formData.imageUrl}
          onChange={handleInputChange}
          name="imageUrl"
        />
        
        <div className="text-center">
          <Button text="Submit" styleType="primary" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddPlaceForm;
