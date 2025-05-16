grammar castellarinfranco;



// lexer
CUANDO : 'cuando' ;
ES : 'es';
ENCENDIDO : 'encendido';
ENTONCES : 'entonces';
DESACTIVAR : 'desactivar';
PYC : ';';
MAYORQUE : 'mayor que';
APAGADO : 'apagado';
MENORQUE : 'menor que';
ACTIVAR : 'activar';
AJUSTAR : 'ajustar';
A : 'a';


// parser
programa: regla* ;

regla: CUANDO condicion ENTONCES accion PYC ;

condicion: nombre_dispositivo estado_condicion valor_condicion ;

estado_condicion: ES | MAYORQUE | MENORQUE ;

valor_condicion: estado | NUMERO ;

estado: ENCENDIDO | APAGADO ;

accion: accion_simple ;

accion_simple: activar | desactivar | ajustar ;

activar: ACTIVAR nombre_dispositivo ;

desactivar: DESACTIVAR nombre_dispositivo ;

ajustar: AJUSTAR nombre_dispositivo A NUMERO ;

nombre_dispositivo: IDENTIFICADOR ;

// Reglas léxicas
IDENTIFICADOR: LETRA (LETRA | DIGITO | '_')* ;

NUMERO: DIGITO+ ;

DIGITO: [0-9];  //No es un fragment

fragment LETRA: [a-zA-Z] ;

WS: [ \t\r\n]+ -> skip ;