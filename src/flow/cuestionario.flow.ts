import BotWhatsapp from '@bot-whatsapp/bot';
import habilidadesPerFlow from './habilidadesPer.flow';


export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
    .addAnswer(['Muy bien', 
        'Acontinuacion te solicitamos que Contestes las siguientes preguntas.',''])
    .addAnswer(
        [
            '¿Cuál es tu nivel educativo?🤖',
            '👉 *a)* Tecnico Superior Universitario',
            '👉 *b)* Ingeniería',
            '👉 *c)* Licenciatura',
        ].join('\n'),
        { delay: 800, capture: true },
        async (ctx, { gotoFlow }) => {
            
            return gotoFlow(habilidadesPerFlow)
        }
    )