import kafka from 'kafka-node';

const client = new kafka.KafkaClient(
    {
        kafkaHost: 'localhost:9092', // kafka broker
    }
);

client.on('error', (err) => {
    console.log('clientA: client error: ', err);
});

const producer = new kafka.Producer(client);

const msgs = [
    {
        topic: 'test',
        messages: 'first message',
    },
    {
        topic: 'test',
        messages: 'second message',
    }
];

producer.on('ready', () => {
    console.log('clientA: producer ready');
    producer.send(msgs, (err, data) => {
        if (err) {
            console.log('clientA: producer recived error: ', err);
        }
        console.log('clientA: producer recieved data: ', data);
    });
});

producer.on('error', (err) => {
    console.log('clientA: producer error: ', err);
});