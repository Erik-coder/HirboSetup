import BotWhatsapp from '@bot-whatsapp/bot';
import launchFlow from './hello.flow';
import infPrinc from './InformacionPrincipal.flow';
import masInf from './masinformacion.flow';
import salirFlow from './salir.flow';
import confInf from './confInf.flow';
import questions from './cuestionario.flow';
import backtoRegister from './regresarRegistro.flow';
import habilidadesPer from './habilidadesPer.flow';
import habilidadesEq from './habilidadesEq.flow';
import habilidadesBDFlow from './habilidadesBD.flow';
import aceptacionFlow from './informacionAdicional.flow';
import nivelBasicoFlow from './nivelBasico.flow';
import nivelMedioFlow from './nivelMedio.flow';
import nivelMedioSpFlow from './nivelMedioSp.flow';
import nivelAvanzadoFlow from './nivelAvanzado.flow';
import nivelbasicoSpFlow from './nivelBasicoSp.flow';
import nivelAvanzadoSpFlow from './nivelAvanzadoSp.flow';
import agradecimientoFlow from './agradecimiento.flow';
import conocimientoOracleFlow from './conocimientoOracle.flow';
import conocimientoOracleSpFlow from './conocimientoOracleSp.flow';
import candidatoExistenteFlow from './candidatoExistente.flow';
import finalFlow from './final.flow';
import vacanteFlow from './vacante.flow';
import auxiliarFlow from './auxiliar.flow';
import informacionAdicionalFlow from './aceptacion.flow';
import regresarAdicionalFlow from './regresarAdicional.flow';
import citaFlow from './cita.flow';
import welcomeFlow from './welcome.flow';




/**
 * Debes de implementar todos los flujos
 */
export default BotWhatsapp.createFlow(
    [
        //launchFlow,
        infPrinc,
        masInf,
        salirFlow,
        confInf,
        questions,
        backtoRegister,
        habilidadesPer,
        habilidadesEq,
        habilidadesBDFlow,
        nivelBasicoFlow,
        nivelbasicoSpFlow,
        nivelMedioFlow,
        nivelMedioSpFlow,
        nivelAvanzadoFlow,
        nivelAvanzadoSpFlow,
        agradecimientoFlow,
        conocimientoOracleFlow,
        conocimientoOracleSpFlow,
        aceptacionFlow,
        candidatoExistenteFlow,
        finalFlow,
        vacanteFlow,
        auxiliarFlow,
        informacionAdicionalFlow,
        regresarAdicionalFlow,
        citaFlow,
        welcomeFlow,
    ]
)