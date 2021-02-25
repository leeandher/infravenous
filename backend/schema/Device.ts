import { list } from "@keystone-next/keystone/schema";
import { integer, relationship, text } from "@keystone-next/fields";

export const Device = list({
  fields: {
    name: text({ isRequired: true }),
    description: text({ isRequired: false }),
    threshold: integer({ isRequired: true }),
    users: relationship({
      ref: "User.devices",
      many: true,
    }),
    attempts: relationship({
      ref: "Attempt.device",
      many: true,
    }),
  },
});
