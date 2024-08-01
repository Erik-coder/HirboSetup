import BotWhatsapp from '@bot-whatsapp/bot';
import agradecimientoFlow from './agradecimiento.flow';
import conocimientoOracleFlow from './conocimientoOracle.flow';


export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
    .addAnswer('¿Cuál es la función principal de un indíce en una base de datos?')
    .addAnswer(
        [
            '👉 *a)* Fácilitar la lectura de datos.',
            '👉 *b)* Mejorar la integridad de los datos.',
            '👉 *c)* Acelerar la busqueda de datos.',
        ].join('\n'),
        { delay: 800, capture: true },
        async (ctx, { fallBack, gotoFlow }) => {
            if (ctx.body.toLocaleLowerCase().includes('a')) {
                return gotoFlow(agradecimientoFlow)
            }
            if (ctx.body.toLocaleLowerCase().includes('b')) {
                return gotoFlow(agradecimientoFlow)
            }
            if (ctx.body.toLocaleLowerCase().includes('c')) {
                return gotoFlow(conocimientoOracleFlow)
            }
            return
        }
    )