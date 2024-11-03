const API_KEY = "Ko7kWyGxaaKNOdSXxtOyZA4XSkxmpI3C";

const URL_GIPHY = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=`;

function construirURL(termino) {
    url = URL_GIPHY + termino + "&limit=21&offset=0&rating=g&lang=en&bundle=low_bandwidth";
    console.log("La url es: ", url);
    return url;
}

document.addEventListener("DOMContentLoaded", () => {
    let buscar = document.getElementById("searcher"); // No sabe que es o está vacío
    let resultadoBusqueda = document.getElementById("container-images");

    buscar.addEventListener("keyup", (event) => {
        if (event.key == "Enter") {
            fetch(construirURL(buscar.value))
                .then((response) => response.json())
                .then((data) => {
                    resultadoBusqueda.innerHTML = "";
                    data.data.forEach((element) => {
                        resultadoBusqueda.innerHTML += `
                        <div class="border border-8 border-black shadow-lg bg-green-300 relative transition duration-300 delay-150 hover:delay-300">
                            <div class="flex col justify-end absolute top-0 right-0 py-1 px-2">
                                <img src="img/fluent-emoji_pushpin (1).svg" alt="Pin rojo" srcset="">
                                <!-- <img src="img/fluent-emoji_pushpin.svg" alt="Pin palido" srcset=""> -->
                            </div>
                            <img class="object-cover w-full h-64" src="${element.images.original.url}" alt="Gif de ${buscar.value}"/>
                             <div class="flex col justify-end absolute bottom-0 right-0 py-1 px-2">
                                <img src="img/fluent-emoji_link.svg" alt="Link Gris" srcset="">
                                <!-- <img src="img/fluent-emoji_link (1).svg" alt="Link Azul" srcset="">  -->
                                <img src="img/mingcute_share-forward-fill (1).svg" alt="Compartir amarillo" srcset="">
                                <!-- <img src="img/mingcute_share-forward-fill.svg" alt="Compartir palido" srcset=""> -->
                                <img src="img/fluent-emoji_sparkling-heart.svg" alt="Corazon rojo" srcset="">
                                <!-- <img src="img/fluent-emoji_white-heart.svg" alt="Corazon Blanco" srcset="">  -->
                             </div>
                         </div>`;
                    });
                });
        }
    });
});

//  data.data.images.original.url