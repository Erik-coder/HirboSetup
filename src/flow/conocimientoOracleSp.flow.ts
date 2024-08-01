import BotWhatsapp from '@bot-whatsapp/bot';
import agradecimientoFlow from './agradecimiento.flow';
import aceptacionFlow from './informacionAdicional.flow';


export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
.addAnswer('¿Qué herramienta de Oracle se utiliza para interactuar con las bases de datos a través de comandos SQL?')
    .addAnswer(
        [
            '👉 *a)* SQL Developer.',
            '👉 *b)* MySQL',
            '👉 *c)* MySQL Workbench',
        ].join('\n'),
        { delay: 800, capture: true },
        async (ctx, { fallBack, gotoFlow }) => {
            if (!ctx.body.toLocaleLowerCase().includes('a')) {
                return fallBack('Debes escribir *a, b, c o d*')
            }
            if (ctx.body.toLocaleLowerCase().includes('b')) {
                return gotoFlow(agradecimientoFlow)
            }
            if (ctx.body.toLocaleLowerCase().includes('c')) {
                return gotoFlow(agradecimientoFlow)
            }
            if (ctx.body.toLocaleLowerCase().includes('a')) {
                return gotoFlow(aceptacionFlow)
            }
            return
        }
    )