const faunadb = require('faunadb')


const q = faunadb.query
const secret = process.env.FAUNADB_ADMIN_SECRET

const client = new faunadb.Client({
  secret,
})

exports.handler = async (event, context) => {
  const data = JSON.parse(event.body)
  console.log(`Function: 'rsvp-create' invoked with data ${data}`)
  const RsvpItem = {
    data,
  }

  return client.query(q.Create(q.Ref('classes/rsvps'), RsvpItem))
    .then((response) => {
      console.log('success', response)
      /* Success! return the response with statusCode 200 */
      return {
        statusCode: 200,
        body: JSON.stringify(response),
      }
    }).catch((error) => {
      console.log('error', error)
      /* Error! return the error with statusCode 400 */
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      }
    })
}
