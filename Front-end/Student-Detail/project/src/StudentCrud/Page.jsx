
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DisplayStudent = () => {
  const [pageData, setPageData] = useState({ content: [], totalPages: 0, number: 0 });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchStudentsByPage(0);
  }, []);

  const fetchStudentsByPage = (pageNumber) => {
    axios.get(`http://localhost:8080/api/students/display-student/${pageNumber}`)
      .then((response) => {
        setPageData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchStudents = () => {
    if (searchQuery === '') {
      fetchStudentsByPage(0); // Display fetchStudentsByPage when searchQuery is empty
    } else {
      axios.get(`http://localhost:8080/api/students/search/${searchQuery}`)
        .then((response) => {
          setPageData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyUp = () => {
    fetchStudents();
  };

  return (
    <div>
      <div className='container bg-light mt-3'>
        <h3 className='text-center'>Display Student By Name</h3>

        <div className="search-container my-4">
          <input
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyUp={handleKeyUp}
            type="text"
            className="form-control"
            placeholder="Search by Name"
          />
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">totalMarks</th>
            </tr>
          </thead>
          <tbody>
            {pageData.content.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.totalMarks}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="d-flex justify-content-center">
          <nav>
            <ul className="pagination">
              {[...Array(pageData.totalPages)].map((_, index) => (
                <li
                  className={`page-item ${index === pageData.number ? 'active' : ''}`}
                  key={index}
                >
                  <button
                    className="page-link"
                    onClick={() => fetchStudentsByPage(index)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DisplayStudent;



