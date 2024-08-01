import BotWhatsapp from '@bot-whatsapp/bot';
import { numeroCandidato } from './InformacionPrincipal.flow';
import { postCandidatesAddress } from 'src/services/hcm/candidate-Address';
import { postCandidatesPhone } from 'src/services/hcm/candidate-phoneNumber';
import { nombreCandidato } from './InformacionPrincipal.flow';


export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
    .addAnswer(
        ['Agradecemos tu decisión de formar parte de nuestra familia laboral', 
            'Durante este día uno de nuestros asociados se comunicara contigo, saludos cordiales.',

        ].join('\n'),
        { delay: 800, capture: true },
        async (ctx, { gotoFlow }) => {
            return
        }
    )
    .addAnswer('Ya puedes cerrar este chat 🤖')