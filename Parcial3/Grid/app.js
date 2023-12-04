import {Grid, html} from "https://unpkg.com/gridjs?module";

document.addEventListener('DOMContentLoaded', async () => {

    $('#table').bootstrapTable({
        url: 'http://localhost:3001/alumnos',
        pagination: true,
        search: true,
        columns: [
            {field: 'numero_de_control', title: 'Numero de control'},
            {field: 'nombre', title: 'Nombre'},
            {field: 'telefono', title: 'Telefono'},
            {field: 'semestre', title: 'Semestre'},
        ],
    });

    new Grid({
        columns: ['Numero de control',"Nombre", "telefono", 'Semestre'],
        server: {
            url: 'http://localhost:3001/alumnos',
            then: data => data.map(x => [x.numero_de_control, x.nombre, x.telefono, x.semestre]),
        }
        // data: [
        //     ["John", "john@example.com", "(353) 01 222 3333"],
        //     ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
        //     ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
        //     ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
        //     ["Afshin", "afshin@mail.com", "(353) 22 87 8356"]
        // ]
    }).render(document.getElementById('wrapper'));
});
