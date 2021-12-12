function conectar(){
    $.ajax({
        url: 'http://127.0.0.1/site/index.php',
        method:'POST',
        data:{ola:'ver'},
        dataType: 'html',
    }).done(function(e){
        console.log(e)
    })
}