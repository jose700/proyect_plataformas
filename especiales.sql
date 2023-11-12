create table tutor(
idTutor serial primary key,
nombres varchar(20) not null,
apellidos varchar(40) not null,
cedula varchar(10) unique not null,
correo varchar(50) not null,
usuario varchar(15) not null,
pass text not null
);


create table estudiante(
idEstudiante serial primary key,
nombres varchar(20),
apellidos varchar(40),
cedula varchar(10) unique,
correo varchar(50),
edad varchar(15),
fechanacimiento date
); 
select * from estudiante


create table representante(
idRepresentante serial primary key,
idEstudiante serial,	
nombres varchar(20),
apellidos varchar(40),
cedula varchar(10) unique,
correo varchar(50),
estadocivil varchar(15),
ocupacion varchar(10)
);
select * from representante
ALTER TABLE representante
ADD CONSTRAINT idEstudiante
FOREIGN KEY (idEstudiante) 
REFERENCES estudiante(idEstudiante) 
ON DELETE cascade on update cascade;


create table materia(
idMateria serial primary key,
idEstudiante serial,
nombre varchar(40),
facultad varchar(40),
carrera varchar(40),
nivel varchar(10),
paralelo varchar(5),
jornada varchar(20)
);
select * from materiaaprobada

ALTER TABLE materia
ADD CONSTRAINT idEstudiante
FOREIGN KEY (idestudiante) 
REFERENCES estudiante(idEstudiante) 
ON DELETE cascade on update cascade;


create table materiaaprobada(
idAprobada serial primary key,
idMateria serial,
observacion varchar(80),
promediofinal real
);


ALTER TABLE materiaaprobada
ADD CONSTRAINT idMateria
FOREIGN KEY (idMateria) 
REFERENCES materia(idmateria) 
ON DELETE cascade on update cascade;


create table materiareprobada(
idReprobada serial primary key,
idMateria serial,
motivo varchar(65) default 'No tiene'
);

select * from materiaaprobada
ALTER TABLE materiareprobada
ADD CONSTRAINT idMateria
FOREIGN KEY (idMateria) 
REFERENCES materia(idMateria) 
ON DELETE cascade on update cascade;




create table tratamiento(
idTratamiento serial primary key,
idEstudiante serial,
clasediscapacidad varchar(30),
descripcionconsulta text,
fechaconsulta text,
opinionpaciente text,
tratamientopsicologico text,
tratamientofisico text
);

select * from tratamiento

ALTER TABLE tratamiento
ADD CONSTRAINT idEstudiante
FOREIGN KEY (idEstudiante) 
REFERENCES estudiante(idEstudiante) 
ON DELETE cascade on update cascade;



create table tratamientocumplido(
idCumplido serial primary key,
idTratamiento serial,
observacion text,
fechainicio date,
fechafin date
);


ALTER TABLE tratamientocumplido
ADD CONSTRAINT idTratamiento
FOREIGN KEY (idTratamiento) 
REFERENCES tratamiento(idTratamiento) 
ON DELETE cascade on update cascade;



create table tratamientonocumplido(
idNocumplido serial primary key ,
idTratamiento serial,
observacion text
);


ALTER TABLE tratamientonocumplido
ADD CONSTRAINT idTratamiento
FOREIGN KEY (idTratamiento) 
REFERENCES tratamiento(idTratamiento) 
ON DELETE cascade on update cascade;

select * from tutor