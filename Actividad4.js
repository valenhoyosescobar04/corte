const colaDeEspera = {
    turnos: [],
    contador: 1,
  
    tomarTurno: function () {
      const turno = this.contador++;
      this.turnos.push(turno);
      return turno;
    },
  
    llamarCliente: function () {
      if (this.turnos.length === 0) {
        return "No hay clientes en espera";
      }
      const cliente = this.turnos.shift();
      return `Llamando al cliente ${cliente}`;
    },
  
    mostrarColaDeEspera: function () {
      return `Clientes en espera: ${this.turnos.join(", ")}`;
    },
  
    contarTurnos: function () {
      return `Turnos tomados: ${this.contador - 1}`;
    },
  };
  
  console.log(colaDeEspera.tomarTurno()); // Tomar un turno
  console.log(colaDeEspera.tomarTurno()); // Tomar otro turno
  console.log(colaDeEspera.llamarCliente()); // Llamar al cliente
  console.log(colaDeEspera.mostrarColaDeEspera()); // Mostrar la cola de espera
  console.log(colaDeEspera.contarTurnos()); // Contar los turnos
  