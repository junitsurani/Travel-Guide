import React from 'react';

const InputField = ({ label, type = "text", placeholder, value, onChange, required = false }) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none shadow-sm transition duration-300"
      />
    </div>
  );
};

export default InputField;
