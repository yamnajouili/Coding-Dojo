select *from dojos;
delete from dojos
where id in (1,2,3);
insert into dojos (name)
values("utchia"),("yoga"),("ozomaki");
select*from ninjas;
insert into ninjas (first_name,last_name,age,dojo_id)
values("suski","uchiha",16,1),("obito","uchiha",30,1),("madara","uchiha",40,1);
insert into ninjas (first_name,last_name,age,dojo_id)
values("NIJI","hyuga",16,2),("HINATA","hyuga",16,2),("Naoto","hyuga",20,2);
insert into ninjas (first_name,last_name,age,dojo_id)
values("naruto","Ozomaki",16,3),("nagato","Ozomaki",16,3),("boruto","Ozomaki",10,3);
select *from ninjas
order by dojo_id; 
select *from ninjas
order by dojo_id desc; 
select *from ninjas
order by dojo_id desc
liMIT 1;
select*from ninjas
join dojos on dojo_id=ninjas.dojo_id
limit 1
OFFSET 5;

select*from ninjas
join dojos on dojo_id=ninjas.dojo_id
;