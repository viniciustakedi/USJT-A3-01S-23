"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaSendMessage = void 0;
const common_1 = require("@nestjs/common");
const _1 = require(".");
let KafkaSendMessage = class KafkaSendMessage {
    async execute(topic, payload) {
        const producer = _1.kafka.producer({
            allowAutoTopicCreation: true
        });
        await producer.connect();
        await producer.send({
            topic,
            messages: [
                { value: JSON.stringify(payload) }
            ]
        });
        console.log(`MESSAGE SEND TO TOPIC ${topic}`);
        console.log(payload);
        await producer.disconnect();
    }
};
KafkaSendMessage = __decorate([
    (0, common_1.Injectable)()
], KafkaSendMessage);
exports.KafkaSendMessage = KafkaSendMessage;
//# sourceMappingURL=producer.js.map