const create = (data) => fetch('/.netlify/functions/rsvp-create', {
  body: JSON.stringify(data),
  method: 'POST',
}).then((response) => response.json())

const readAll = () => fetch('/.netlify/functions/rsvp-read-all').then((response) => response.json())

const update = (rsvpId, data) => fetch(`/.netlify/functions/rsvps-update/${rsvpId}`, {
  body: JSON.stringify(data),
  method: 'POST',
}).then((response) => response.json())

const deleteRsvp = (rsvpId) => fetch(`/.netlify/functions/rsvps-delete/${rsvpId}`, {
  method: 'POST',
}).then((response) => response.json())

const batchDeleteRsvp = (rsvpIds) => fetch('/.netlify/functions/rsvps-delete-batch', {
  body: JSON.stringify({
    ids: rsvpIds,
  }),
  method: 'POST',
}).then((response) => response.json())

export default {
  create,
  readAll,
  update,
  delete: deleteRsvp,
  batchDelete: batchDeleteRsvp,
}
