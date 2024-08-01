import BotWhatsapp from '@bot-whatsapp/bot';
import { numeroCandidato,nombreCandidato } from './InformacionPrincipal.flow';
import agradecimientoFlow from './agradecimiento.flow';
import finalFlow from './final.flow';
import { deleteCandidate } from 'src/services/hcm/delete-Candidate';

console.log(nombreCandidato);

export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.ACTION)
    
    .addAnswer(
        ['Hola ' , 
        'Recibe un cordial saludo, es grato informarte que has sido seleccionado para formar parte de nuestro equipo de trabajo', 
        'A continuación te compartimos la propuesta económica para nuestra oferta laboral, por favor haznos llegar tu respuesta a la brevedad posible'
        ]
    )

    .addAction(
        
        {delay:800, capture:false},async (ctx, { flowDynamic, state }) => {
            await flowDynamic([
                {
                    body:"Doc",
                    media:'https://hirbo.arvispace.com/ORGANIZATIONS/OFFICEDEPOT/attachments/Propuestaeconomica.pdf',
                    delay:2000
                }
            ]) 
        })

    .addAnswer(
        ['¿Aceptas la propuesta economica?',
            'Por favor escribe tu respuesta'
            ,'👉 Aceptar'
            ,'👉 Rechazar'

        ].join(
            '\n'
        ),
        { delay: 1000,capture: true },
        async (ctx, { gotoFlow, flowDynamic,state }) => {
            if (ctx.body.toLocaleLowerCase().includes('aceptar')) {
                await gotoFlow(finalFlow)
            }
            if (ctx.body.toLocaleLowerCase().includes('rechazar')) {
                await gotoFlow(agradecimientoFlow)
            }
            
            return
        },
    )