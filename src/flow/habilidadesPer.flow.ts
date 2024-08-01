import BotWhatsapp from '@bot-whatsapp/bot';
import habilidadesEquipo from './habilidadesEq.flow';


export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
    .addAnswer('¡Excelente, \nA continuación iniciaremos con la encuesta para tu reclutamiento. ¡Te deseo buena suerte!.')
    .addAnswer('Sección de habilidades personales')
    .addAnswer('A continuación te presentamos un cuestionario. Por favor, contesta cada una de las preguntas. 😊')
    .addAnswer(
        [
            '1.-¿Cuál de las siguientes opciones describen mejor tus habilidades más destacadas?',
            '👉 *a)* Resolución de problemas',
            '👉 *b)* Destreza en la comunicación',
            '👉 *c)* Capacidad de adaptación',
        ].join('\n'),
        { delay: 800, capture: true },
        async (ctx, { gotoFlow }) => {
            await gotoFlow(habilidadesEquipo)
            
            return
        }
    )