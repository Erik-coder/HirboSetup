import BotWhatsapp from '@bot-whatsapp/bot';
import agradecimientoFlow from './agradecimiento.flow';
import conocimientoOracleFlow from './conocimientoOracle.flow';


export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
    .addAnswer('¿Cuál de las siguientes operaciones se utiliza para combinar datos de dos o más tablas en una consulta SQL?')
    .addAnswer(
    [
        '👉 *a)* JOIN.',
        '👉 *b)* INSERT',
        '👉 *c)* DELETE',
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
            return gotoFlow(conocimientoOracleFlow)
        }
        
        return
    }
)