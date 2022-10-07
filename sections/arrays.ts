

export let employees:  string[] = ['Armando', 'Jose', 'Capriles'];
export let salaries: number[] = [1500, 2400, 3200]

// let flowers: string[] = ['Rosa', 'Girasol', 'Lirio', 'Rosa Azul'];

// for ( let i = 0; i < flowers.length; i++ ) {
//     console.log( flowers[i] );
// }

for ( let i = 0; i < employees.length; i++ ) {
    console.log(`${ employees[i] } tiene un salario de ${ salaries[i] }`);
}


 