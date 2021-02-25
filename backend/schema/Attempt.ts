import { list } from "@keystone-next/keystone/schema";
import {
  relationship,
  integer,
  timestamp,
  virtual,
} from "@keystone-next/fields";

const attemptResultResolver = (attemptItem) => {
  return attemptItem?.confidence >= attemptItem?.threshold
    ? "Success"
    : "Failure";
};

export const Attempt = list({
  fields: {
    confidence: integer({ isRequired: true }),
    threshold: integer({ isRequired: true }),
    result: virtual({ resolver: attemptResultResolver }),
    scanTime: timestamp({ isRequired: true }),
    user: relationship({
      ref: "User.attempts",
      many: false,
    }),
    device: relationship({
      ref: "Device.attempts",
      many: false,
    }),
  },
  ui: {
    labelField: "scanTime",
  },
});
