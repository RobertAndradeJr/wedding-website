const secret = process.env.NODE_ENV === 'production' ? process.env.FAUNA_DB_SERVERSECRET_CLIENT : process.env.FAUNA_DB_SERVERSECRET_ADMIN

export default {
  secret,
}
