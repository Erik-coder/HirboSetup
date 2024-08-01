import BotWhatsapp from '@bot-whatsapp/bot';
import { postCandidatesV } from 'src/services/hcm/post-candidateV';
import cuestionarioFlow from './cuestionario.flow';
import backtoregister from './regresarRegistro.flow';
import { response } from 'express';
import candidatoExistenteFlow from './candidatoExistente.flow';
import { createCandidateDB } from 'src/services/DB/create_Candidate';

export var numeroCandidato= '';
export var nombreCandidato= '';

export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
    .addAnswer('¡Para iniciar el proceso de seleccion a esta vacante te solicitaremos la siguiente información!🤖.')
    
    .addAnswer(`¿Cual es tu nombre?`, { capture: true }, async (ctx, { state }) => {
        await state.update({ name: ctx.body })
    })
    .addAnswer(['Ingresa tu segundo nombre',
        'Nota. Si no tienes coloca un "-"'], { capture: true }, async (ctx, { state }) => {
        await state.update({ sname: ctx.body })
    })
    .addAnswer('Ingresa tu Apellido Paterno', { capture: true }, async (ctx, { state }) => {
        await state.update({ lname: ctx.body })
    })
    .addAnswer('Ingresa tu Apellido Materno', { capture: true }, async (ctx, { state }) => {
        await state.update({ slname: ctx.body })
    })
    .addAnswer('Ingresa tu correo electrónico', { capture: true }, async (ctx, { state, fallBack }) => {
        await state.update({ mail: ctx.body })
        if (!ctx.body.toLocaleLowerCase().includes('@')) {
            return fallBack('Ingresa un correo electronico válido')
        }
        return 
    })
    .addAction(async (_, { flowDynamic, state }) => {
        await flowDynamic(`Confirma tus datos: \nNombre: ${state.get('name')} ${state.get('sname')} ${state.get('lname')} ${state.get('slname')},  \nCorreo electrónico: ${state.get('mail')}`)
        //postCandidates(state.get('mail'),state.get('lname'),state.get('name'),state.get('sname'),state.get('slname'));
        
    })

    .addAnswer(
        ['¿Los datos con correctos?','👉 *Si* Para confirmar tus datos','👉 *No* Para volver a introducirlos'].join(
            '\n'
        ),
        { capture: true },
        async (ctx, { gotoFlow, flowDynamic,state }) => {
            if (ctx.body.toLocaleLowerCase().includes('si')) {
                postCandidatesV(state.get('mail'),state.get('lname'),state.get('name'),state.get('sname'),state.get('slname'))
                .then(data => {
                    console.log('Candidate posted successfully. Candidate Number:', data.CandidateNumber);

                    numeroCandidato = data.CandidateNumber;
                    nombreCandidato = data.FirstName;
                    console.log('Nombreeeeee: ',nombreCandidato)
                                        
                    if(data){
                        flowDynamic(`!Excelente! \nTu informacion ha sido almacenada. \nTú número de candidato es: ${numeroCandidato}`)
                        gotoFlow(cuestionarioFlow)
                    }else{
                            console.log(data)    
                            flowDynamic(`Hemos detectado que ya existe un registro con la informacion proporcionada`)
                            gotoFlow(candidatoExistenteFlow)
                        };
                })
                .then(response => {                   
                })
                .catch(error => {
                    console.error('Error :', error);
                    
                });
                //createCandidateDB(numeroCandidato);
                
                
                 
            }
            if (ctx.body.toLocaleLowerCase().includes('no')) {
                await gotoFlow(backtoregister)
            }
            
            return
        },
    )