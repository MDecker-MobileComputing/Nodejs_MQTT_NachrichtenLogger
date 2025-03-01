import mqtt              from "mqtt";
import DateiAnhaenger    from "./datei-anhaenger.js";
import mqttKonfiguration from "../mqtt-konfiguration.js";


const authObjekt = {
  
    username: mqttKonfiguration.nutzername,
    password: mqttKonfiguration.passwort
}
  
const mqttClient = await mqtt.connectAsync( mqttKonfiguration.url, 
                                            authObjekt );

const inlandsDatei  = new DateiAnhaenger( "schlagzeilen-inland"  );
const auslandsDatei = new DateiAnhaenger( "schlagzeilen-ausland" );

console.log();

// ToDo: Empfangene Nachrichten in passende Datei schreiben

console.log( "Zwei Topics abonniert, warte auf Nachrichten...\n" );
