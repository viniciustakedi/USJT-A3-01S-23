"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kafkaConsumer = void 0;
const _1 = require(".");
const kafkaConsumer = async (topic) => {
    const consumer = _1.kafka.consumer({ groupId: 'USJT-A3-01S-23' });
    await consumer.connect();
    await consumer.subscribe({ topic, fromBeginning: true });
    return consumer;
};
exports.kafkaConsumer = kafkaConsumer;
//# sourceMappingURL=kafka.consumer.js.map