import { Attempt } from './schema/Attempt'
import { Device } from './schema/Device'
import { User } from './schema/User'
import { createAuth } from '@keystone-next/auth'
import { config, createSchema } from '@keystone-next/keystone/schema'
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session'
import 'dotenv/config'

const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost/infravenous'

const sessionConfig = {
  maxAge: 60 * 60 * 24,
  secret: process.env.COOKIE_SECRET,
}

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // TODO: Add roles here
  },
})

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL, process.env.MOBILE_APP],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseUrl,
    },
    lists: createSchema({
      Attempt,
      Device,
      User,
    }),
    ui: {
      // If the user is signed in
      // TODO: Permit based on role
      isAccessAllowed: ({ session }) => !!session?.data,
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: 'id',
    }),
  })
)
