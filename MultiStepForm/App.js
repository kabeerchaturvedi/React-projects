import "./styles.css";
import { useState } from "react";

function App() {
  const formConfig = {
    Profile: [
      {
        label: "Age",
        type: "number",
        name: "age",
        validation: {
          required: true,
          pattern: /^[0-9]+$/,
          errorMsg: "Age is required and must be numeric.",
        },
      },
      {
        label: "Email",
        type: "email",
        name: "email",
        validation: {
          required: true,
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          errorMsg: "Enter a valid email.",
        },
      },
    ],
    Interest: [
      {
        label: "Hobbies",
        type: "checkbox",
        options: ["Reading", "Traveling", "Coding"],
        name: "hobbies",
        validation: { required: true, errorMsg: "Select at least one hobby." },
      },
      {
        label: "Preferred Language",
        type: "radio",
        options: ["JavaScript", "Python", "C++"],
        name: "language",
        validation: {
          required: true,
          errorMsg: "Select a preferred language.",
        },
      },
    ],
    Settings: [
      {
        label: "Receive Newsletters",
        type: "dropdown",
        options: ["Yes", "No"],
        name: "newsletter",
        validation: { required: true, errorMsg: "Select an option." },
      },
    ],
  };

  const [formData, setFormData] = useState({});
  const tabs = Object.keys(formConfig);
  const [activeTab, setActiveTab] = useState("Profile");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedValues = checked
        ? [...(formData[name] || []), value]
        : (formData[name] || []).filter((item) => item !== value);
      setFormData((prev) => ({ ...prev, [name]: updatedValues }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    formConfig[activeTab].forEach((field) => {
      const value = formData[field.name];

      if (field.validation?.required) {
        if (field.type === "checkbox" && (!value || value.length === 0)) {
          newErrors[field.name] = field.validation.errorMsg;
        } else if (field.type === "radio" && !value) {
          newErrors[field.name] = field.validation.errorMsg;
        } else if (!value) {
          newErrors[field.name] = field.validation.errorMsg;
        }
      }

      if (
        field.validation?.pattern &&
        value &&
        !field.validation.pattern.test(value)
      ) {
        newErrors[field.name] = field.validation.errorMsg;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (activeTab === "Settings") {
        console.log("Form Submitted", formData);
        alert("Form submitted successfully!");
      } else {
        alert("Validation passed! Move to the next tab.");
      }
    }
    console.log("Form Submitted", formData);
  };

  return (
    <div className="App">
      <div>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            disabled={activeTab === tab}
          >
            {tab}
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        {formConfig[activeTab].map((field) => (
          <div key={field.name}>
            <label>{field.label}</label>
            {field.type === "checkbox" &&
              field.options.map((option) => (
                <div key={option}>
                  <input
                    type="checkbox"
                    name={field.name}
                    value={option}
                    checked={(formData[field.name] || []).includes(option)}
                    onChange={handleChange}
                  />
                  {option}
                </div>
              ))}
            {field.type === "radio" &&
              field.options.map((option) => (
                <div key={option}>
                  <input
                    type="radio"
                    name={field.name}
                    value={option}
                    checked={formData[field.name] === option}
                    onChange={handleChange}
                  />
                  {option}
                </div>
              ))}
            {field.type === "dropdown" && (
              <select
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
            {field.type !== "checkbox" &&
              field.type !== "radio" &&
              field.type !== "dropdown" && (
                <input
                  type={field.type}
                  name={field.name}
                  onChange={handleChange}
                  value={formData[field.name] || ""}
                />
              )}
            {errors[field.name] && (
              <div style={{ color: "red" }}>{errors[field.name]}</div>
            )}
          </div>
        ))}
        {activeTab === "Settings" && <button type="submit">Submit</button>}
        {activeTab !== "Settings" && (
          <button type="button" onClick={handleSubmit}>
            Next
          </button>
        )}
      </form>
    </div>
  );
}

export default App;
