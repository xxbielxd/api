create table USUARIO(
	codigo_usuario int(11) primary key auto_increment,
    nome varchar(100),
    login varchar(50),
    senha varchar(50),
    unique(login)
);

insert into USUARIO (nome,login,senha) values ('Gabriel Victor','biel','123');

select * from USUARIO

-- drop table USUARIO;