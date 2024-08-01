import BotWhatsapp from '@bot-whatsapp/bot';
import habilidadesBDFlow from './habilidadesBD.flow';


export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
    .addAnswer('¡Muy bien!🤖')
    .addAnswer(
        [
            '¿Cómo te sientes trabajando en equipo?🤖',
            '👉 *a)* Cómodo',
            '👉 *b)* Neutral',
            '👉 *c)* Incomodo',
        ].join('\n'),
        { delay: 800, capture: true },
        async (ctx, { gotoFlow }) => {
            await gotoFlow(habilidadesBDFlow)
            
            return
        }
)