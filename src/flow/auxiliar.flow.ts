import BotWhatsapp from '@bot-whatsapp/bot';
import { postCandidatesV } from 'src/services/hcm/post-candidateV';
import cuestionarioFlow from './cuestionario.flow';
import backtoregister from './regresarRegistro.flow';
import { response } from 'express';
import candidatoExistenteFlow from './candidatoExistente.flow';
import { createCandidateDB } from 'src/services/DB/create_Candidate';
import helloFlow from './hello.flow';
import salirFlow from './salir.flow';
import welcomeFlow from './welcome.flow';



export var numeroCandidato= '';
export var nombreCandidato= '';

export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
    .addAnswer('Te informamos que el proceso de reclutamiento y selección de esta vacante, ha concluido')
    .addAnswer(
        [
            'Selecciona una opcion',
            '👉 *a)* Regresar',
            '👉 *b)* Salir',
        ].join('\n'),
        { delay: 800, capture: true },
        async (ctx, { gotoFlow }) => {
            if (ctx.body.toLocaleLowerCase().includes('a')) {
                return gotoFlow(welcomeFlow)
            }
            if (ctx.body.toLocaleLowerCase().includes('b')) {
                return gotoFlow(salirFlow)
            }
            return
        }
    )