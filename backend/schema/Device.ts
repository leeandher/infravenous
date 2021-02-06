import { list } from '@keystone-next/keystone/schema'
import { relationship, text } from '@keystone-next/fields'

export const Device = list({
  fields: {
    name: text({ isRequired: true }),
    description: text({ isRequired: false }),
    users: relationship({
      ref: 'User.devices',
      many: true,
      ui: {
        itemView: { fieldMode: 'edit' },
      },
    }),
    attempts: relationship({
      ref: 'Attempt.device',
      many: true,
      ui: {
        itemView: { fieldMode: 'edit' },
      },
    }),
  },
})
