import BotWhatsapp from '@bot-whatsapp/bot';
import { numeroCandidato } from './InformacionPrincipal.flow';
import { postCandidatesAddress } from 'src/services/hcm/candidate-Address';
import { postCandidatesPhone } from 'src/services/hcm/candidate-phoneNumber';
import regresarAdicionalFlow from './regresarAdicional.flow';
import aceptacionFlow from './aceptacion.flow';
import citaFlow from './cita.flow';



export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
    .addAnswer('¡Excelente!✅')
    .addAnswer('Para continuar con su proceso de reclutamiento, le solicitamos amablemente que nos envie por este medio su CV 📄', { capture: true }, async (ctx, { flowDynamic,state,fallBack }) => {
            await state.update({ file: ctx.body})
            console.log(state.get('file'));
            if (!ctx.body.toLocaleLowerCase().includes('event_document')) {
                return fallBack('Debes enviar un documento adjunto')
                
                
            }
            else{
                await flowDynamic(`Hemos recibido tu documento correctamente`)
            }
            return
    })

    .addAnswer('A continuacion te solicitamos que nos proporciones la siguiente infomacion adicional', { delay: 1000,capture: false })
    .addAnswer('¿En que estado vives?', { delay: 1000,capture: true }, async (ctx, { state }) => {
        await state.update({ estado: ctx.body })
    })
    .addAnswer('¿Cómo se llama el municipio en el que vives?', { capture: true }, async (ctx, { state }) => {
        await state.update({ municipio: ctx.body })
    })
    .addAnswer('¿Cuál es el código postal de tu domicilio?', { capture: true }, async (ctx, { state }) => {
        await state.update({ codigoP: ctx.body })
    })
    .addAnswer('¿Cuál es el nombre de la colonia dónde vives?', { capture: true }, async (ctx, { state }) => {
        await state.update({ colonia: ctx.body })
    })
    .addAnswer('¿Cuál es la dirección de tu domicilio?(No colocar número interior, colonia, código postal, estado y municipio)', { capture: true }, async (ctx, { state }) => {
        await state.update({ direccion: ctx.body })
    })
    .addAnswer('¿Cuál es el número Interior de tu domicilio?', { capture: true }, async (ctx, { state }) => {
        await state.update({ numeroInt: ctx.body })
    })

    .addAction(async (_, { flowDynamic, state }) => {
        await flowDynamic(`Confirma tus datos: 
            \nEstado: ${state.get('estado')}
            \nMunicipio: ${state.get('municipio')} 
            \nCódigo Postal: ${state.get('codigoP')}
            \nColonia: ${state.get('colonia')}
            \nDireccion: ${state.get('direccion')}
            \nNúmero Interior: ${state.get('numeroInt')}`
        )
        //postCandidates(state.get('mail'),state.get('lname'),state.get('name'),state.get('sname'),state.get('slname'));
        
    })
    .addAnswer(
        ['¿Los datos con correctos?',
            '👉 *Si* Para confirmar tus datos',
            '👉 *No* Para volver a introducirlos'
        ].join(
            '\n'
        ),
        { capture: true },
        async (ctx, { gotoFlow, flowDynamic,state }) => {
            if (ctx.body.toLocaleLowerCase().includes('si')) {

                postCandidatesAddress(numeroCandidato,'MX',state.get('municipio'),state.get('estado'),state.get('codigoP'),state.get('numeroInt'),state.get('direccion'),state.get('colonia'))
                .then(data => {
                    console.log('Candidate posted successfully');
                                        
                    if(data){
                        flowDynamic('🤖¡Excelente! \nInformación completada.')
                        gotoFlow(citaFlow)
                    }else{
                            console.log(data)    
                            flowDynamic('La informacion no ha podido ser registrada')
                        };
                })
                .catch(error => {
                    console.error('Error:', error);
                    
                });
                //createCandidateDB(numeroCandidato);
                postCandidatesPhone(numeroCandidato,ctx.from);
                
                
                 
            }
            if (ctx.body.toLocaleLowerCase().includes('no')) {
                await gotoFlow(regresarAdicionalFlow)
            }
            
            return
        },
    )
    


    /*.addAnswer(
        ['¿Aceptas la propuesta economica?',
            'Por favor escribe tu respuesta'
            ,'👉 Aceptar'
            ,'👉 Rechazar',],
        { capture: true },

        async (ctx, { flowDynamic, endFlow,fallBack }) => {
            if (ctx.body.toLocaleLowerCase().includes('rechazar')) {
                return endFlow('Agradecemos tu participación en esta campaña de reclutamiento, esperamos logres alcanzar todas tus metas, saludos cordiales.')
            }
            else{
                return endFlow('Agradecemos tu decisión de formar parte de nuestra familia laboral \nDurante este día uno de nuestros asociados se comunicara contigo, saludos cordiales.')
            }
        }
    )*/