interface Person {
    name: string;
    age: number;
    isActive: boolean;
}

let armando: Person = {
    name: 'Armando',
    age: 20,
    isActive: true
};

let jose: Person = {
    name: 'José',
    age: 22,
    isActive: false
};

let dylan: Person = {
    name: 'Dylan',
    age: 11,
    isActive: false
};

let people: Person[] = [ armando, jose, dylan ]

for ( let i = 0; i <= people.length - 1; i++ ) {
    let person = people[i];
    console.log(`${person.name} ${person.age}`);
    
}

export {};
