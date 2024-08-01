import BotWhatsapp from '@bot-whatsapp/bot';
import aceptacionFlow from './informacionAdicional.flow';
import informacionAdicionalFlow from './informacionAdicional.flow';


export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
.addAnswer('Vuelve a ingresar tus datos')
.addAction(async (_, { gotoFlow }) => {
    return gotoFlow(informacionAdicionalFlow)
})