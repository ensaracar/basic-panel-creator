var textarea = $('#htmlContent');
var btn = $('.submit--');



btn.on('click', function () {
        var json = html2json(document.getElementById('htmlContent').value);
        var html = json2html(json);


        console.log(json)

        $('#log').html(html)
        $('pre').html(JSON.stringify(json))

    // Insert the node names
        /*$log.append( "<h3>Node Names:</h3>" );
        $( "<pre></pre>" ).append( nodeNames.join( "" ) ).appendTo( $log );*/
})
