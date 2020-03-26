
let texto = 'hola';
console.log(texto.repeat(2));

const ESPACIOS =12;

let nombres = ['joel', 'lucero', 'otro joel', 'otra lucero'];
let telefonos = ['1233445', '654323456', '7543456778', '000000'];

for(i in nombres)
{
    let dif = ESPACIOS-nombres[i].length;
    console.log(nombres[i] + ' '.repeat(dif)+'|'+ telefonos[i]);
}


console.log('**********template literals****************');

function ObtenerNombre()
{
    return 'Joel Gaspar';
}

let nombre ='Joel';
let apellido ='gaspar';

let nombreCompleto = nombre +' '+apellido;

console.log(nombreCompleto);

let nombreCompleto2 = `el nombre completo es: ${nombre} ${apellido} nombrecompleto2`;
console.log(nombreCompleto2);

let nombreCompleto3 = `el nombre completo en 3 es: ${ObtenerNombre()}, ${2+2}`;

console.log(nombreCompleto3);


let multilinea = '<h1>titulo</h1>\n <p>hola mundo</p>'
console.log(multilinea);


let multilinea2 = `<h1 class="miclase">${nombreCompleto}</h1>
<p>hola mundo</p>
otro parrafo`;

console.log(multilinea2);


function etiqueta (literales, ...sustituciones)
{
    let resultado='';

    console.log(literales);
    console.log(sustituciones);

    for(let i =0; i < sustituciones.length; i++)
    {
        resultado += literales[i];
        resultado += sustituciones[i];

    }

    return resultado;
}

let unidades = 5, costo_unitario = 10;

let mensaje = etiqueta `${unidades} lapices cuentan ${unidades*costo_unitario} pesos.`;
console.log(mensaje);

console.log('++++++++++++valores crudos (raw)++++++++');

let mensaje1 = `hola \n mundo \\`;
let mensaje2 = String.raw`hola \n mundo \\`;
let mensaje3 = 'hola \n mundo \\';

console.log(mensaje1);
console.log(mensaje2);
console.log(mensaje3);


//parametros por defecto*********************

console.log('parametros por defecto*********************');

function saludar(fn = fnTemporal, persona = {nombre:'fernando'})
{
    console.log(typeof fn);
    if(typeof fn === 'undefined'){
        console.error('no es una funcion');
        return;
    }
fn();

console.log(persona);
}

function fnTemporal()
{
    console.log('hola mundo fn');
}

saludar();

//************argumentos */

console.log('argumentos************');

function argumentoss(num1 =1, num2=4){
    console.log(arguments);
}


argumentoss()

/*function agregar_alumno()
{
    debugger;
    console.log(arguments);
    for(var i = 1; i<arguments.length; i++){
    console.log(arguments[0].push(arguments[i]));
    }
    return arguments[0];
}

var alumnos_arr = ['Joel'];

var alumnos_arr2 = agregar_alumno(alumnos_arr, 'lucero', 'pablito', 'juanito');

console.log(alumnos_arr2);*/


function agregar_alumno(arr_alumnos, ...alumnos)
{
   // debugger;
    
    for(let i = 0; i<alumnos.length; i++){
    arr_alumnos.push(alumnos[i]);
    }
    return arr_alumnos;
}

let alumnos_arr = ['Joel'];

let alumnos_arr2 = agregar_alumno(alumnos_arr, 'lucerooo', 'pablito', 'juanito');

console.log(alumnos_arr2);

/* solo se puede tener un parametro rest y este debe ir al final de los parametros
function juntar_nombres (...apellidos, ...nombres)
{

}*/

//el operador spread(...) separa los numeros de un arreglo para poder enviarlos como parametros
var numeros = [1,20,3,4,5,6,7];

var max = Math.max(...numeros);

console.log(max);


//el operador spread(...) extrae cada unas de las propiedades del objeto para asignarlas a un nuevo objeto, esto con la finaldiad de 
//desvincularlo y asi, poder modificar los propiedades de dicho objeto (clonación)
let persona1 = {
    nombre:'fernando',
    edad:33
};

let persona2 = {
    nombre: 'joel',
    edad:34,
    direccion:'sabalo',
    estadocivil: 'soltero',
    telefono:885522114
};

persona1 = {
    
    ...persona2
    ,
    ...persona1
}

console.log(persona1);
console.log(persona2);

//funciones de flecha - arrow functions

var miFuncion2 = function(valor){
    return valor;
}

let mifuncion1 = valor => valor;

var saludarPersona = function(nombre){
    var salida = 'Hola'+nombre;
    return salida;
}

let saludarPersona1 = nombre =>{
    let salida =  `hola ${nombre}`;
    return salida;
}

console.log(saludarPersona1('Joel'));
console.log(saludarPersona('Joel'));


var obtenerLibro = function(id){
    return{
        id:id,
        nombre : 'mi book fav'
    }
}

let obtenerLibro2 = id=>(
    {
        id:id, nombre:'mi otro book'
    }
)

console.log(obtenerLibro('1'));
console.log(obtenerLibro2('2'));


//funciones anonimas

var saludo1 = function(nombre){
    return 'hola ' + nombre;
}('el juel');

console.log(saludo1);


let saludosss= (saludo2 = nombre=> 'hola '+ nombre)('otro juel');

console.log(saludosss);

console.log(+0==-0);
console.log(+0===-0);
console.log(Object.is("+0", "-0"));

var objReceptor= {};
var objDonador = {
    get nombre(){
        return 'mi nombreee'
    }
};

console.log(Object.assign(objReceptor, objDonador));

var objectoOwn = {
    c:1,
    0:1,
    x:1,
    15:1,
    r:1,
    3:1,
    b:1
};

objectoOwn.d = 1;
objectoOwn["2"]=1;
objectoOwn["a"]=1;

console.log(Object.getOwnPropertyNames(objectoOwn).join(","));
console.log(Object.keys(objectoOwn));
console.log(JSON.stringify(objectoOwn));

for(i in Object.keys(objectoOwn))
{
    console.log(Object.keys(objectoOwn)[i]);
}