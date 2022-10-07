

export let base: number  = 10;
export let limit: number = 50;

// for ( let i = 1; i <= 50; i++ ) {
//     console.log(`${ base } x ${ i } = ${ base * i }`);

//     if ( i === 5 ) {
//         break;
//     }
    
// }

let i = 1;
// while ( i <= limit ) {
//     console.log(`${ base } x ${ i } = ${ base * i }`);
//     i++;
// }

do {
    console.log(`${ base } x ${ i } = ${ base * i }`);
    i++;
} while ( i <= limit );





