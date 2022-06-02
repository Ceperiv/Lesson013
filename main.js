const container = document.getElementsByClassName('container')[0]
container.insertAdjacentHTML("beforebegin", `<h3>Select user</h3>`)
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        // console.log(value)
        for (const item of value) {
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
                window.open('user-details.html','_self')
                // e.stopPropagation()
            })
        }
    })

function setInfo(item) {
    let obj = JSON.parse(localStorage.getItem('user info')) || {}
    obj = Object.assign(obj, item)
    localStorage.setItem('user info', JSON.stringify(obj))


}


