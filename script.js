let apilink = 
document.addEventListener("DOMContentLoaded", () => {
    let buscar = document.getElementById("searcher");

    fetch("")
      .then((response) => response.json())
      .then((data) => console.log(data));
});

