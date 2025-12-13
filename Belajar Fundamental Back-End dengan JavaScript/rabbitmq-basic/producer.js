const amqp = require('amqplib');

const init = async () => {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  const queue = 'dicoding';
  const message = 'selamat belajar rabbit-mq';

  // buat queue
  await channel.assertQueue(queue, {
    durable: true
  });

  // kirim pesan dalam bentuk buffer
  channel.sendToQueue(queue, Buffer.from(message));
  console.log('pesan berhail dikirim');

  //tutup connection dengan jeda 1s
  setTimeout(() => {
    connection.close();
  }, 1000);
};

init();
