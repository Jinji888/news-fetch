function fetchNoticias() {
    const temas = ["tecnologia", "ciencia", "gaming", "uveg", "perros", "peliculas", "musica", "medicina", "software"];
    const actual = localStorage.getItem("temaActivo");
    const temaActivo = temas.filter(t => t !== actual)[Math.floor(Math.random() * (temas.length - 1))];

    localStorage.setItem("temaActivo", temaActivo);

    fetch(`https://freenewsapi.ai/v1/search?q=${temaActivo}&size=10`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error en la extraccion");
            }
            return response.json();
        })
        .then(data => {
            const noticiasWeb = document.getElementById("seccion-info-noticia");
            if (noticiasWeb) noticiasWeb.innerHTML = "";

            console.log(data);

            const noticiasOrdenadas = data.results.sort((a, b) => {
                if (a.image && !b.image) return -1;
                if (!a.image && b.image) return 1;
                return 0;
            });

            noticiasOrdenadas.forEach(noticia => {
                noticiasWeb.innerHTML += `
                    <div class="noticia-tarjeta">
                        <div class="noticia-meta">
                            <span class="noticia-fuente">${noticia.sitename}</span>
                            <span class="noticia-fecha">${noticia.published_at}</span>
                            <span class="noticia-pais">${noticia.country}</span>
                        </div>
                        <img class="noticia-imagen" src="${noticia.image || 'https://dical.es/img/cms/Papel%20periodico%20caracteristicas.jpg'}" alt="${noticia.title}">
                        <h3>${noticia.title}</h3>
                        <p>${noticia.description || 'Sin descripción disponible'}</p>
                        <a href="${noticia.url}" target="_blank" id="boton-leer">Leer más</a>
                    </div>
                `;
            });
        })
        .catch(error => console.error(error));
}

fetchNoticias();
