<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto</title>
    <link rel="stylesheet" href="/../unas-valladolid/Controles/style.css"> <!-- Link al archivo CSS -->
    <link rel="stylesheet" href="/../unas-valladolid/Controles/bootswatch.css">
</head>
<body>
    <header>
        <?php
            include 'header.php';
       ?>
    </header>
    <main>
    <title>Página de Contacto</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
        }
        form {
            width: 300px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
        }
        input[type="text"],
        textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
        }
        button[type="submit"] {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;  

            border-radius: 4px;
            cursor: pointer;
        }
    </style>
</head>
<body>  

    <h1>Contáctanos</h1>
    <form action="mailto:tu_correo_electronico@ejemplo.com" method="post" enctype="text/plain">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required>

        <label for="email">Correo  
 electrónico:</label>
        <input type="email" id="email" name="email" required>

        <label for="mensaje">Mensaje:</label>  

        <textarea id="mensaje" name="mensaje" rows="5" required></textarea>

        <button type="submit">Enviar</button>
    </form>  
    <h1>Contáctanos</h1>
    <form action="enviar_formulario.php" method="post">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required>

        <label for="email">Email:</label> 

        <input type="email" id="email" name="email" required>

        <label for="mensaje">Mensaje:</label> 

        <textarea id="mensaje" name="mensaje" required></textarea>

        <button type="submit">Enviar</button>
    </form> 
    <footer id="footer">
        <div class="contacto">
            <h2>Donde comunicarte con nosotros:</h2>
            <p>Telefono: 605-309-634</p>
            <p>Email: uplmlo@hotmail.com </p>
        </div>
        <div class="contacto">
            <h2>Siguenos en Instagram</h2>
            <ul>
                <li><a href="https://www.instagram.com/unas_by_patricia_olmedo/">Instagram</a></li>
                
            </ul>
        </div>
        <div class="img-footer" class="contacto">
          <img src="../img-acrilicas/ACRILICAS(2).jpg" alt="uñas-acrilicas">
         
            
    </footer>
    <script src="../unas-valladolid/Controles/main.js"></script>

    </main>
    <footer>
        <?php
            include 'footer.php';
       ?>
    </footer>
    
</body>
</html>