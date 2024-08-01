import BotWhatsapp from '@bot-whatsapp/bot';
import { numeroCandidato } from './InformacionPrincipal.flow';
import { deleteCandidate } from 'src/services/hcm/delete-Candidate';

export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
    .addAnswer(['Agradecemos tu participación en esta campaña de reclutamiento', 
        'Esperamos logres alcanzar todas tus metas, saludos cordiales.'])