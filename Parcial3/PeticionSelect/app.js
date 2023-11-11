document.addEventListener('DOMContentLoaded', async () => {
    /**
     * @type {HTMLSelectElement}
     */
    const categories = document.getElementById('categories');
    const chuck = document.getElementById('chuck');

    const getJoke = async (category) => {
        const response = await fetch(`https://api.chucknorris.io/jokes/random?category${category}`);
        const data = await response.json();
        chuck.innerHTML = `
  <div class="card-body">
    <h5 class="card-title">Joke: </h5>
    <p class="card-text">${data.value}</p>
  </div>
        `;
    }

    const response = await fetch('https://api.chucknorris.io/jokes/categories');
    const data = await response.json();
    data.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.label = category;
        categories.options.add(option);
    });
    getJoke(data[0]);

    categories.addEventListener('change', async (e) => getJoke(e.target.value));
});
