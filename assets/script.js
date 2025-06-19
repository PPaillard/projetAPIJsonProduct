fetch("https://dummyjson.com/products")
  .then((response) => {
    return response.json();
  })
  .then((datas) => {
    console.log(datas.products);
    // Affichage de mes produits
    // j'effectue qqchose sur chacun de mes produits.
    for (const product of datas.products) {
      document.getElementById("articleList").innerHTML += `
        <div class="col">
            <div class="card product-card h-100">
                <img src="${product.thumbnail}" class="card-img-top product-image" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.price} €</p>
                    <p class="card-text"><strong>Note :</strong> ${product.rating}</p>
                    
                </div>
                <a href="detailsProduit.html?id=${product.id}" class="btn btn-primary">Voir les détails</a>
            </div>
        </div>
        `;
    }
  });
