$(document).ready(function(){
    $("#btn-tipp, #btn-restart").hover(function() {
        $(this).animate({
            width: "120px"
        }, 400);
    }, function() {
        $(this).animate({
            width: "100px"
        }, 400)
    });

    var rand = Math.floor(Math.random() * 100) + 1;

    $('#btn-tipp').click(function(){
        var num = $('#inpNum').val();

        if(!num) {
            swal({
                title: "Uuupsz!",
                text: "Ez a mező nem lehet üres!",
                icon: "warning",
                button: "Értettem!",
            });
        }
        else if(num > rand){
            $('#imgCurrent').attr('src', 'down.png');
        }
        else if(num < rand){
            $('#imgCurrent').attr('src', 'up.png');
        } 
        else if(num == rand){
            $('#imgCurrent').attr('src', 'cong.png');
            $('#btn-restart').css('opacity', '1');
            $('#btn-tipp').attr('disabled', true);
            $('#btn-tipp').css('opacity', '0.5');

            $('#btn-restart').click(function(){
                $('#btn-restart').css('opacity', '0');
                location.reload();
            });

            swal({
                title: "Gratulálok!",
                text: "Eltaláltad a számot!",
                icon: "success",
                button: "Szuper",
            });
        }
    });
});