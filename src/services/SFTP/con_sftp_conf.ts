import Client from 'ssh2-sftp-client';
import { Buffer } from 'buffer';

const baseurl = '/var/www/hirbo.arvispace.com/ORGANIZATIONS/'
const sftp = new Client();

const config = {
    host: '70.37.89.177',
    port: 22,
    username: 'hirbo',
    password: 'hirbo2024',
    // or you can use privateKey: 'path-to-your-private-key'
};



export async function createDirectory(remotePath: string) {
    
    

    try {
        await sftp.connect(config);
        console.log(`Conectado a ${config.host}`);

        await sftp.mkdir(`${baseurl}${remotePath}`, true);
        console.log(`Directorio creado: ${baseurl}${remotePath}`);

        await sftp.end();
        console.log('Conexión cerrada');
    } catch (error) {
        console.error('Error:', error.message);
    }
}

export async function uploadToSftp(localFile: string, remoteFile: string): Promise<void> {
    try {
        await sftp.connect(config);
        console.log(`Connected to ${baseurl}${remoteFile}`);

        await sftp.put(localFile, `${baseurl}${remoteFile}`);
        console.log(`Successfully uploaded ${localFile} to ${baseurl}${remoteFile}`);
    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        await sftp.end();
        console.log('Connection closed');
    }
}

export async function uploadBase64ToSftp(base64Data: string, remoteFile: string): Promise<void> {
    try {
        await sftp.connect(config);
        console.log(`Conectado a: ${config.host}`);
        console.log(`Ruta ${baseurl}${remoteFile}`);

        const buffer = Buffer.from(base64Data, 'base64');
        await sftp.put(buffer, `${baseurl}${remoteFile}`);
        console.log(`Successfully uploaded base64 data to ${baseurl}${remoteFile}`);
    } catch (error) {
        console.error('Error en la conexion: ', error);
    } finally {
        await sftp.end();
        console.log('Connection closed');
    }
}