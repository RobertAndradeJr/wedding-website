const faunadb = require('faunadb')

const secret = process.env.FAUNADB_ADMIN_SECRET

const q = faunadb.query
const client = new faunadb.Client({
  secret,
})

// eslint-disable-next-line no-unused-vars
exports.handler = (event, context) => client
  .query(q.Paginate(q.Match(q.Ref('indexes/all_rsvps'))))
  .then(async (response) => {
    const rsvpRefs = response.data
    const getAllRsvpDataQuery = rsvpRefs.map((ref) => q.Get(ref))
    const ret = await client.query(getAllRsvpDataQuery)
    return ({
      statusCode: 201,
      body: JSON.stringify(ret),
    })
  })
  .catch((error) => ({
    statusCode: 400,
    body: JSON.stringify(error),
  }))
