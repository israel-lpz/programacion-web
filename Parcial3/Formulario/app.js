document.addEventListener('DOMContentLoaded', () => {
   const btnConsultar = document.querySelector('#btnConsultar');
   btnConsultar.addEventListener('click', async () => {
       const id = prompt('No control del alumno?');
       if (!id) return;

       let response = await fetch(`http://localhost:3001/alumnos?noControl=${id}`);
       const data = await response.json();
       console.log(data);
   });
});
