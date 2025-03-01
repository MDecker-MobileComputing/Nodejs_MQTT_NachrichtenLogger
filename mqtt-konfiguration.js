
/**
 * Topic mit JSON-Objekten für neu angelegte Kurzlinks.
 *
 * Topic-Namen fangen laut Konvention ohne "/" an, auch wenn es möglich wäre.
 *
 * Beide Unter-Topics in MQTXX abonnieren: dozent/decker/produkt/#
 */
const topicNachrichten        = "dozent/decker/nachrichten";
const topicNachrichtenInland  = `${topicNachrichten}/inland`;
const topicNachrichtenAusland = `${topicNachrichten}/ausland`;


const mqttKonfigRemote = {
    nutzername : "bob",
    passwort   : "s3cr3t",
    url        : "wss://mqtt.ein-server.de"
};

const mqttKonfigLokal = {
    nutzername: "alice",
    passwort  : "g3h3im",
    url       : "mqtt://localhost:1883",
};


const mqttKonfiguration = mqttKonfigRemote;
//const mqttKonfiguration = mqttKonfigLokal;

mqttKonfiguration.topicNachrichten        = topicNachrichten;
mqttKonfiguration.topicNachrichtenInland  = topicNachrichtenInland;
mqttKonfiguration.topicNachrichtenAusland = topicNachrichtenAusland;

export default mqttKonfiguration;
