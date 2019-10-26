const faunadb = require('faunadb')

const secret = process.env.FAUNADB_ADMIN_SECRET

const q = faunadb.query
const client = new faunadb.Client({
  secret,
})

exports.handler = (event, context) => {
  console.log('Function `rsvp-read-all` invoked')
  return client
    .query(q.Paginate(q.Match(q.Ref('indexes/all_rsvps'))))
    .then((response) => {
      const rsvpRefs = response.data
      console.log('Rsvp refs', rsvpRefs)
      console.log(`${rsvpRefs.length} rsvps found`)
      // create new query out of rsvp refs. http://bit.ly/2LG3MLg
      const getAllRsvpDataQuery = rsvpRefs.map((ref) => q.Get(ref))
      // then query the refs
      return client.query(getAllRsvpDataQuery).then((ret) => ({
        statusCode: 201,
        body: JSON.stringify(ret),
        special: 'yeet',
      }))
    })
    .catch((error) => {
      console.log('error', error)
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      }
    })
}
