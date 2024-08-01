import BotWhatsapp from '@bot-whatsapp/bot';
import agradecimientoFlow from './agradecimiento.flow';
import nivelAvanzadoSpFlow from './nivelAvanzadoSp.flow';


export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
    .addAnswer('¡Perfecto! A continuación te realizaremos unas preguntas de Base de datos')
    .addAnswer(
    [
        '¿Qué propiedad de ACID garantiza  que todas las operaciones de una transacción se completen con éxito o que ninguna de ellas se realice?',
        '👉 *a)* Atomicidad.',
        '👉 *b)* Consistencia.',
        '👉 *c)* Durabilidad.',
    ].join('\n'),
    { delay: 800, capture: true },
    async (ctx, { gotoFlow }) => {
        if (ctx.body.toLocaleLowerCase().includes('b')) {
            return gotoFlow(agradecimientoFlow)
        }
        if (ctx.body.toLocaleLowerCase().includes('c')) {
            return gotoFlow(agradecimientoFlow)
        }
        if (ctx.body.toLocaleLowerCase().includes('a')) {
            return gotoFlow(nivelAvanzadoSpFlow)
        }
        return
    }
)