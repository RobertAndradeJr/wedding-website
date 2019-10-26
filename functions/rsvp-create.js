const faunadb = require('faunadb')


const q = faunadb.query
const secret = process.env.FAUNADB_ADMIN_SECRET

const client = new faunadb.Client({
  secret,
})

// eslint-disable-next-line no-unused-vars
exports.handler = async (event, context) => {
  const data = JSON.parse(event.body)
  const RsvpItem = {
    data,
  }

  return client.query(q.Create(q.Ref('classes/rsvps'), RsvpItem))
  /* Success! return the response with statusCode 200 */
    .then((response) => ({
      statusCode: 200,
      body: JSON.stringify(response),
      /* Error! return the error with statusCode 400 */
    })).catch((error) => ({
      statusCode: 400,
      body: JSON.stringify(error),
    }))
}
