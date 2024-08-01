import BotWhatsapp from '@bot-whatsapp/bot';
import aceptacionFlow from './aceptacion.flow';

export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
    .addAnswer(['Se ha agendado tu cita para el dia: 12/07/2024 en punto de las 12:00 horas','Favor de ser puntual'        
    ].join('\n'),
    { delay: 800, capture: false }
    )
    .addAnswer('Ya puedes cerrar este chat 🤖')
    .addAction(async (_, { gotoFlow }) => {
        return gotoFlow(aceptacionFlow)
    })