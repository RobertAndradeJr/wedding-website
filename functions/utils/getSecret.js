module.exports = function getSecret() {
  const secret = process.env.NODE_ENV === 'production' ? process.env.FAUNADB_CLIENT_SECRET : process.env.FAUNADB_ADMIN_SECRET
  return secret
}
