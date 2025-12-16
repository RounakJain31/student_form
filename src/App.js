// import { useState } from "react";
// import "./App.css";

// export default function App() {
//   const [form, setForm] = useState({
//     name: "",
//     username: "",
//     college: "",
//     email: "",
//     password: "",
//     address: ""
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const validate = () => {
//     const newErrors = {};

//     if (!form.name.trim()) {
//       newErrors.name = "Name is required";
//     }

//     if (form.username && form.username !== form.username.toLowerCase()) {
//       newErrors.username = "Username must be lowercase only";
//     }

//     if (!form.college.trim()) {
//       newErrors.college = "College is required";
//     }

//     if (
//       form.email &&
//       !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
//     ) {
//       newErrors.email = "Enter a valid email address";
//     }

//     if (form.password && form.password.length < 8) {
//       newErrors.password = "Password must be at least 8 characters";
//     }

//     if (!form.address.trim()) {
//       newErrors.address = "Address is required";
//     }

//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setErrors(validate());
//   };

//   return (
//     <div className="container">
//       <h1>Student Registration Form</h1>

//       <form onSubmit={handleSubmit}>
//         <label>Name</label>
//         <input     
//           name="name"
//           placeholder="Enter name"
//           value={form.name}
//           onChange={handleChange}
//         />
//         {errors.name && <p className="error">{errors.name}</p>}

//         <label>Username</label>
//         <input
//           name="username"
//           placeholder="Enter username"
//           value={form.username}
//           onChange={handleChange}
//         />
//         {errors.username && <p className="error">{errors.username}</p>}

//         <label>College</label>
//         <input
//           name="college"
//           placeholder="Enter college"
//           value={form.college}
//           onChange={handleChange}
//         />
//         {errors.college && <p className="error">{errors.college}</p>}

//         <label>Email</label>
//         <input
//           name="email"
//           placeholder="Enter email"
//           value={form.email}
//           onChange={handleChange}
//         />
//         {errors.email && <p className="error">{errors.email}</p>}

//         <label>Password</label>
//         <input
//           type="password"
//           name="password"
//           placeholder="Enter password"
//           value={form.password}
//           onChange={handleChange}
//         />
//         {errors.password && <p className="error">{errors.password}</p>}

//         <label>Address</label>
//         <textarea
//           name="address"
//           placeholder="Enter address"
//           value={form.address}
//           onChange={handleChange}
//         />
//         {errors.address && <p className="error">{errors.address}</p>}

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

import { useState } from "react";
import "./App.css";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    college: "",
    email: "",
    password: "",
    address: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (form.username && form.username !== form.username.toLowerCase()) {
      newErrors.username = "Username must be lowercase only";
    }

    if (!form.college.trim()) {
      newErrors.college = "College is required";
    }

    if (
      form.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (form.password && form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!form.address.trim()) {
      newErrors.address = "Address is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate());
  };

  return (
    <div className="container">
      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          placeholder="Enter name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Username</label>
        <input
          name="username"
          placeholder="Enter username"
          value={form.username}
          onChange={handleChange}
        />
        {errors.username && <p className="error">{errors.username}</p>}

        <label>College</label>
        <input
          name="college"
          placeholder="Enter college"
          value={form.college}
          onChange={handleChange}
        />
        {errors.college && <p className="error">{errors.college}</p>}

        <label>Email</label>
        <input
          name="email"
          placeholder="Enter email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <label>Address</label>
        <input
          name="address"
          placeholder="Enter address"
          value={form.address}
          onChange={handleChange}
        />
        {errors.address && <p className="error">{errors.address}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
