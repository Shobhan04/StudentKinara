//it is for search bar
const search = () => {
    console.log("SEARCH")
	//console.log("serching...");
	let query = $("#search-input").val();
	if (query == '') {
		$(".search-result").hide();

	}
	else {
		console.log(query);

		//sending request to server
		let url = `http://localhost:8080/api/students/search/${query}`;

		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				//data....
				//console.log(data);
				let text = `<div class="list-group">`

				data.forEach((students) => {
					text += `<a href="/user/contact/${students.id}" class='list-group-item list-group-item-action'>${students.name}</a>`
				});

				text += `</div>`;

				$(".search-result").html(text);
				$(".search-result").show();
			});


	}
};
//it is for search bar end