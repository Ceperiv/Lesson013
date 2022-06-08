const container = document.getElementsByClassName('container')[0]
container.insertAdjacentHTML("beforebegin", `<h3 class="select-user">Select user</h3>`)

async function getInfo(server) {
    try {
        const response = await fetch(server)
        const responseResult = await response.json()
        console.log(response)
        if (response.ok) {
            for (const item of responseResult) {
                const div = document.createElement('div')
                div.classList.add('block')
                const btn = document.createElement('button')
                btn.innerHTML = `<a href="#">user details</a>`
                btn.classList.add('user-btn')
                div.innerHTML = ` <p>${item.id} - ${item.name}</p>`
                div.append(btn)
                container.append(div)
                btn.addEventListener("click", (e) => {
                    setInfo(item)
                    window.open('user-details.html', '_self')
                    // e.stopPropagation()
                })
            }
        }
    } catch (err) {
        const error = document.createElement('h2')
        error.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>${err} <i class="fa-solid fa-face-frown"></i>`
        container.append(error)
        const selectUser = document.querySelector('.select-user')
        selectUser.style.cssText = 'text-decoration: line-through;' +
            'color: red'
    }


}

function setInfo(item) {
    let obj = JSON.parse(localStorage.getItem('user info')) || {}
    obj = Object.assign(obj, item)
    localStorage.setItem('user info', JSON.stringify(obj))


}

if (container) {
    getInfo('https://jsonplaceholder.typicode.com/users')

}


