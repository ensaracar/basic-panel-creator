var textarea = $('#htmlContent');
var btn = $('.submit--');



btn.on('click', function () {
        console.log(document.getElementById('htmlContent').value)
        var json = html2json(document.getElementById('htmlContent').value);
        var html = json2html(json);


        console.log(json)

        $('#log').html(html)

    // Insert the node names
        /*$log.append( "<h3>Node Names:</h3>" );
        $( "<pre></pre>" ).append( nodeNames.join( "" ) ).appendTo( $log );*/
})
