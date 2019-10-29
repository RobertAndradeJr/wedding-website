const faunadb = require('faunadb')
const getId = require('./utils/getId')
const getSecret = require('./utils/getSecret')

const secret = getSecret()

const q = faunadb.query
const client = new faunadb.Client({
  secret,
})

// eslint-disable-next-line no-unused-vars
exports.handler = (event, context) => {
  const id = getId(event.path)
  // console.log(`Function 'rsvp-read' invoked. Read id: ${id}`)
  return client
    .query(q.Get(q.Ref(`classes/rsvps/${id}`)))
    .then((response) => ({
      statusCode: 200,
      body: JSON.stringify(response),
    }))
    .catch((error) => ({
      statusCode: 400,
      body: JSON.stringify(error),
    }))
}
