import { z } from "zod";

const schema = z.object({
  id: z.number(),
  name: z.string(),
});

type User = z.infer<typeof schema>;

const Json = '{"id": 971020, "username": "Jeongwoo"}';

try {
  const user: User = schema.parse(Json);
  console.log(user.id);
  console.log(user.name);
} catch (error) {
  console.error("런타임 에러:", error);
}

/* 런타임 에러: ZodError: [
  {
    "code": "invalid_type",
    "expected": "object",
    "received": "string",
    "path": [],
    "message": "Expected object, received string"
  }
] */
