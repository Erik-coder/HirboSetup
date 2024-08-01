import BotWhatsapp from '@bot-whatsapp/bot';
import InformacionPrincipalFlow from './InformacionPrincipal.flow';
import helloFlow from './hello.flow';
import salirFlow from './salir.flow';
import auxiliarFlow from './auxiliar.flow';




export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
        .addAnswer(
            [
                'Te presentamos las vacantes que tenemos disponibles', 
                'Selecciona la vancate para aplicar',
                '👉 *a)* Administrador de Base de datos',
                '👉 *b)* Auxiliar contable',
                '👉 *c)* Regresar',
                '👉 *d)* Salir',
            ].join('\n'),
            { delay: 800, capture: true },
            async (ctx, { gotoFlow }) => {
                if (ctx.body.toLocaleLowerCase().includes('a')) {
                    return gotoFlow(InformacionPrincipalFlow)
                }
                if (ctx.body.toLocaleLowerCase().includes('b')) {
                    return gotoFlow(auxiliarFlow)
                }
                if (ctx.body.toLocaleLowerCase().includes('c')) {
                    return gotoFlow(helloFlow)
                }
                if (ctx.body.toLocaleLowerCase().includes('d')) {
                    return gotoFlow(salirFlow)
                }
                return
            }
        )