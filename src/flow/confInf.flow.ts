import BotWhatsapp from '@bot-whatsapp/bot';
import flowCuestionario from './cuestionario.flow';

export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
.addAnswer(`Tu informacion ha sido registrada. \nTú número de candidato es:`)
    .addAction(async (_, { gotoFlow }) => {
        await gotoFlow(flowCuestionario)
    })