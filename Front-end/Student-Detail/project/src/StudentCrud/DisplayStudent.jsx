// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// const DisplayStudent = () => {
//   // Store the data array and page metadata
//   const [pageData, setPageData] = useState({ content: [], totalPages: 0, number: 0 });

//   useEffect(() => {
//     fetchStudentsByPage(0); // Fetch the first page of students on component mount
//   }, []);

//   // Fetch students by page number
//   const fetchStudentsByPage = (pageNumber) => {
//     axios.get(`http://localhost:8080/api/students/display-student/${pageNumber}`)
//       .then((response) => {
//         console.log(response);
//         setPageData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   return (
//     <div>
//       <div className='container bg-light mt-3'>
//         <h3 className='text-center'>Display Student By Name</h3>


// {/* <!-- Search button --> */}

// <div class="search-container my-4">

// <input onkeyup="search()" id="search-input" type="text" class="form-control" placeholder="Serach Your Name" />

// <div class="search-result">
// {/* <!-- Search results goes here --> */}
// </div>

// </div>

//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Name</th>
//               <th scope="col">totalMarks</th>
//             </tr>
//           </thead>
//           <tbody>
//             {pageData.content.map((student) => (
//               <tr key={student.id}>
//                 <td>{student.id}</td>
//                 <td>{student.name}</td>
//                 <td>{student.totalMarks}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Pagination */}
//         <div className="d-flex justify-content-center">
//           <nav>
//             <ul className="pagination">
//               {[...Array(pageData.totalPages)].map((_, index) => (
//                 <li className={`page-item ${index === pageData.number ? 'active' : ''}`} key={index}>
//                   <button className="page-link" onClick={() => fetchStudentsByPage(index)}>
//                     {index + 1}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>

//       </div>
//     </div>
//   );
  
// };

// export default DisplayStudent;




// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// const DisplayStudent = () => {
//   const [students, setStudents] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = () => {
//     axios.get(`http://localhost:8080/api/students/search/${searchQuery}`)
//       .then((response) => {
//         setStudents(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleKeyUp = (event) => {
//     if (event.key === 'Enter') {
//       fetchStudents();
//     }
//   };

//   return (
//     <div>
//       <div className='container bg-light mt-3'>
//         <h3 className='text-center'>Display Student By Name</h3>

//         <div className="search-container my-4">
//           <input
//             value={searchQuery}
//             onChange={handleSearchChange}
//             onKeyUp={handleKeyUp}
//             type="text"
//             className="form-control"
//             placeholder="Search by Name"
//           />
//         </div>

//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Name</th>
//               <th scope="col">Total Marks</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((student) => (
//               <tr key={student.id}>
//                 <td>{student.id}</td>
//                 <td>{student.name}</td>
//                 <td>{student.totalMarks}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DisplayStudent;













//THIS ONE WORK PERFECTLY BUT PEGINATION NOT INVOVED

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const DisplayStudent = () => {
//   const [students, setStudents] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   const fetchStudents = () => {
//     axios.get(`http://localhost:8080/api/students/search/${searchQuery}`)
//       .then((response) => {
//         setStudents(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleKeyUp = () => {
//     fetchStudents();
//   };

//   return (
//     <div>
//       <div className='container bg-light mt-3'>
//         <h3 className='text-center'>Display Student By Name</h3>

//         <div className="search-container my-4">
//           <input
//             value={searchQuery}
//             onChange={handleSearchChange}
//             onKeyUp={handleKeyUp}
//             type="text"
//             className="form-control"
//             placeholder="Search by Name"
//           />
//         </div>

//         {students.length === 0 && (
//           <div className="text-center">No data found</div>
//         )}

//         {students.length > 0 && (
//           <table className="table">
//             <thead>
//               <tr>
//                 <th scope="col">#</th>
//                 <th scope="col">Name</th>
//                 <th scope="col">Total Marks</th>
//               </tr>
//             </thead>
//             <tbody>
//               {students.map((student) => (
//                 <tr key={student.id}>
//                   <td>{student.id}</td>
//                   <td>{student.name}</td>
//                   <td>{student.totalMarks}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DisplayStudent;






//TEST

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const DisplayStudent = () => {
//   // Store the data array and page metadata
//   const [pageData, setPageData] = useState({ content: [], totalPages: 0, number: 0 });

//   useEffect(() => {
//     fetchStudentsByPage(0); // Fetch the first page of students on component mount
//   }, []);

//   // Fetch students by page number
//   const fetchStudentsByPage = (pageNumber) => {
//     axios.get(`http://localhost:8080/api/students/display-student/${pageNumber}`)
//       .then((response) => {
//         console.log(response);
//         setPageData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div>
//       <div className='container bg-light mt-3'>
//         <h3 className='text-center'>Display Student By Name</h3>


// {/* <!-- Search button --> */}

// <div class="search-container my-4">

// <input onkeyup="search()" id="search-input" type="text" class="form-control" placeholder="Serach Your Name" />

// <div class="search-result">
// {/* <!-- Search results goes here --> */}
// </div>

// </div>

//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Name</th>
//               <th scope="col">totalMarks</th>
//             </tr>
//           </thead>
//           <tbody>
//             {pageData.content.map((student) => (
//               <tr key={student.id}>
//                 <td>{student.id}</td>
//                 <td>{student.name}</td>
//                 <td>{student.totalMarks}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Pagination */}
//         <div className="d-flex justify-content-center">
//           <nav>
//             <ul className="pagination">
//               {[...Array(pageData.totalPages)].map((_, index) => (
//                 <li className={`page-item ${index === pageData.number ? 'active' : ''}`} key={index}>
//                   <button className="page-link" onClick={() => fetchStudentsByPage(index)}>
//                     {index + 1}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>

//       </div>
//     </div>
//   );
  
// };

// export default DisplayStudent;

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const DisplayStudent = () => {
//   const [students, setStudents] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = () => {
//     axios.get(`http://localhost:8080/api/students/search/${searchQuery}`)
//       .then((response) => {
//         setStudents(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleKeyUp = (event) => {
//     if (event.key === 'Enter') {
//       fetchStudents();
//     }
//   };

//   return (
//     <div>
//       <div className='container bg-light mt-3'>
//         <h3 className='text-center'>Display Student By Name</h3>

//         <div className="search-container my-4">
//           <input
//             value={searchQuery}
//             onChange={handleSearchChange}
//             onKeyUp={handleKeyUp}
//             type="text"
//             className="form-control"
//             placeholder="Search by Name"
//           />
//         </div>

//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Name</th>
//               <th scope="col">Total Marks</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((student) => (
//               <tr key={student.id}>
//                 <td>{student.id}</td>
//                 <td>{student.name}</td>
//                 <td>{student.totalMarks}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DisplayStudent;













//FINAL RESULT


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

        {pageData.content.length === 0 && (
          <div className="text-center">No data found</div>
        )}

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



