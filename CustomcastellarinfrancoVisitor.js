import { Parser } from "antlr4";
import castellarinfrancoVisitor from "./generated/castellarinfrancoVisitor.js";
import castellarinfrancoParser from "./generated/castellarinfrancoParser.js"

export default class CustomcastellarinfrancoVisitor extends castellarinfrancoVisitor{
constructor() {
        super();
        this.variables = {};
    }

    visitPrograma(ctx) {
        let jsCode = '';
        for (let i = 0; i < ctx.regla().length; i++) {
            jsCode += this.visit(ctx.regla(i)) + '\n';
        }
        return jsCode;
    }

    visitRegla(ctx) {
        const condition = this.visit(ctx.condicion());
        const action = this.visit(ctx.accion());
        return `if (${condition}) ${action}`;
    }

    visitCondicion(ctx) {
        const device = ctx.nombre_dispositivo().getText();
        const state = ctx.estado_condicion().getText();
        const value = this.visit(ctx.valor_condicion());

        switch (state) {
            case 'es':
                return `${device}.encendido === ${value}`;
            case 'mayor que':
                return `${device}.valor > ${value}`;
            case 'menor que':
                return `${device}.valor < ${value}`;
            default:
                return 'false';
        }
    }

    visitValor_condicion(ctx) {
        if (ctx.estado()) {
            return ctx.estado().getText() === 'encendido' ? 'true' : 'false';
        }
        return ctx.NUMERO().getText();
    }

    visitActivar(ctx) {
        const device = ctx.nombre_dispositivo().getText();
        this.ensureDeviceExists(device);
        return `${device}.encendido = true;`;
    }

    visitDesactivar(ctx) {
        const device = ctx.nombre_dispositivo().getText();
        this.ensureDeviceExists(device);
        return `${device}.encendido = false;`;
    }

    visitAjustar(ctx) {
        const device = ctx.nombre_dispositivo().getText();
        const value = ctx.NUMERO().getText();
        this.ensureDeviceExists(device);
        return `${device}.valor = ${value};`;
    }

    ensureDeviceExists(device) {
        if (!this.variables[device]) {
            this.variables[device] = true;
            console.log(`const ${device} = { encendido: false, valor: 0 };`);
        }
    }
    
    
}