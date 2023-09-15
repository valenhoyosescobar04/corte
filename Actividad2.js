class Reserva {
    constructor(nombre, pais, numPersonas, periodoEstadia, numPersonasOcupando, trajoMascota) {
      this.nombre = nombre;
      this.pais = pais;
      this.numPersonas = numPersonas;
      this.periodoEstadia = periodoEstadia;
      this.numPersonasOcupando = numPersonasOcupando;
      this.trajoMascota = trajoMascota;
    }
  }
  
  class Habitacion {
    constructor(tipo, fumador) {
      this.tipo = tipo;
      this.fumador = fumador;
      this.reservas = [];
      this.capacidadMaxima = this.calcularCapacidadMaxima();
    }
  
    calcularCapacidadMaxima() {
      if (this.tipo === 'individual') {
        return 2;
      } else if (this.tipo === 'doble') {
        return 4;
      } else if (this.tipo === 'familiar') {
        return 6;
      }
    }
  
    agregarReserva(reserva) {
      if (this.reservas.length < this.capacidadMaxima) {
        this.reservas.push(reserva);
        console.log(`Reserva agregada para la habitación ${this.tipo}.`);
      } else {
        console.log(`La habitación ${this.tipo} está llena.`);
      }
    }
  }
  
  const hotel = {
    habitaciones: {
      individual: new Habitacion('individual', false),
      doble: new Habitacion('doble', false),
      familiar: new Habitacion('familiar', false),
      individualFumador: new Habitacion('individual', true),
      dobleFumador: new Habitacion('doble', true),
      familiarFumador: new Habitacion('familiar', true),
    },
    totalHabitacionesReservadas: 0,
  };
  
  function hacerReserva(nombre, pais, numPersonas, periodoEstadia, trajoMascota, tipoHabitacion, fumador) {
    const habitacion = hotel.habitaciones[`${tipoHabitacion}${fumador ? 'Fumador' : ''}`];
  
    if (habitacion) {
      const reserva = new Reserva(nombre, pais, numPersonas, periodoEstadia, 1, trajoMascota);
  
      habitacion.agregarReserva(reserva);
      hotel.totalHabitacionesReservadas++;
    } else {
      console.log('Habitación no disponible.');
    }
  }
  
  hacerReserva('Cliente 1', 'País 1', 2, '01/09/2023 - 05/09/2023', false, 'individual', false);
  hacerReserva('Cliente 2', 'País 2', 4, '15/09/2023 - 20/09/2023', true, 'doble', false);
  hacerReserva('Cliente 3', 'País 3', 6, '10/09/2023 - 14/09/2023', true, 'familiar', true);
  
  console.log(`Total de habitaciones reservadas: ${hotel.totalHabitacionesReservadas}`);
  