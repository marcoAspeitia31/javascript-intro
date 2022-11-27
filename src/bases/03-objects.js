const persona = {
    nombre: 'Tony',
    apellido: 'Starck',
    edad: 45,
    direccion: {
        ciudad: 'NewYork',
        zip: 132456,
        lat: 19.564321,
        lng: -99.87943
    }
}

const persona2 = { ...persona }
//El operador spread rompe la referencia de un objeto y crea un nuevo
//objeto partiendo de las propiedades del objeto inicial

persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)