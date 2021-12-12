<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/main.css">
</head>
<body>
    <nav class="nav">
        <div id="nav-menu">

        </div>
        <div id="nav-titulo">
            <h2>WishList</h2>
        </div> 
    </nav>
    <section id="main">
        <?php
        include("conectar.php");
        $consulta = mysqli_query($datos_db,"SELECT * FROM wishlist");
        //include("datos.php");
        while($mostrar_datos = mysqli_fetch_assoc($consulta)){
        ?>
        <div class="lista-item" id="cosa<?php echo $mostrar_datos['id_cosa']?>">
            <div>
                <h4><?php echo $mostrar_datos['nombre']?></h4>
                <p><?php if($mostrar_datos['aclaracion'] !=""){ echo $mostrar_datos['aclaracion'];}?></p>
            </div>
            <?php if($mostrar_datos['enlace'] !=""){?>
            <a href="<?php echo $mostrar_datos['enlace'];?>" >Enlace</a>
            <?php }?>
        </div> 
        <?php } ?>
        
    </section>
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> -->
    <!-- <script src="./js/main.js"></script> -->
</body>
</html>