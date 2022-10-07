

export let person = {
    name: 'Armando',
    age: 20,
    isActive: true,
    hobbies: ['soccer', 'baseball'],
    toString() {
        let objectString = this.name + ' ' + this.age + ' ' + this.hobbies;
        console.log(objectString);
        
        
    }
}

// console.log( person.name.toUpperCase() );
// person.toString();

let car = {
    doors: 5,
    color: 'white',
    brand: 'Honda',
    year: 2025
}

let smartTv = {
    brand: 'Samsung',
    color: 'Black',
    sizeInches: 90,
    year: 2022,
    type: 'led'
}

let youtubeVideo = {
    length: 3600,
    name: 'Aprendiendo Lógica de programación',
    author: 'Fernando herrera',
    Comments: ['Buen vídeo', 'Me enseñó bastante', 'No es nada actualiado']
}

console.log(car);
console.log(smartTv);
console.log(youtubeVideo);

