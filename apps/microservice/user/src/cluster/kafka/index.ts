import { Kafka } from 'kafkajs'

const kafka = new Kafka({
  brokers: ['golden-werewolf-10765-us1-kafka.upstash.io:9092'],
  sasl: {
    mechanism: 'scram-sha-256',
    username: 'Z29sZGVuLXdlcmV3b2xmLTEwNzY1JDL-c5lusHLBRXjBklEHWLbaBLllzhiFCLs',
    password: '7acdd74bb3c4464abee224710ffb964e'
  },
  ssl: true
})

export { kafka }
