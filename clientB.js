import kafka from 'kafka-node';

const client = new kafka.KafkaClient(
    {
        kafkaHost: 'localhost:9092', // kafka broker
    }
);

client.on('error', (err) => {
    console.log('clientB: client error: ', err);
});

const topics = [
    { 
        topic: 'test',
        partition: 0
    }
];
const consumer = new kafka.Consumer(client, topics);

consumer.on('message', (data) => {
    console.log('clientB: consumer recieved data: ', data);
});

consumer.on('error', (err) => {
    console.log('clientB: consumer error: ', err);
});