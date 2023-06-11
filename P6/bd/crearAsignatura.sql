-- crearAsignatura.sql
create table Asignatura(
    nombre VARCHAR(20) not null,
    codigoAsignatura char(8) not null,
    primary key (codigoAsignatura)
)