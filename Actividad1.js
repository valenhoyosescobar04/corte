// Datos de ejemplo de cuentas y PINs
const cuentas = {
  '1234567890': { saldo: 1000000, pin: '1234' },
  '9876543210': { saldo: 500000, pin: '5678' },
};

// Función para validar el PIN
function validarPIN(documento, pin) {
  const cuenta = cuentas[documento];
  return cuenta && cuenta.pin === pin;
}

// Función para realizar un retiro
function realizarRetiro(documento, monto) {
  const cuenta = cuentas[documento];
  if (cuenta && cuenta.saldo >= monto && monto % 50000 === 0) {
    cuenta.saldo -= monto;
    return `Retiro exitoso. Saldo actual: $${cuenta.saldo}`;
  } else {
    return 'No se pudo realizar el retiro.';
  }
}

// Función para realizar un depósito
function realizarDeposito(documento, monto) {
  const cuenta = cuentas[documento];
  if (cuenta && monto > 0) {
    cuenta.saldo += monto;
    return `Depósito exitoso. Saldo actual: $${cuenta.saldo}`;
  } else {
    return 'No se pudo realizar el depósito.';
  }
}

// Ejemplo de uso
const documento = '1234567890';
const pin = '1234';

if (validarPIN(documento, pin)) {
  console.log(realizarRetiro(documento, 50000)); // Realizar un retiro de $50000
  console.log(realizarDeposito(documento, 100000)); // Realizar un depósito de $100000
  console.log(`Saldo actual: $${cuentas[documento].saldo}`);
} else {
  console.log('PIN incorrecto.');
}