import BotWhatsapp from '@bot-whatsapp/bot';
import agradecimientoFlow from './agradecimiento.flow';
import conocimientoOracleSpFlow from './conocimientoOracleSp.flow';


export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
    .addAnswer('Sección de conocimientos de Oracle')
    .addAnswer('¿Qué herramienta de Oracle se utiliza para interactuar con las bases de datos a través de comandos SQL?')
    .addAnswer(
        [
            '👉 *a)* Oracle SQL Developer.',
            '👉 *b)* Oracle Enterprise Manager',
            '👉 *c)* Oracle Data Guard',
            '👉 *d)* Oracle Application Express',
        ].join('\n'),
        { delay: 800, capture: true },
        async (ctx, { gotoFlow }) => {
            if (ctx.body.toLocaleLowerCase().includes('b')) {
                return gotoFlow(agradecimientoFlow)
            }
            if (ctx.body.toLocaleLowerCase().includes('c')) {
                return gotoFlow(agradecimientoFlow)
            }
            if (ctx.body.toLocaleLowerCase().includes('d')) {
                return gotoFlow(agradecimientoFlow)
            }
            if (ctx.body.toLocaleLowerCase().includes('a')) {
                return gotoFlow(conocimientoOracleSpFlow)
            }
            return
        }
    )