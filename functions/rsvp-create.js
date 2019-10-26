const faunadb = require('faunadb')
const secret = require('./utils/getSecret')

const q = faunadb.query
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

function createRsvp(data) {
  return fetch('/.netlify/functions/rsvps-create', {
    body: JSON.stringify(data),
    method: 'POST',
  }).then((response) => response.json())
}

// Rsvp data
const myRsvp = {
  title: 'My rsvp title',
  completed: false,
}

// create it!
createRsvp(myRsvp).then((response) => {
  console.log('API response', response)
  // set app state
}).catch((error) => {
  console.log('API error', error)
})
