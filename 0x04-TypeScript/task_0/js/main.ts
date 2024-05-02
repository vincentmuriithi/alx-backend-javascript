interface Student{
	firstname: string,
	lastaname: string,
	age: number,
	location: string
}

const student1: Student = {
	firstname: "Vincent",
	lastname: "Muriithi",
	age: 21
	location: "Tudor"
}

const student2: Student = {
	firstname: "Claire",
	lastname: "Muthii",
	age: 20,
	location: "Kagumo"
}

const studentlist: Array<Student> = [student1, student2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");
const rowHead: HTMLRowElement = thead.insertRow(0);
const cell1Head: HTMLTableCellElement = rowHead.insertCell(0);
const cell2Head: HTMLTableCellElement = rowHead.insertCell(1);

cell1Head.innerHTML = "firstname";
cell2Head.innerHTML = "location";
table.append(thead);

stydentlist.forEach((student) => {
	const row: HTMLTableRowElement = tbody.insertRow(0);
	const cell1: HTMLTableCellElement = row.insertCell(0);
	const cell2: HTMLTableCellElement = row.insertCell(1);

	cell1.innerHTML = student.firstname;
	cell2.innerHTML = student.location;
});

table.append(tbody);
body.append(table);
