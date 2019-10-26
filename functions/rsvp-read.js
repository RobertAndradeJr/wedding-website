const faunadb = require('faunadb')
const getId = require('./utils/getId')
const secret = require('./utils/getSecret')

const q = faunadb.query
const client = new faunadb.Client({
  secret,
})

exports.handler = (event, context) => {
  const id = getId(event.path)
  console.log(`Function 'rsvp-read' invoked. Read id: ${id}`)
  return client
    .query(q.Get(q.Ref(`classes/rsvps/${id}`)))
    .then((response) => {
      console.log('success', response)
      return {
        statusCode: 200,
        body: JSON.stringify(response),
      }
    })
    .catch((error) => {
      console.log('error', error)
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      }
    })
}
