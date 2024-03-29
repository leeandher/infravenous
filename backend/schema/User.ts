import { list } from "@keystone-next/keystone/schema";
import { password, relationship, text, timestamp } from "@keystone-next/fields";

export const User = list({
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    createdAt: timestamp({ isRequired: true }),
    devices: relationship({
      ref: "Device.users",
      many: true,
    }),
    attempts: relationship({
      ref: "Attempt.user",
      many: true,
    }),
  },
});
