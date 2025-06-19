// Je créé un objet qui me permet de gérer les paramètres de mon URL
// et je lui fais passer mon URL courante.
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("id");

if (!isNaN(id)) {
  fetch(`https://dummyjson.com/products/${id}`)
    .then((response) => {
      if (!response.ok)
        throw new Error("Erreur lors de la récupération du produit");

      return response.json();
    })
    .then((product) => {
      document.getElementById("product-details").innerHTML = `
          <div class="col-md-6">
            <img src="${product.images[0]}" alt="${
        product.title
      }" class="product-img">
          </div>
          <div class="col-md-6">
            <h2>${product.title}</h2>
            <p><strong>Description :</strong> ${product.description}</p>
            <h5><strong>Prix :</strong> ${product.price} €</h5>
            <p><strong>Réduction :</strong> ${product.discountPercentage}%</p>
            <p><strong>Note :</strong> ${product.rating} / 5</p>
            <p><strong>Marque :</strong> ${product.brand}</p>
            <p><strong>Stock disponible :</strong> ${product.stock}</p>
            <p><strong>Livraison :</strong> ${product.shippingInformation}</p>
            <p><strong>Disponibilité :</strong> ${
              product.availabilityStatus
            }</p>
            <h4 class="mt-4">Avis clients</h4>
            ${product.reviews
              .slice(0, 3)
              .map(
                (r) => `
              <div class="review">
                <strong>${r.reviewerName}</strong> — <em>Note : ${r.rating}</em>
                <p>${r.comment}</p>
              </div>
            `
              )
              .join("")}
          </div>
        `;
    })
    .catch((error) => {
      console.error(error);
      document.getElementById("product-details").innerHTML =
        "<p>Erreur lors de l'affichage du produit.</p>";
    });
} else {
  document.getElementById(
    "product-details"
  ).innerHTML = `<p>Aucun produit trouvé</p>`;
}
