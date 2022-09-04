let findFun = () => {
    let q = document.querySelector("#input").value;

    fetchFuc(q);
  };

  let fetchFuc = async (q) => {
    let api = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${q}`;
    let res = await fetch(api);
    let data = await res.json();
    displayData(data);
  };

  let displayData = (data) => {
    let showDiv = document.querySelector("#show");
    showDiv.innerHTML = null;

    data.map((el) => {
      let div = document.createElement("div");

      let img = document.createElement("img");
      img.setAttribute("class", "img1");
      img.src = el.url;

      div.append(img);
      showDiv.append(div);
    });
  };