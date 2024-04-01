import type { Payload } from 'payload'

export function isMongoose(_payload?: Payload) {
  return _payload?.db?.name === 'mongodb' || ['mongodb'].includes(process.env.PAYLOAD_DATABASE)
}
