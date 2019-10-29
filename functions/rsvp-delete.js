const faunadb = require('faunadb')
const getId = require('./utils/getId')
const getSecret = require('./utils/getSecret')

const secret = getSecret()

const q = faunadb.query
const client = new faunadb.Client({
  secret,
})

// eslint-disable-next-line no-unused-vars
exports.handler = async (event, context) => {
  const id = getId(event.path)
  // console.log(`Function 'rsvp-delete' invoked. delete id: ${id}`)
  return client.query(q.Delete(q.Ref(`classes/rsvps/${id}`)))
    .then((response) => ({
      // console.log('success', response)
      statusCode: 200,
      body: JSON.stringify(response),
    })).catch((error) => ({
      // console.log('error', error)
      statusCode: 400,
      body: JSON.stringify(error),
    }))
}
