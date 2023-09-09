"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const schema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
});
const Json = '{"id": 971020, "username": "Jeongwoo"}';
try {
    const user = schema.parse(Json);
    console.log(user.id);
    console.log(user.name);
}
catch (error) {
    console.error("런타임 에러:", error);
}
