axios.get('/api/owners',)
  .then(({ data: owners }) => {
    owners.forEach(owner => {
      let ownerElem = document.createElement('div')
      ownerElem.innerHTML = `
        <h5>${owner.name}</h5>
        <h6>${owner.email}</h6>
        <h6>${owner.phone}</h6>
        <p>
        <textarea class="pets" cols="30" rows="10">
        ${pet.ownerId},
        ${pet.ownerId.name},
        ${pet.ownerId.breed},
        ${pet.ownerId.age}
        </textarea>
        <button class="" data-id="${pet.id}">Add Pets</button>
        </p>
        <button class="deletePet" data-id="${pet.id}">X</button>
        <hr>
      `
      document.getElementById('owners').append(ownerElem)
    })
  })
  .catch(err => console.log(err))

document.getElementById('search').addEventListener('click', event => {
  event.preventDefault()

  axios.post('/api/owners', {
    pet: document.getElementById('pet.ownerId').value,
    name: document.getElementById('pet.ownerId.name').value,
    breed: document.getElementById('pet.ownerId.breed').value,
    age: document.getElementById('pet.ownerId.age').value
  })
    .then(({ data: owner }) => {
      let ownerElem = document.createElement('div')
      ownerElem.innerHTML = `
        <h5>${owner.name}</h5>
        <h6>${owner.email}</h6>
        <h6>${owner.phone}</h6>
        <p>
        <textarea class="pets" cols="30" rows="10">
        ${pet.ownerId},
        ${pet.ownerId.name},
        ${pet.ownerId.breed},
        ${pet.ownerId.age}
        </textarea>
        <button class="" data-id="${pet.id}">Add Pets</button>
        </p>
        <button class="deleteMovie" data-id="${pet.id}">X</button>
        <hr>
      `
      document.getElementById('owner').append(ownerElem)

      document.getElementById('pet.ownerId').value = ''
      document.getElementById('pet.ownerId.name').value = ''
      document.getElementById('pet.ownerId.breed').value = ''
      document.getElementById('pet.ownerId.age').value = ''
    })
    .catch(err => console.error(err))
})

document.addEventListener('click', event => {
  if (event.target.className === 'deletePet') {
    axios.delete(`/api/owner/${event.target.dataset.id}`)
      .then(() => {
        event.target.parentNode.remove()
      })
      .catch(err => console.error(err))

  } else if (event.target.className === 'addPet') {
    let plot = event.target.previousSibling.previousSibling.value
    let id = event.target.dataset.id
    axios.put(`/api/owners/${id}`, { pet })
      .then(() => {
        alert('New Pet Added')
      })
      .catch(err => console.error(err))
  }
})