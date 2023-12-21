// Importa el SDK de MercadoPago
import mercadopago from 'mercadopago';

// Configura el SDK con tu Access Token
mercadopago.configure({
  access_token: 'TEST-5499647130964605-021712-a89cf7f98d88c505af7c41c425010e7b-1301161013'
});

// Función para crear un pago
const createPayment = async (paymentData) => {
  try {
    // Crea un objeto de pago con los detalles necesarios
    let payment = {
      transaction_amount: Number(paymentData.amount),
      description: paymentData.description,
      payment_method_id: paymentData.paymentMethodId,
      payer: {
        email: paymentData.payerEmail
      },
      // ... otros campos según sea necesario
    };

    // Realiza la solicitud de pago
    const response = await mercadopago.payment.create(payment);

    // Devuelve la respuesta de la solicitud
    return response;
  } catch (error) {
    // Manejo de errores
    console.error('Error al crear el pago:', error);
    throw error;
  }
};

const testPayment = async () => {
    try {
      let paymentData = {
        transaction_amount: 1.00, // Monto pequeño para la prueba
        description: 'Pago de prueba',
        payment_method_id: 'visa', // Asegúrate de usar un método válido para pruebas
        payer: {
          email: 'test_user@test.com' // Correo electrónico de prueba
        }
      };
  
      const response = await mercadopago.payment.create(paymentData);
      console.log('Respuesta de pago:', response);
    } catch (error) {
      console.error('Error al crear el pago:', error);
    }
  };
  
  testPayment();
  

// Exporta la función para su uso en otras partes de tu aplicación
export { createPayment, testPayment };
