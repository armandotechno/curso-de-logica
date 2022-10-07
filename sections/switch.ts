


export let weekDay:number = 5;

if ( weekDay <= 0 ) {
    // console.log('Día de la semana no permitido');
    throw new Error('Día de la semana no permitido')
} 

switch( weekDay ) {
    
    case 1:
        console.log('Es Lunes')
        break;
    case 2:
        console.log('Es Martes')
        break;
    case 3:
        console.log('Es Miércoles')
        break;
    default:
        console.log('No es ni Lunes, ni Martes, ni Miércoles');
    
}


