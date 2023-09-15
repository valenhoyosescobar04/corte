const sistemaCitasMedicas = {
    citas: [],
  
    programarCita: function (nombrePaciente, fecha, hora, medico) {
      const cita = {
        nombrePaciente,
        fecha,
        hora,
        medico,
      };
  
      this.citas.push(cita);
      console.log(`Cita programada para ${nombrePaciente} con el médico ${medico} el ${fecha} a las ${hora}.`);
    },
  
    verCitasProgramadas: function () {
      if (this.citas.length === 0) {
        console.log('No hay citas programadas.');
      } else {
        console.log('--- Citas Programadas ---');
        this.citas.sort((a, b) => {
          // Ordenar citas por fecha y hora
          const fechaA = new Date(a.fecha + ' ' + a.hora);
          const fechaB = new Date(b.fecha + ' ' + b.hora);
          return fechaA - fechaB;
        });
  
        this.citas.forEach((cita, index) => {
          console.log(`${index + 1}. ${cita.nombrePaciente} - ${cita.medico} - ${cita.fecha} a las ${cita.hora}`);
        });
      }
    },
  
    cancelarCita: function (indice) {
      if (indice >= 0 && indice < this.citas.length) {
        const citaCancelada = this.citas.splice(indice, 1);
        console.log(`Cita cancelada: ${citaCancelada[0].nombrePaciente} - ${citaCancelada[0].medico}`);
      } else {
        console.log('Índice de cita no válido.');
      }
    },
  };
  
  sistemaCitasMedicas.programarCita('Juan Pérez', '2023-09-15', '10:00', 'Dr. García');
  sistemaCitasMedicas.programarCita('María López', '2023-09-16', '15:30', 'Dra. Rodríguez');
  sistemaCitasMedicas.programarCita('Carlos Ruiz', '2023-09-15', '11:30', 'Dr. García');
  sistemaCitasMedicas.verCitasProgramadas();
  sistemaCitasMedicas.cancelarCita(0);
  sistemaCitasMedicas.verCitasProgramadas();
  