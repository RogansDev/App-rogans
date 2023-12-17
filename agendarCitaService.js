// CitasService.js
export const agendarCita = (datosCita) => {
  console.log('Datos de la cita:', datosCita);

  return fetch('https://rogansya.com/rogans-app/index.php?accion=agendar', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(datosCita),
  })
  .then(response => response.json()) // Convirtiendo la respuesta a JSON
  .then(data => {
    console.log('Respuesta del servidor:', data); // Mostrando la respuesta en consola
    return data; // Devolviendo los datos para su uso posterior
  });
};
