

//* 7- Crear una función que reciba 3 argumentos numéricos ( a, b, c), la función se debe de llamar
//* max, la función debe de determinar cual es el mayor de los 3 y retornarlo… la función debe de
//* trabajar así:
//* let maxValue = max( 5, 2, 6);
//* console.log( maxValue ); // 6

function max( a: number, b: number, c: number ) {

    if ( a > b  ) {
        return ( a > c ) ? a : c;
    }

    if ( b > c ) {
        return b;
    }  

    return ( a > c ) ? a : c;
    
}

let maxValue = max( 11, 22, 33 );

console.log( maxValue );

export {};
