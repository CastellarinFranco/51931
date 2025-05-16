⬛Analizador francocastellarin - De Franco Castellarin 51931💻📄

Para poder ejecutar este analizador es necesario contar con lo siguiente 📥: 

📍1- Tene [Java Runtime Environment](https://www.java.com/en/download/) instalado en su computadora (https://www.java.com/en/download/)
y contar con un java 1.8 o superior, debido a que ANTLR (ANother Tool for Language Recognition) es una herramienta desarrollada en java, y requiere de la misma para poder tener un funcionamiento adecuado

📍2- Contar con [Node.js (LTS)](https://nodejs.org/es) (https://nodejs.org/es). Se requiere Node 16 o superior.

📍3- Tener instalado [VS Code](https://code.visualstudio.com/) (IDE Visual Studio Code) desde la página oficial https://code.visualstudio.com/. En este programa fue desarrollado dicho analizador y es el que permitira ejecutarlo. Este debe contar con la extension de ANTLR4, el cual se debe instalar dentro del mismo programa VS Code

💻Una vez descargado los archivos junto al analizador, desde una terminal (CMD o similar) se debera ejecutar el comando:
cd castellarinfrancoa
Para luego abrir el programa con:
code .

 📌Componentes Principales:
Gramática (castellarinfranco): Define un lenguaje para controlar dispositivos con condiciones y acciones.
Visitor (CustomcastellarinfrancoVisitor): Convierte las reglas del lenguaje a código JavaScript ejecutable.
Intérprete (index.js): Procesa la entrada, analiza sintácticamente y aplica el visitor.

Para poder ver el árbol generado, debemos dirigirnos a la gramática (castellarinfranco.g4) y apretar F5

Los ejemplos utilizados (input.txt) fueron los siguientes 📥: 
"cuando luz es encendido entonces desactivar luz;
cuando temperatura mayor que 25 entonces ajustar aire a 18;"


Para poder poner en funcionamiento, dentro de la misma terminal debemos escribir:
npm start




