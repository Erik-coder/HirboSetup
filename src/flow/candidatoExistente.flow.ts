import BotWhatsapp from '@bot-whatsapp/bot';
import vacanteFlow from './vacante.flow';
import masinformacionFlow from './masinformacion.flow';
import salirFlow from './salir.flow';


export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
    .addAnswer('¿Que te gustaria hacer?')
    .addAnswer(
        [
            'Selecciona una de las siguientes opciones',
            '👉 *a)* Postularme a otra vacante',
            '👉 *b)* Conocer el status de mi postulacion',
            '👉 *c)* Actualizar mi informacion',
            '👉 *d)* Cancelar mi solicitud',
            '👉 *e)* Regresar',
            '👉 *f)* Salir',
        ].join('\n'),
        { delay: 800, capture: true },
        async (ctx, { gotoFlow }) => {
            if (ctx.body.toLocaleLowerCase().includes('a')) {
                console.log(ctx.from)
                console.log(ctx.pushName)
                return gotoFlow(vacanteFlow)
                
            }
            if (ctx.body.toLocaleLowerCase().includes('e')) {
                return gotoFlow(masinformacionFlow)
            }
            if (ctx.body.toLocaleLowerCase().includes('f')) {
                return gotoFlow(salirFlow)
            }
            return
        }
    )