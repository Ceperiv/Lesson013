postDetails = document.getElementsByClassName('post-details')[0]
console.log(postDetails)
let info = JSON.parse(localStorage.getItem('post_details'))

for (const item of [info]) {
    // console.log(item)
    postDetails.innerHTML = `<h2>title: ${item.title}</h2>
                             <h4>id: ${item.id}</h4>
                             <h4>Userid: ${item.userId}</h4>
                             <p>body ~ ${item.body}</p>`
}

document.addEventListener('click', back)

function back(e) {
    if (!e.target.closest('.post-details')) {
        window.open('user-details.html', '_self')
    }
}
