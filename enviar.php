<?php
    $mail="maskhayw@gmail.com";

    $nombre=$_POST ["nombre"];
    $telefono=$POST ["telefono"];
    $correo=$_POST ["correo"];
    $mensaje=$_POST ["mensaje"];
    
$Thank="http://www.maskhaywebs.com/gracias.html";

$message="
Nombre: ".$nombre."
Telefono: ".$telefono."
Correo: ".$correo."
Mensaje: ".$mensaje."
";

if (mail ($mail,"Contacto",$message))

header ("location: $Thank");
echo "Mensaje enviado correctamente";

?>