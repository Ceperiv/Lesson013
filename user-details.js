const userDetails = document.getElementsByClassName('user-details')[0]

let info = [];
let userId = ''
info = [JSON.parse(localStorage.getItem('user info'))]
for (let item of info) {
    const div = document.createElement('div')
    div.insertAdjacentHTML("afterbegin",
        `<h2>${item.name} </h2>
       <h3>id:${item.id}</h3>
       <h3>User name: <b>${item.username}</b></h3>
       <h4> <span class="address">address: city:</span> ${item.address.city}</h4>
       <h4><i><span class="address"> location:</span> ${item.address.geo.lat} - ${item.address.geo.lng}</i></h4>
       <h4><i><span class="address">street: </span>${item.address.street}</i></h4>
       <h4><i><span class="address">suite: </span>${item.address.suite}</i></h4>
       <h4><i><span class="address">zipcode: </span>${item.address.zipcode}</i></h4>
       <h3> <span class="company">company name:</span> ${item.company.name}</h3>
       <h3><span class="company">company bs:</span> ${item.company.bs}</h3>
       <h3><span class="company">company catchPhrase:</span> ${item.company.catchPhrase}</h3>
       <p>Phone: <a href="#">${item.phone}</a></p>
       <p> Email: <a href="${item.email}">${item.email}</a><p>
       <p> web: <a href="${item.website}">${item.website}</a><p>     
                `)
    userId = item.id
    userDetails.append(div)
}

let posts = []
const postBtn = document.querySelector('.post-btn')
const postItem = document.createElement('div')
postItem.classList.add('posts')
postItem.classList.add('toggle')
userDetails.after(postItem)

fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(value => value.json())
    .then(value => {
        const ulEl = document.createElement('ul')
        for (const item of value) {
            const liEl = document.createElement('li')
            liEl.innerHTML = `<a href="#"${userId}/posts">${item.title}</a>`
            liEl.onclick = (e) => {
                setInfo(item)
                window.open('post-details.html', '_self')
            }
            ulEl.append(liEl)
            postItem.append(ulEl)
        }

        postBtn.addEventListener('click', (e) => {
            if (e.target.closest('.post-btn')) {
                setTimeout(` postItem.classList.toggle('toggle')`, 300)
                userDetails.classList.toggle('toggle-top')
            }
        })

    })

document.addEventListener('click', back)

function back(e) {
    if (!e.target.closest('.user-details') && !e.target.closest('.posts')) {
        window.open('index.html', '_self')
    }
}

function setInfo(item) {
    let obj = JSON.parse(localStorage.getItem('post_details')) || {}
    obj = Object.assign(obj, item)
    localStorage.setItem('post_details', JSON.stringify(obj))
}

