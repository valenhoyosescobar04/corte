let totalUsuariosAtendidos = 0;
let usuariosAtendidosLlamadaTelefonica = 0;
let usuariosAtendidosAsesoria = 0;
let usuariosAtendidosEstudiante = 0;
let usuariosAtendidosDirectivo = 0;

function registrarAtencion(cedula, tipoAtencion) {
  totalUsuariosAtendidos++;

  if (tipoAtencion === 'llamada') {
    usuariosAtendidosLlamadaTelefonica++;
  } else if (tipoAtencion === 'asesoria') {
    usuariosAtendidosAsesoria++;
  }

  console.log(`Atención registrada para la cédula ${cedula}, tipo: ${tipoAtencion}`);
}

function registrarAsesoria(cedula, tipoAsesoria) {
  if (tipoAsesoria === 'estudiante') {
    usuariosAtendidosEstudiante++;
  } else if (tipoAsesoria === 'directivo') {
    usuariosAtendidosDirectivo++;
  }

  console.log(`Asesoría registrada para la cédula ${cedula}, tipo: ${tipoAsesoria}`);
}

while (true) {
  const cedula = prompt('Ingrese su número de cédula (o "salir" para finalizar):');
  if (cedula.toLowerCase() === 'salir') {
    break;
  }

  const tipoAtencion = prompt('Ingrese el tipo de atención ("llamada" o "asesoria"):');

  if (tipoAtencion === 'llamada') {
    registrarAtencion(cedula, 'llamada');
  } else if (tipoAtencion === 'asesoria') {
    const tipoAsesoria = prompt('Ingrese el tipo de asesoría ("estudiante" o "directivo"):');
    registrarAtencion(cedula, 'asesoria');
    registrarAsesoria(cedula, tipoAsesoria);
  } else {
    console.log('Tipo de atención no válido. Use "llamada" o "asesoria".');
  }
}

console.log('--- Estadísticas de Atención ---');
console.log(`Total de usuarios atendidos: ${totalUsuariosAtendidos}`);
console.log(`Usuarios atendidos por llamada telefónica: ${usuariosAtendidosLlamadaTelefonica}`);
console.log(`Usuarios atendidos por asesoría: ${usuariosAtendidosAsesoria}`);
console.log(`Usuarios atendidos como estudiantes: ${usuariosAtendidosEstudiante}`);
console.log(`Usuarios atendidos como directivos: ${usuariosAtendidosDirectivo}`);
