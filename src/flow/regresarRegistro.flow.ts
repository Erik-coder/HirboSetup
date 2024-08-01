import BotWhatsapp from '@bot-whatsapp/bot';
import InformacionPrincipalFlow from './InformacionPrincipal.flow';


export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
.addAnswer('Vuelve a ingresar tus datos')
.addAction(async (_, { gotoFlow }) => {
    return gotoFlow(InformacionPrincipalFlow)
})