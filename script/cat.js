let catId = localStorage.getItem("catid");

let fetchData = async () => {
  let api = `https://api.thecatapi.com/v1/images/${catId}`;
  let res = await fetch(api);
  let data = await res.json();

  displayData(data);
};

fetchData();

let displayData = (data) => {
  console.log(data);
  let showDiv = document.querySelector("#show");
  showDiv.innerHTML = null;

  let div1 = document.createElement("div");
  div1.setAttribute("class", "div1");

  let div2 = document.createElement("div");
  div2.setAttribute("class", "div2");
  let img = document.createElement("img");
  img.setAttribute("class", "img1");
  img.src = data.url;
  let { breeds } = data;

  breeds.map((el) => {
    let name = document.createElement("p");
    let description = document.createElement("p");
    let tempermant = document.createElement("p");

    let lifespan = document.createElement("p");
    let url = document.createElement("a");

    name.innerHTML = el.name;
    description.innerHTML = el.description;
    tempermant.innerHTML = el.temperament;
    lifespan.innerHTML = el.life_span;

    var a = document.createElement("a");
    var link = document.createTextNode("wikipedia_url");
    a.appendChild(link);
    a.title = "wikipedia_url";
    a.href = el.wikipedia_url;

    div1.append(img);
    div2.append(name, description, tempermant, lifespan, a);
    showDiv.append(div1, div2);
  });
};
