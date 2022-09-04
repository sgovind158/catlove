window.addEventListener("load", () => {
  fetchData();
});

let fetchData = async () => {
  let api = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng`;
  let res = await fetch(api);
  let data = await res.json();

  displayData(data);
};

let displayData = (data) => {
  console.log(data);
  let showDiv = document.querySelector("#show");
  showDiv.innerHTML = null;

  data.map((el) => {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("class", "img1");
    img.src = el.url;
    img.addEventListener("click", () => {
      goCatPage(el);
    });
    div.append(img);
    showDiv.append(div);
  });
};

let catId = localStorage.getItem("catid") || "";
let goCatPage = (el) => {
  console.log(el.id);
  let id = el.id;

  localStorage.setItem("catid", id);
  window.location.href = "cat.html";
};
