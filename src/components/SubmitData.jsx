import { useState } from "react";

function SubmitData() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    gender: "",
    hobbies: [],
    role: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        hobbies: checked
          ? [...formData.hobbies, value]
          : formData.hobbies.filter(h => h !== value)
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  return (
    <div>
      {submitted ? (
        // ✅ SUBMISSION VIEW
        <div>
          <h2>Submit Data</h2>

          <p>Username: <b>{formData.username}</b></p>
          <p>Firstname: <b>{formData.firstname}</b></p>
          <p>Lastname: <b>{formData.lastname}</b></p>
          <p>Gender: <b>{formData.gender}</b></p>
          <p>Hobbies: <b>{formData.hobbies.join(", ")}</b></p>
          <p>Role: <b>{formData.role}</b></p>

          <button onClick={() => setSubmitted(false)}>
            Back to form
          </button>
        </div>
      ) : (
        // ✅ FORM VIEW
        <div>
          <h2>Form</h2>

          <input name="username" placeholder="Username" onChange={handleChange} />
          <br />

          <input name="firstname" placeholder="Firstname" onChange={handleChange} />
          <br />

          <input name="lastname" placeholder="Lastname" onChange={handleChange} />
          <br />

          <label>
            <input type="radio" name="gender" value="male" onChange={handleChange} />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" onChange={handleChange} />
            Female
          </label>
          <br />

          <label>
            <input type="checkbox" value="music" onChange={handleChange} />
            Music
          </label>
          <label>
            <input type="checkbox" value="movies" onChange={handleChange} />
            Movies
          </label>
          <br />

          <select name="role" onChange={handleChange}>
            <option value="">Select role</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
          </select>

          <br /><br />

          <button onClick={() => setSubmitted(true)}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default SubmitData;
