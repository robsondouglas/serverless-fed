self.addEventListener("push", function (event) {
  console.log(event)
  try{
    const message = event.data.json();
    self.registration.showNotification( message.title, { body: message.text });
  }
  catch(ex)
  {
    console.log('Notificação com formato inválido. Use o seguinte formato: ', '{ "title": "TESTE", "text": "Teste de notificação" }')
    console.log('Dados recebidos:', event)
  }
})