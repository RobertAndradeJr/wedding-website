const faunadb = require('faunadb')
const getSecret = require('./utils/getSecret')

const secret = getSecret()

const q = faunadb.query
const client = new faunadb.Client({
  secret,
})

// eslint-disable-next-line no-unused-vars
exports.handler = async (event, context) => {
  try {
    const response = await client
      // console.log('Function `rsvp-read-all` invoked')
      .query(q.Paginate(q.Match(q.Ref('indexes/all_rsvps'))))
    const rsvpRefs = response.data
    // console.log('Rsvp refs', rsvpRefs)
    // console.log(`${rsvpRefs.length} rsvps found`)
    // create new query out of rsvp refs. http://bit.ly/2LG3MLg
    const getAllRsvpDataQuery = rsvpRefs.map((ref) => q.Get(ref))
    const ret = await client.query(getAllRsvpDataQuery)
    return ({
      statusCode: 200,
      body: JSON.stringify(ret),
    })
  } catch (error) {
    return ({
      // console.log('error', error)
      statusCode: 400,
      body: JSON.stringify(error),
    })
  }
}
