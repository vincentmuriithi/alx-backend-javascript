interface Teacher{
	readonly firstname: string,
	readonly lastname: string,
	fullTimeEmployee: string,
	yearsOfExperience?: number,
	location: string,
	[propName: string]: any
}

interface Directors extends Teacher{
	numberOfReports: number
}

interface classInterface{
	workOnHomework(): string;
	displayName(): string;
}

interface StudentConstructor{
	(firstname: string, lastname: string): classInterface;
}

class StudentClass implements classInterface{
	firstname: string;
	lastname: string;

	constructor(firstname: string, lastname: string){
		this.firstname = firstname;
		this.lastname = lastname;
	}

	workOnHomework(): string{
		return "Currently working";
	}

	displayName(): string{
		return this.firstname;
	}
}
