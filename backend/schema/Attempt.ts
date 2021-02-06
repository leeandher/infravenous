import { list } from '@keystone-next/keystone/schema'
import { relationship, integer, timestamp } from '@keystone-next/fields'

export const Attempt = list({
  fields: {
    confidence: integer({ isRequired: true }),
    time: timestamp({ isRequired: true }),
    user: relationship({
      ref: 'User.attempts',
      many: false,
    }),
    device: relationship({
      ref: 'Device.attempts',
      many: false,
    }),
  },
})
