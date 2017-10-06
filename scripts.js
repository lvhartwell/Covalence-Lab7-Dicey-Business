$(document).ready(function () {
    $('#button1').click(function () {
        let div = $("<div class='die'></div>");
        div.css({
            backgroundColor: 'purple',
            height: '5em',
            width: '5em',
            margin: '1em',
            color: 'green'
        })
        $("body").append(div);

        $('#button2').click(function () {

            let value = 1 + Math.floor(Math.random() * 6);
            console.log(value);
            div.text(value);

        })

    })

})
