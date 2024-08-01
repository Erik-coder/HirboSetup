import BotWhatsapp from '@bot-whatsapp/bot';
import agradecimientoFlow from './agradecimiento.flow';
import conocimientoOracleFlow from './conocimientoOracle.flow';


export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
.addAnswer('¿Qué habilidades son importantes para trabajar con bases de datos?')
.addAnswer(
    [
        '👉 *a)* Programación en Python.',
        '👉 *b)* Conocimientos de matemáticas',
        '👉 *c)* Capacidad para escribir consultas SQL',
    ].join('\n'),
    { delay: 800, capture: true },
    async (ctx, { gotoFlow }) => {
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