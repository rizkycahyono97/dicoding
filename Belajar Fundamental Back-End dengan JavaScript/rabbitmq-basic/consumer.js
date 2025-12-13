const amqp = require('amqplib');

const init = async () => {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  const queue = 'dicoding';

  await channel.assertQueue(queue, {
    durable: true
  });

  //menerima pesan dari queue
  channel.consume(
    queue,
    message => {
      console.log(
        `menerima pesan dari ${queue}: ${message.content.toString()}`
      );
    },
    { noAck: true }
  );
};

init();
