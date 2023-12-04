CREATE DATABASE web;
use web;

CREATE TABLE alumnos (
    numero_de_control INT PRIMARY KEY,
    nombre VARCHAR(255),
    correo VARCHAR(255),
    telefono VARCHAR(15),
    semestre INT
);

INSERT INTO alumnos (numero_de_control, nombre, correo, telefono, semestre) VALUES
    (1001, 'Juan Pérez', 'juan.perez@example.com', '555-123-4567', 1),
    (1002, 'María González', 'maria.gonzalez@example.com', '555-234-5678', 2),
    (1003, 'Carlos Rodríguez', 'carlos.rodriguez@example.com', '555-345-6789', 3),
    (1004, 'Laura Martínez', 'laura.martinez@example.com', '555-456-7890', 4),
    (1005, 'Alejandro López', 'alejandro.lopez@example.com', '555-567-8901', 5),
    (1006, 'Carmen Sánchez', 'carmen.sanchez@example.com', '555-678-9012', 6),
    (1007, 'Miguel Gómez', 'miguel.gomez@example.com', '555-789-0123', 7),
    (1008, 'Ana Torres', 'ana.torres@example.com', '555-890-1234', 8),
    (1009, 'Javier Díaz', 'javier.diaz@example.com', '555-901-2345', 1),
    (1010, 'Isabel Vargas', 'isabel.vargas@example.com', '555-012-3456', 2),
    (1011, 'Roberto Núñez', 'roberto.nunez@example.com', '555-123-4567', 3),
    (1012, 'Sofía Ramírez', 'sofia.ramirez@example.com', '555-234-5678', 4),
    (1013, 'Francisco Herrera', 'francisco.herrera@example.com', '555-345-6789', 5),
    (1014, 'Elena Castro', 'elena.castro@example.com', '555-456-7890', 6),
    (1015, 'Ricardo Medina', 'ricardo.medina@example.com', '555-567-8901', 7),
    (1016, 'Salumnosilvia Ortega', 'silvia.ortega@example.com', '555-678-9012', 8),
    (1017, 'Martín Fuentes', 'martin.fuentes@example.com', '555-789-0123', 1),
    (1018, 'Verónica Jiménez', 'veronica.jimenez@example.com', '555-890-1234', 2),
    (1019, 'Daniel Mendoza', 'daniel.mendoza@example.com', '555-901-2345', 3),
    (1020, 'Patricia Soto', 'patricia.soto@example.com', '555-012-3456', 4),
    (1021, 'Jorge Salazar', 'jorge.salazar@example.com', '555-123-4567', 5),
    (1022, 'Gabriela Morales', 'gabriela.morales@example.com', '555-234-5678', 6),
    (1023, 'Héctor Pacheco', 'hector.pacheco@example.com', '555-345-6789', 7),
    (1024, 'Adriana Márquez', 'adriana.marquez@example.com', '555-456-7890', 8),
    (1025, 'Raúl Navarro', 'raul.navarro@example.com', '555-567-8901', 1),
    (1026, 'Cecilia Guzmán', 'cecilia.guzman@example.com', '555-678-9012', 2),
    (1027, 'Pablo Ríos', 'pablo.rios@example.com', '555-789-0123', 3),
    (1028, 'Natalia Herrera', 'natalia.herrera@example.com', '555-890-1234', 4),
    (1029, 'Alberto Varela', 'alberto.varela@example.com', '555-901-2345', 5),
    (1030, 'Lourdes Cordero', 'lourdes.cordero@example.com', '555-012-3456', 6);
