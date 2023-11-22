select name FROM names;
INSERT INTO names (name) 
VALUES('yamna');
select * FROM names names;

DELETE FROM names WHERE id =1;

INSERT INTO names (name) 
VALUES('yamna'),('lazher'),('radhwan'),('abir');

UPDATE names
SET name = 'nidhal'
WHERE id=2;
DELETE FROM names WHERE id =4;
