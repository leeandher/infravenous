import { list } from '@keystone-next/keystone/schema'
import { password, relationship, text, timestamp } from '@keystone-next/fields'

export const User = list({
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    devices: relationship({
      ref: 'Device.users',
      many: true,
      ui: {
        itemView: { fieldMode: 'edit' },
      },
    }),
    attempts: relationship({
      ref: 'Attempt.user',
      many: false,
      ui: {
        itemView: { fieldMode: 'edit' },
      },
    }),
  },
})
