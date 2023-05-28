"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kafka = void 0;
const kafkajs_1 = require("kafkajs");
const kafka = new kafkajs_1.Kafka({
    brokers: ['golden-werewolf-10765-us1-kafka.upstash.io:9092'],
    sasl: {
        mechanism: 'scram-sha-256',
        username: 'Z29sZGVuLXdlcmV3b2xmLTEwNzY1JDL-c5lusHLBRXjBklEHWLbaBLllzhiFCLs',
        password: '7acdd74bb3c4464abee224710ffb964e'
    },
    ssl: true
});
exports.kafka = kafka;
//# sourceMappingURL=index.js.map