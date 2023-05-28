// Search students by name
const searchStudents = () => {
    if (name.trim() !== '') {
      // Check if the search term is not empty
      axios.get(`http://localhost:8080/api/students/search/${name}`)
        .then((response) => {
          console.log("search item", JSON.stringify(response));
          console.log(response);
          if (Array.isArray(response.data)) {
            // If the response is an array, update the pageData with the first student
            const studentData = response.data[0];
            setPageData({
              content: [studentData],
              totalPages: 1,
              number: 0
            });
          } else {
            // If the response is not an array, update the pageData with an empty array
            setPageData({
              content: [],
              totalPages: 0,
              number: 0
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // If the search term is empty, fetch all students
      fetchStudentsByPage(0);
    }
  };
  