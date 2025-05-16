// Generated from c:/Users/Usuario/castellarinfrancoa/castellarinfranco.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import castellarinfrancoListener from './castellarinfrancoListener.js';
import castellarinfrancoVisitor from './castellarinfrancoVisitor.js';

const serializedATN = [4,1,16,69,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,5,0,26,8,
0,10,0,12,0,29,9,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,
4,3,4,45,8,4,1,5,1,5,1,6,1,6,1,7,1,7,1,7,3,7,54,8,7,1,8,1,8,1,8,1,9,1,9,
1,9,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,0,0,12,0,2,4,6,8,10,12,14,16,
18,20,22,0,2,3,0,2,2,7,7,9,9,2,0,3,3,8,8,60,0,27,1,0,0,0,2,30,1,0,0,0,4,
36,1,0,0,0,6,40,1,0,0,0,8,44,1,0,0,0,10,46,1,0,0,0,12,48,1,0,0,0,14,53,1,
0,0,0,16,55,1,0,0,0,18,58,1,0,0,0,20,61,1,0,0,0,22,66,1,0,0,0,24,26,3,2,
1,0,25,24,1,0,0,0,26,29,1,0,0,0,27,25,1,0,0,0,27,28,1,0,0,0,28,1,1,0,0,0,
29,27,1,0,0,0,30,31,5,1,0,0,31,32,3,4,2,0,32,33,5,4,0,0,33,34,3,12,6,0,34,
35,5,6,0,0,35,3,1,0,0,0,36,37,3,22,11,0,37,38,3,6,3,0,38,39,3,8,4,0,39,5,
1,0,0,0,40,41,7,0,0,0,41,7,1,0,0,0,42,45,3,10,5,0,43,45,5,14,0,0,44,42,1,
0,0,0,44,43,1,0,0,0,45,9,1,0,0,0,46,47,7,1,0,0,47,11,1,0,0,0,48,49,3,14,
7,0,49,13,1,0,0,0,50,54,3,16,8,0,51,54,3,18,9,0,52,54,3,20,10,0,53,50,1,
0,0,0,53,51,1,0,0,0,53,52,1,0,0,0,54,15,1,0,0,0,55,56,5,10,0,0,56,57,3,22,
11,0,57,17,1,0,0,0,58,59,5,5,0,0,59,60,3,22,11,0,60,19,1,0,0,0,61,62,5,11,
0,0,62,63,3,22,11,0,63,64,5,12,0,0,64,65,5,14,0,0,65,21,1,0,0,0,66,67,5,
13,0,0,67,23,1,0,0,0,3,27,44,53];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class castellarinfrancoParser extends antlr4.Parser {

    static grammarFileName = "castellarinfranco.g4";
    static literalNames = [ null, "'cuando'", "'es'", "'encendido'", "'entonces'", 
                            "'desactivar'", "';'", "'mayor que'", "'apagado'", 
                            "'menor que'", "'activar'", "'ajustar'", "'a'" ];
    static symbolicNames = [ null, "CUANDO", "ES", "ENCENDIDO", "ENTONCES", 
                             "DESACTIVAR", "PYC", "MAYORQUE", "APAGADO", 
                             "MENORQUE", "ACTIVAR", "AJUSTAR", "A", "IDENTIFICADOR", 
                             "NUMERO", "DIGITO", "WS" ];
    static ruleNames = [ "programa", "regla", "condicion", "estado_condicion", 
                         "valor_condicion", "estado", "accion", "accion_simple", 
                         "activar", "desactivar", "ajustar", "nombre_dispositivo" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = castellarinfrancoParser.ruleNames;
        this.literalNames = castellarinfrancoParser.literalNames;
        this.symbolicNames = castellarinfrancoParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, castellarinfrancoParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 24;
	            this.regla();
	            this.state = 29;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	regla() {
	    let localctx = new ReglaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, castellarinfrancoParser.RULE_regla);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(castellarinfrancoParser.CUANDO);
	        this.state = 31;
	        this.condicion();
	        this.state = 32;
	        this.match(castellarinfrancoParser.ENTONCES);
	        this.state = 33;
	        this.accion();
	        this.state = 34;
	        this.match(castellarinfrancoParser.PYC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, castellarinfrancoParser.RULE_condicion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.nombre_dispositivo();
	        this.state = 37;
	        this.estado_condicion();
	        this.state = 38;
	        this.valor_condicion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	estado_condicion() {
	    let localctx = new Estado_condicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, castellarinfrancoParser.RULE_estado_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 644) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor_condicion() {
	    let localctx = new Valor_condicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, castellarinfrancoParser.RULE_valor_condicion);
	    try {
	        this.state = 44;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 42;
	            this.estado();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 43;
	            this.match(castellarinfrancoParser.NUMERO);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	estado() {
	    let localctx = new EstadoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, castellarinfrancoParser.RULE_estado);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        _la = this._input.LA(1);
	        if(!(_la===3 || _la===8)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	accion() {
	    let localctx = new AccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, castellarinfrancoParser.RULE_accion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.accion_simple();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	accion_simple() {
	    let localctx = new Accion_simpleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, castellarinfrancoParser.RULE_accion_simple);
	    try {
	        this.state = 53;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            this.activar();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 51;
	            this.desactivar();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 52;
	            this.ajustar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	activar() {
	    let localctx = new ActivarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, castellarinfrancoParser.RULE_activar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(castellarinfrancoParser.ACTIVAR);
	        this.state = 56;
	        this.nombre_dispositivo();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	desactivar() {
	    let localctx = new DesactivarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, castellarinfrancoParser.RULE_desactivar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(castellarinfrancoParser.DESACTIVAR);
	        this.state = 59;
	        this.nombre_dispositivo();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ajustar() {
	    let localctx = new AjustarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, castellarinfrancoParser.RULE_ajustar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(castellarinfrancoParser.AJUSTAR);
	        this.state = 62;
	        this.nombre_dispositivo();
	        this.state = 63;
	        this.match(castellarinfrancoParser.A);
	        this.state = 64;
	        this.match(castellarinfrancoParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombre_dispositivo() {
	    let localctx = new Nombre_dispositivoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, castellarinfrancoParser.RULE_nombre_dispositivo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(castellarinfrancoParser.IDENTIFICADOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

castellarinfrancoParser.EOF = antlr4.Token.EOF;
castellarinfrancoParser.CUANDO = 1;
castellarinfrancoParser.ES = 2;
castellarinfrancoParser.ENCENDIDO = 3;
castellarinfrancoParser.ENTONCES = 4;
castellarinfrancoParser.DESACTIVAR = 5;
castellarinfrancoParser.PYC = 6;
castellarinfrancoParser.MAYORQUE = 7;
castellarinfrancoParser.APAGADO = 8;
castellarinfrancoParser.MENORQUE = 9;
castellarinfrancoParser.ACTIVAR = 10;
castellarinfrancoParser.AJUSTAR = 11;
castellarinfrancoParser.A = 12;
castellarinfrancoParser.IDENTIFICADOR = 13;
castellarinfrancoParser.NUMERO = 14;
castellarinfrancoParser.DIGITO = 15;
castellarinfrancoParser.WS = 16;

castellarinfrancoParser.RULE_programa = 0;
castellarinfrancoParser.RULE_regla = 1;
castellarinfrancoParser.RULE_condicion = 2;
castellarinfrancoParser.RULE_estado_condicion = 3;
castellarinfrancoParser.RULE_valor_condicion = 4;
castellarinfrancoParser.RULE_estado = 5;
castellarinfrancoParser.RULE_accion = 6;
castellarinfrancoParser.RULE_accion_simple = 7;
castellarinfrancoParser.RULE_activar = 8;
castellarinfrancoParser.RULE_desactivar = 9;
castellarinfrancoParser.RULE_ajustar = 10;
castellarinfrancoParser.RULE_nombre_dispositivo = 11;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = castellarinfrancoParser.RULE_programa;
    }

	regla = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ReglaContext);
	    } else {
	        return this.getTypedRuleContext(ReglaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof castellarinfrancoListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof castellarinfrancoListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof castellarinfrancoVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ReglaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = castellarinfrancoParser.RULE_regla;
    }

	CUANDO() {
	    return this.getToken(castellarinfrancoParser.CUANDO, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	ENTONCES() {
	    return this.getToken(castellarinfrancoParser.ENTONCES, 0);
	};

	accion() {
	    return this.getTypedRuleContext(AccionContext,0);
	};

	PYC() {
	    return this.getToken(castellarinfrancoParser.PYC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof castellarinfrancoListener ) {
	        listener.enterRegla(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof castellarinfrancoListener ) {
	        listener.exitRegla(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof castellarinfrancoVisitor ) {
	        return visitor.visitRegla(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = castellarinfrancoParser.RULE_condicion;
    }

	nombre_dispositivo() {
	    return this.getTypedRuleContext(Nombre_dispositivoContext,0);
	};

	estado_condicion() {
	    return this.getTypedRuleContext(Estado_condicionContext,0);
	};

	valor_condicion() {
	    return this.getTypedRuleContext(Valor_condicionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof castellarinfrancoListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof castellarinfrancoListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof castellarinfrancoVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Estado_condicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = castellarinfrancoParser.RULE_estado_condicion;
    }

	ES() {
	    return this.getToken(castellarinfrancoParser.ES, 0);
	};

	MAYORQUE() {
	    return this.getToken(castellarinfrancoParser.MAYORQUE, 0);
	};

	MENORQUE() {
	    return this.getToken(castellarinfrancoParser.MENORQUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof castellarinfrancoListener ) {
	        listener.enterEstado_condicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof castellarinfrancoListener ) {
	        listener.exitEstado_condicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof castellarinfrancoVisitor ) {
	        return visitor.visitEstado_condicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Valor_condicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = castellarinfrancoParser.RULE_valor_condicion;
    }

	estado() {
	    return this.getTypedRuleContext(EstadoContext,0);
	};

	NUMERO() {
	    return this.getToken(castellarinfrancoParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof castellarinfrancoListener ) {
	        listener.enterValor_condicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof castellarinfrancoListener ) {
	        listener.exitValor_condicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof castellarinfrancoVisitor ) {
	        return visitor.visitValor_condicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EstadoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = castellarinfrancoParser.RULE_estado;
    }

	ENCENDIDO() {
	    return this.getToken(castellarinfrancoParser.ENCENDIDO, 0);
	};

	APAGADO() {
	    return this.getToken(castellarinfrancoParser.APAGADO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof castellarinfrancoListener ) {
	        listener.enterEstado(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof castellarinfrancoListener ) {
	        listener.exitEstado(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof castellarinfrancoVisitor ) {
	        return visitor.visitEstado(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = castellarinfrancoParser.RULE_accion;
    }

	accion_simple() {
	    return this.getTypedRuleContext(Accion_simpleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof castellarinfrancoListener ) {
	        listener.enterAccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof castellarinfrancoListener ) {
	        listener.exitAccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof castellarinfrancoVisitor ) {
	        return visitor.visitAccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Accion_simpleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = castellarinfrancoParser.RULE_accion_simple;
    }

	activar() {
	    return this.getTypedRuleContext(ActivarContext,0);
	};

	desactivar() {
	    return this.getTypedRuleContext(DesactivarContext,0);
	};

	ajustar() {
	    return this.getTypedRuleContext(AjustarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof castellarinfrancoListener ) {
	        listener.enterAccion_simple(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof castellarinfrancoListener ) {
	        listener.exitAccion_simple(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof castellarinfrancoVisitor ) {
	        return visitor.visitAccion_simple(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ActivarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = castellarinfrancoParser.RULE_activar;
    }

	ACTIVAR() {
	    return this.getToken(castellarinfrancoParser.ACTIVAR, 0);
	};

	nombre_dispositivo() {
	    return this.getTypedRuleContext(Nombre_dispositivoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof castellarinfrancoListener ) {
	        listener.enterActivar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof castellarinfrancoListener ) {
	        listener.exitActivar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof castellarinfrancoVisitor ) {
	        return visitor.visitActivar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DesactivarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = castellarinfrancoParser.RULE_desactivar;
    }

	DESACTIVAR() {
	    return this.getToken(castellarinfrancoParser.DESACTIVAR, 0);
	};

	nombre_dispositivo() {
	    return this.getTypedRuleContext(Nombre_dispositivoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof castellarinfrancoListener ) {
	        listener.enterDesactivar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof castellarinfrancoListener ) {
	        listener.exitDesactivar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof castellarinfrancoVisitor ) {
	        return visitor.visitDesactivar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AjustarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = castellarinfrancoParser.RULE_ajustar;
    }

	AJUSTAR() {
	    return this.getToken(castellarinfrancoParser.AJUSTAR, 0);
	};

	nombre_dispositivo() {
	    return this.getTypedRuleContext(Nombre_dispositivoContext,0);
	};

	A() {
	    return this.getToken(castellarinfrancoParser.A, 0);
	};

	NUMERO() {
	    return this.getToken(castellarinfrancoParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof castellarinfrancoListener ) {
	        listener.enterAjustar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof castellarinfrancoListener ) {
	        listener.exitAjustar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof castellarinfrancoVisitor ) {
	        return visitor.visitAjustar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Nombre_dispositivoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = castellarinfrancoParser.RULE_nombre_dispositivo;
    }

	IDENTIFICADOR() {
	    return this.getToken(castellarinfrancoParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof castellarinfrancoListener ) {
	        listener.enterNombre_dispositivo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof castellarinfrancoListener ) {
	        listener.exitNombre_dispositivo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof castellarinfrancoVisitor ) {
	        return visitor.visitNombre_dispositivo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




castellarinfrancoParser.ProgramaContext = ProgramaContext; 
castellarinfrancoParser.ReglaContext = ReglaContext; 
castellarinfrancoParser.CondicionContext = CondicionContext; 
castellarinfrancoParser.Estado_condicionContext = Estado_condicionContext; 
castellarinfrancoParser.Valor_condicionContext = Valor_condicionContext; 
castellarinfrancoParser.EstadoContext = EstadoContext; 
castellarinfrancoParser.AccionContext = AccionContext; 
castellarinfrancoParser.Accion_simpleContext = Accion_simpleContext; 
castellarinfrancoParser.ActivarContext = ActivarContext; 
castellarinfrancoParser.DesactivarContext = DesactivarContext; 
castellarinfrancoParser.AjustarContext = AjustarContext; 
castellarinfrancoParser.Nombre_dispositivoContext = Nombre_dispositivoContext; 
