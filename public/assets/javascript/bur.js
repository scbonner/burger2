$(document).ready(() => {

// Posting to server
$("form").submit, function(event) {
    event.preventDevault()
    const newBurger = {
        eatburger: $("#burger").val().trim()
    }
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(() =>{
        location.reload();

    })
}
$("finished-burger").on("click", (event) => {
    let id = $(this).data("id")
    let finished = {
        finish: true
    }
})
$.ajax(`/api/burgers/${id}`, {
    type: "PUT",
    data: finished
}).then(()=>{
    location.reload()
})
})
// Deletion of burger order when id is clicked
$(".delete-burger").on("click", (event) => {
    const id = $(this).data("id")
    $.ajax("/api/burgers/${id}", {
        type: "delete"
    }).then(() => {
        location.reload();
    })
    })
