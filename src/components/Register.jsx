import { useState } from "react";

const genders = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Others", value: "Others" }
];

const hobbiesList = [
  { label: "Music", value: "Music" },
  { label: "Movies", value: "Movies" },
  { label: "Plastic Model", value: "Plastic Model" }
];

const roles = [
  { label: "General staff", value: "General staff" },
  { label: "Developer", value: "Developer" },
  { label: "System Analyst", value: "System Analyst" }
];

function Register() {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [role, setRole] = useState("");

  function onHobbiesToggle(event) {
    const targetValue = event.target.value;
    const isChecked = event.target.checked;

    if (!isChecked) {
      setHobbies((prev) =>
        prev.filter((item) => item !== targetValue)
      );
    } else {
      setHobbies((prev) => [...prev, targetValue]);
    }
  }

  return (
    <div style={{ padding: "20px", maxWidth: "600px" }}>
      <h2>Registration Form</h2>

      {/* Username */}
      <div>
        <label>Username:</label><br />
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>

      {/* Firstname */}
      <div>
        <label>Firstname:</label><br />
        <input value={firstname} onChange={(e) => setFirstname(e.target.value)} />
      </div>

      {/* Lastname */}
      <div>
        <label>Lastname:</label><br />
        <input value={lastname} onChange={(e) => setLastname(e.target.value)} />
      </div>

      {/* Gender */}
      <div>
        <label>Gender:</label><br />
        {genders.map((g) => (
          <label key={g.value}>
            <input
              type="radio"
              name="gender"
              value={g.value}
              onChange={(e) => setGender(e.target.value)}
            />
            {g.label}
          </label>
        ))}
      </div>

      {/* Hobbies */}
      <div>
        <label>Hobbies:</label><br />
        {hobbiesList.map((h) => (
          <label key={h.value}>
            <input
              type="checkbox"
              value={h.value}
              onChange={onHobbiesToggle}
            />
            {h.label}
          </label>
        ))}
      </div>

      {/* Role */}
      <div>
        <label>Apply Role:</label><br />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">-- Select Role --</option>
          {roles.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </div>

      <hr />

      {/* Display result */}
      <h3>Preview</h3>
      <p>Username: {username}</p>
      <p>Firstname: {firstname}</p>
      <p>Lastname: {lastname}</p>
      <p>Gender: {gender}</p>
      <p>Hobbies: {hobbies.join(", ")}</p>
      <p>Role: {role}</p>
    </div>
  );
}

export default Register;
