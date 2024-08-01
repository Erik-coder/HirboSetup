import BotWhatsapp from '@bot-whatsapp/bot';
import agradecimientoFlow from './agradecimiento.flow';
import nivelMedioSpFlow from './nivelMedioSp.flow';


export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
    .addAnswer('¡Perfecto! A continuación te realizaremos unas preguntas de Base de datos')
    .addAnswer(
        [
            '¿Qué tipo de clave se utiliza para establecer una relación entre dos tablas en una base de datos relacionales?',
            '👉 *a)* Clave primaria.',
            '👉 *b)* Clave externa.',
            '👉 *c)* Clave foranéa.',
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
                return gotoFlow(nivelMedioSpFlow)
            }
            return
        }
    )