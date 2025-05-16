import castellarinfrancoListener from "./generated/castellarinfrancoListener.js";
export class CustomcastellarinfrancoListener extends castellarinfrancoListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}