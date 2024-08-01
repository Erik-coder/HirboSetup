import { downloadContentFromMessage, generateProfilePicture } from '@whiskeysockets/baileys';
import { writeFile } from 'fs/promises'
import { numeroCandidato } from 'src/flow/auxiliar.flow';
import { uploadBase64ToSftp } from 'src/services/SFTP/con_sftp_conf';



export async function downloadMedia(message) {
    const m = message
    console.log('Valor:',m)
    if (!m.message) return
    const messageType = Object.keys (m.message)[0]
    console.log('Este es el tipo de mensaje: ',messageType)
    if (messageType === 'documentMessage') {
        const stream = await downloadContentFromMessage(m.message.documentMessage, 'document')
        const docAttrib = await m.message.documentMessage
        const fileName = await docAttrib.fileName
        console.log('El nombre del archivo es : ',fileName)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        const fileEncbase64 = buffer.toString('base64');
        console.log('Base64 String:', fileEncbase64);
        //uploadBase64ToSftp(fileEncbase64,'OFFICEDEPOT/attachments/')
        await writeFile(`C:/Users/52233/Downloads/Hirbo/Hirbo Office Depot/assets/${fileName}`, buffer)
        
        return true;
        
    }
    else{
        console.log('Esto NO es un documento')
        return false
    }
}