import BotWhatsapp from '@bot-whatsapp/bot';
import nivelBasicoSpFlow from './nivelBasicoSp.flow';
import agradecimientoFlow from './agradecimiento.flow';


export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
    .addAnswer('¡Perfecto! A continuación te realizaremos unas preguntas de base de datos')
    .addAnswer(
        [
            '¿Qué es una base de datos?',
            '👉 *a)* Una aplicación de procesamiento de texto.',
            '👉 *b)* Una colección organizada de información.',
            '👉 *c)* Un programa de hoja de calculo.',
            '👉 *d)* Una aplicación de edición de imágenes.',
        ].join('\n'),
        { delay: 800, capture: true },
        async (ctx, { gotoFlow }) => {
            if (ctx.body.toLocaleLowerCase().includes('a')) {
                return gotoFlow(agradecimientoFlow)
            }
            if (ctx.body.toLocaleLowerCase().includes('c')) {
                return gotoFlow(agradecimientoFlow)
            }
            if (ctx.body.toLocaleLowerCase().includes('d')) {
                return gotoFlow(agradecimientoFlow)
            }
            if (ctx.body.toLocaleLowerCase().includes('b')) {
                return gotoFlow(nivelBasicoSpFlow)
            }
            
            
            return
        }
    )