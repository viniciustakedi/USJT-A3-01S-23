"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserConsumer = void 0;
const kafka_consumer_1 = require("../kafka.consumer");
async function CreateUserConsumer() {
    const consumer = await (0, kafka_consumer_1.kafkaConsumer)('USER_TRACKS');
    await consumer.run({
        eachMessage: async ({ message }) => {
            const messageToString = message.value.toString();
            const user = JSON.parse(messageToString);
            console.log('USER TOP TRACKS CONSUMER', user);
        }
    });
}
exports.CreateUserConsumer = CreateUserConsumer;
CreateUserConsumer();
//# sourceMappingURL=createUser.consumer.js.map