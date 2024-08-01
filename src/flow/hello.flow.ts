import BotWhatsapp, { EVENTS } from '@bot-whatsapp/bot';
import infPerFlow from './InformacionPrincipal.flow';
import masInf from './masinformacion.flow';
import salirFlow from './salir.flow';
import vacanteFlow from './vacante.flow';
import { getMessage } from 'src/services/DB/getMessage';
import { downloadContentFromMessage, downloadMediaMessage } from '@whiskeysockets/baileys';
import { downloadMedia } from 'src/functions/descargarMedia';
import { numeroCandidato } from './auxiliar.flow';

//const MEDIA_KEYS: ("ppic" | "product" | "image" | "video" | "sticker" | "audio" | "gif" | "ptt" | "thumbnail-document" | "thumbnail-image" | "thumbnail-link" | "thumbnail-video" | "md-app-state" | "md-msg-hist" | "document" | "product-catalog-image" | "payment-bg-image")[]



export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.WELCOME)
    .addAction(
        async(ctx, {flowDynamic})=>{
            getMessage(ctx.body).then(data => {
                if(data){
                    const message = data[0].MESSAGE;
                    console.log(message)
                    const chunks = message.split(/(?<!\d)\.\s+/g);
                    flowDynamic(chunks)
                }else{
                    flowDynamic('ERROR DE SERVIDOR')
                    };
            })
            .catch(error => {
                console.error('Mostrando el error: ',error);
                
            });
        })

    
/*
    .addAnswer(
        [':'].join(
            '\n'
        ),
        { capture: true },
        async (ctx, { gotoFlow, flowDynamic,state }) => {
            await state.update({ palabra: ctx.body })
            getMessage(state.get('palabra'))
            .then(data => {
                if(data){
                    const message = data[0].MESSAGE;
                    console.log(message)
                    flowDynamic(message)
                }else{
                    flowDynamic('ERROR DE SERVIDOR')
                    };
            })
            .catch(error => {
                console.error('Mostrando el error',error);
                
            });
            
            return
        },
    )


    
    .addAnswer(
        [
            'Selecciona una de las siguientes opciones',
            '👉 *a)* Proceso de Reclutamiento',
            '👉 *b)* Más información',
            '👉 *c)* Salir',
        ].join('\n'),
        { delay: 800, capture: true },
        async (ctx, { gotoFlow }) => {
            if (ctx.body.toLocaleLowerCase().includes('a')) {
                return gotoFlow(vacanteFlow)
                
            }
            if (ctx.body.toLocaleLowerCase().includes('b')) {
                return gotoFlow(masInf)
            }
            if (ctx.body.toLocaleLowerCase().includes('c')) {
                return gotoFlow(salirFlow)
            }
            return
        }
    )*/

    
    