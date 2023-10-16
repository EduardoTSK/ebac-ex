$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault()

        const nTask = $('#new-task').val()
        const tList = $(`<li>${nTask}</li>`)

        $(tList).appendTo('ul')
        $(tList).fadeIn(1000)
        $('#new-task').val('')
    })

    $('ul').on('click', 'li', function() {
        $(this).toggleClass("comp")
    })
})