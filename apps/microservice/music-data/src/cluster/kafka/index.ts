import { Kafka } from 'kafkajs'

const kafka = new Kafka({
  brokers: ['climbing-gator-14806-us1-kafka.upstash.io:9092'],
  sasl: {
    mechanism: 'scram-sha-256',
    username: 'Y2xpbWJpbmctZ2F0b3ItMTQ4MDYk60TMw6yNtCWmDDqsTRyd20xGvnshA_xWMcQ',
    password: 'bc52db987f144d93857f2414db0f4001'
  },
  ssl: true
})

export { kafka }
