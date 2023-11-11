const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getProduct = async (productNumber = random(1, 20)) => {
    const response = await fetch(`https://fakestoreapi.com/products/${productNumber}`);
    return  await response.json();
}

document.addEventListener('DOMContentLoaded', async () => {
    const randomProducts = Array.from(document.querySelectorAll('.product'));

    for (const product of randomProducts) {
        const data = await getProduct()

        product.innerHTML = `
<div class="card shadow">
  <img src="${data.image}" class="card-img-top product-image py-3" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.title}</h5>
    <p class="card-text">${data.description}</p>
  </div>
</div>
    `;
    }

    const products = Array.from(document.querySelectorAll('#products li'));
    console.log(products)
    const promises = products.map(async (x, index) => {
        const product = await getProduct(index + 1);
        const popover = new bootstrap.Popover(x, {
            trigger: 'hover',
            title: product.title,
            html: true,
            content: `<img src="${product.image}" class="product-thumb"/>`
        });
    });
});
