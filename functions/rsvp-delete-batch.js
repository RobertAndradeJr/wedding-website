const faunadb = require('faunadb')
const getSecret = require('./utils/getSecret')

const secret = getSecret()

const q = faunadb.query
const client = new faunadb.Client({
  secret,
})

// eslint-disable-next-line no-unused-vars
exports.handler = async (event, context) => {
  const data = JSON.parse(event.body)
  // console.log('data', data)
  // console.log('Function `todo-delete-batch` invoked', data.ids)
  // construct batch query from IDs
  const deleteAllCompletedTodoQuery = data.ids.map((id) => q.Delete(q.Ref(`classes/todos/${id}`)))
  // Hit fauna with the query to delete the completed items
  return client
    .query(deleteAllCompletedTodoQuery)
    .then((response) => ({
      // console.log('success', response)
      statusCode: 200,
      body: JSON.stringify(response),
    }))
    .catch((error) => ({
      // console.log('error', error)
      statusCode: 400,
      body: JSON.stringify(error),
    }))
}
