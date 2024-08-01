import BotWhatsapp from '@bot-whatsapp/bot';
import InformacionPrincipalFlow from './InformacionPrincipal.flow';
import welcomeFlow from './welcome.flow';


export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
.addAction(async (_, { gotoFlow }) => {
    return gotoFlow(welcomeFlow)
})