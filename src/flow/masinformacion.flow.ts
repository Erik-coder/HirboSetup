import BotWhatsapp from '@bot-whatsapp/bot';
import helloStart from './hello.flow';
import flowSalir from './salir.flow';

export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
    .addAnswer('En el siguiente link podras encontrar mas información sobre nosotros.')
    .addAnswer('https://www.dti-consultores.com/')
    .addAnswer(
        ['¿Que deseas hacer ahora?',
        '👉 *a)* Regresar',
        '👉 *b)* Salir'
        ].join(
            '\n'
        ),
        { capture: true },
        async (ctx, { gotoFlow, flowDynamic }) => {
            if (ctx.body.toLocaleLowerCase().includes('a')) {
                return gotoFlow(helloStart)
            }
            if (ctx.body.toLocaleLowerCase().includes('b')) {
                return gotoFlow(flowSalir)
            }
            await flowDynamic('¡Muchas gracias!')
            return
        }
    )