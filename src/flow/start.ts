import BotWhatsapp from '@bot-whatsapp/bot';
import infPerFlow from './InformacionPrincipal.flow';
import masInf from './masinformacion.flow';
import salirFlow from './salir.flow';

export default BotWhatsapp.addKeyword(['nop'])

    
    /*.addAnswer(
        [
            'Selecciona una de las siguientes opciones',
            '👉 *a)* Proceso de Reclutamiento',
            '👉 *b)* Más información',
            '👉 *c)* Salir',
        ].join('\n'),
        { delay: 800, capture: true },
        async (ctx, { gotoFlow }) => {
            if (ctx.body.toLocaleLowerCase().includes('a')) {
                return gotoFlow(infPerFlow)
            }
            if (ctx.body.toLocaleLowerCase().includes('b')) {
                return gotoFlow(masInf)
            }
            if (ctx.body.toLocaleLowerCase().includes('c')) {
                return gotoFlow(salirFlow)
            }
            return
        }
    )*/
