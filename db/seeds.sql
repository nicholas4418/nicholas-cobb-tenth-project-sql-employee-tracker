INSERT INTO department (department_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Security");

INSERT INTO roles(title, department_id, salary)
VALUES ("Senior Sales Leader", 1, 250000),
       ("Junior Sales Associate", 1, 60000),
       ("Senior Engineering Specialist", 2, 500000),
       ("Junior Engineering Specialist", 2, 150000),
       ("Senior Financial Accountant", 3, 150000),
       ("Chief of Security", 4, 5000000);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jonathan", "Banks", 4, 4),
       ("Reagan", "Ridley", 2, 2),
       ("Miles", "Dyson", 2, null),
       ("Patrick", "Bateman", 1, 1),
       ("Kenneth" "Rosenberg", 3, 3);
