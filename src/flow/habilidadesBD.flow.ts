import BotWhatsapp from '@bot-whatsapp/bot';
import nivelbasico from './nivelBasico.flow';
import nivelmedio from './nivelMedio.flow';
import nivelAvanzado from './nivelAvanzado.flow';


export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
    .addAnswer(['¡Muy bien!🤖','Sección conocimientos de bases de datos'])
    .addAnswer('A continuación iniciaremos con una sección de preguntas sobre tus conocimientos técnicos.')
    .addAnswer(
        [
            '¿Qué nivel de base de datos tienes?',
            '👉 *a)* Básico',
            '👉 *b)* Intermedio',
            '👉 *c)* Avanzado',
        ].join('\n'),
        { delay: 800, capture: true },
        async (ctx, { gotoFlow }) => {
            if (ctx.body.toLocaleLowerCase().includes('a')) {
                return gotoFlow(nivelbasico)
            }
            if (ctx.body.toLocaleLowerCase().includes('b')) {
                return gotoFlow(nivelmedio)
            }
            if (ctx.body.toLocaleLowerCase().includes('c')) {
                return gotoFlow(nivelAvanzado)
            }
            return
        }
    )