/* Inicia el módulo http */
import { createServer } from "http";

/* Crea el objeto del servidor */
createServer( function( request, response ) {
    /* Preparamos las cabeceras de respuesta */
    response.writeHead( 200, {"Content-Type": "text/html"} );
    response.write( "Hola con el modulo http" );
    response.end();
}).listen( 4444 );
