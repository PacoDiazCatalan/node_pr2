/* Inicia el módulo http */
var http = require( "http" );

function respondeServer( request, response ) {
    response.writeHead( 200, {"Content-Type": "text/html"} );
    response.write( "Hola con el modulo http y funnci&oacute;n aparte" );
    response.end();
    console.log( "Servidor arrancado..." );
}

/* Crea el objeto del servidor */
http.createServer( respondeServer ).listen( 4444 );
