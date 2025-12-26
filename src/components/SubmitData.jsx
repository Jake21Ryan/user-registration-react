import { useState } from "react";

function SubmitData() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {submitted ? (
        // ✅ SUBMISSION VIEW
        <div>
          <h2>Submitted Data</h2>
          <p>Username: {formData.username}</p>
          <p>Email: {formData.email}</p>

          <button onClick={() => setSubmitted(false)}>
            Back to Form
          </button>
        </div>
      ) : (
        // ✅ FORM VIEW
        <div>
          <h2>Form</h2>

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />

          <br />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <br />

          <button onClick={() => setSubmitted(true)}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default SubmitData;
