import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StudentRegistrationForm = () => {
  const [name, setName] = useState("");
  const [totalMarks, setTotalMarks] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    //Frontend Validation
    if (!name || !totalMarks) {
      alert("Please fill all the required fields");
      return;
    }

    const data = { name, totalMarks };
    console.log(data);
    //Sent the data to the data base using rest api
    axios
      .post("http://localhost:8080/api/students", data)
      .then((response) => {
        //
        navigate("/display");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container mt-2 bg-light">
        <h3 className="text-center mt-1">Student Register</h3>

        {/* student info form */}
        <form>
          <div className="mb-3">
            <label for="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              pattern="[A-Za-z\s]+"
              required
            />
          </div>

          <div className="mb-3">
            <label for="number" className="form-label">
              Total Marks:
            </label>
            <input
              type="number"
              className="form-control"
              id="number"
              value={totalMarks}
              onChange={(event) => setTotalMarks(event.target.value)}
              required
            />
          </div>

          <div className="mb-3 text-center">
            <button onClick={handleSubmit} className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>

      {name}
      {totalMarks}
    </div>
  );
};

export default StudentRegistrationForm;
