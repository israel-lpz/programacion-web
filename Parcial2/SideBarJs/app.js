document.addEventListener('DOMContentLoaded', () => {

    /**
     * @type {HTMLButtonElement}
     */
   const btnToggle = document.getElementById('btnToggleMenu');
    /**
     * @type {HTMLDivElement}
     */
   const sidebar = document.getElementById('sidebar');

   btnToggle.addEventListener('click', () => {
       sidebar.classList.toggle('d-none');
   });
});
