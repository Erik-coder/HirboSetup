import BotWhatsapp from '@bot-whatsapp/bot';
import infPerFlow from './InformacionPrincipal.flow';
import masInf from './masinformacion.flow';
import salirFlow from './salir.flow';
import vacanteFlow from './vacante.flow';
import { getMessage } from 'src/services/DB/getMessage';
import { downloadMedia } from 'src/functions/descargarMedia';
import { numeroCandidato } from './auxiliar.flow';
import { downloadHistory } from '@whiskeysockets/baileys';
import regresarInicio from './regresarInicio';
import { stringify } from 'querystring';





let concatenatedResults: string[] = [];

let pregunta: string[] = [];
interface resultado {
    MESSAGE: String,
    Campanias: [
        {
            Campania: String,
            Requisiciones: [
                String,
                String,
                String
            ],
            Preguntas: [
                [
                    String,
                    String,
                    String
                ],
                [
                    String
                ],
                [
                    String,
                    String
                ]
            ],
            Respuestas: [
                [
                    [
                        String,
                        String
                    ],
                    [
                        String,
                        String
                    ],
                    [
                        String,
                        String
                    ]
                ],
                [
                    [
                        String,
                        String
                    ]
                ],
                [
                    [
                        String,
                        String
                    ],
                    [
                        String
                    ],
                    [
                        String,
                        String,
                        String,
                        String
                    ]
                ]
            ]
        },
        {
            Campania: String,
            Requisiciones: [
                String
            ],
            Preguntas: [
                [
                    String
                ]
            ],
            Respuestas: [
                [
                    [
                        String,
                        String
                    ]
                ]
            ]
        }            
    ]
};

let globalData: resultado | null = null;




export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.WELCOME)
    /*.addAction(
        async(ctx, {flowDynamic})=>{
            getMessage(ctx.body)
            
            .then(data => {
                if(data){
                    
                    globalData = data;
                    const mensaje = globalData.MESSAGE;
                    const chuncks = mensaje.split(/(?<!\d)\.\s+/g);
                    flowDynamic(chuncks.join('\n'));
                    Object.values(globalData.Campanias).forEach((value, index)=>{
                        concatenatedResults.push(`${index+1}.-${value.Campania}`)

                        
                    });
                    flowDynamic('A continuacion te presento las Campañas que tenemos disponibles');
                    setTimeout(() => {                        
                        flowDynamic(concatenatedResults.join('\n'));
                    }, 4000);
                        
                }else{
                    flowDynamic(`No puedo contestar a tu peticion`)                    
                    };            
            })
            .catch(error => {
                console.error('Error: ',error);
                
                
            });
        })

       .addAction(
        {delay:800, capture:true},async (ctx, { flowDynamic, state }) => {
            await state.update({ numero: ctx.body })
            globalData.Campanias[state.get('numero')-1].Requisiciones
            const requisiciones: string[] = []
            Object.values(globalData.Campanias[state.get('numero')-1].Requisiciones).forEach((value,index) =>{
                requisiciones.push(`${index+1}.- ${value}`)

            })

            flowDynamic(requisiciones.join('\n'))
        })

        .addAction(
            {delay:800, capture:true},async (ctx, { flowDynamic, state }) => {
                await state.update({ req: ctx.body })
                flowDynamic(state.get('req'))
                
            })
            

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
    )*/


    
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
    )
        
    


/*
        .addAnswer('Enviame un archivo', { delay:6000, capture: true }, async (ctx, { flowDynamic,state,fallBack }) => {
            await state.update({ file: ctx.message})
            console.log(ctx);
            if (!ctx.body.toLocaleLowerCase().includes('event_document')) {
                return fallBack('Debes enviar un documento adjunto')
            }
            else{
                downloadMedia(ctx);
                await flowDynamic('Hemos recibido tu documento correctamente')
            }
            
            //downloadMedia(ctx);
        })

        .addAction(async (_, { flowDynamic, state }) => {
            await flowDynamic(`Esta es la informacion que me has mandado: ${JSON.stringify(state.get('file'))}`)

            
        })*/