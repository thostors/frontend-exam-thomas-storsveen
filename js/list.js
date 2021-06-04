let ul = document.querySelector(".persons")

fetch("./people.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      let li = document.createElement("li");
      li.innerHTML = `
<p class='name'>${element.name} ${element.age}</p>
<p class='Category'> ${element.city} ${element.Category}</p>
`;
      ul.appendChild(li);
    });
  });