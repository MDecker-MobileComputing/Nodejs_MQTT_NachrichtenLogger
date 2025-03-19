import { promises as fs } from "fs";


/**
 * Ein Objekt dieser Klasse repräsentiert eine Textdatei, an die durch Aufruf der Methode
 * `zeileAnDateiAnhaengen()` Zeilen angehängt werden können. Diese Zeilen sollen im 
 *  vorliegenden Fall Schlagzeilen sein.
 */
export default class DateiAnhaenger {

    /**
     * Objekt erstellen und Dateinamen festlegen.
     * 
     * @param {string} prefix - Präfix für den Dateinamen, z.B. "schlagzeilen-inland";
     *                          an das Präfix wird das Datum und die Uhrzeit angehängt,
     *                          die Datei bekommt die Endung ".txt".
     *                          Beispielname: "schlagzeilen-inland-2025-03-31_21-22-01.txt"
     */
    constructor( prefix ) {

        const now = new Date();
        const formattedDate = now.toISOString() .split( "T" )[0];
        const formattedTime = now.toTimeString().split( " " )[0].replace( /:/g, "-" );
        this.dateiname = `${prefix}-${formattedDate}_${formattedTime}.txt`;

        console.log( `Neue Datei: ${this.dateiname}` );
    }


    /**
     * Eine Zeile an Textdatei anhängen.
     * 
     * @param {string} zeile - Zeile mit Negativschlagzeile, die an die Datei angehängt werden soll
     */
    async zeileAnDateiAnhaengen( zeile ) {

        try {

            await fs.appendFile( this.dateiname, 
                                 zeile + "\n", 
                                 "utf8" // Kodierung (für Umlaute)
                               );

        } catch ( fehler ) {

            console.error( `Fehler beim Anhängen von Zeile an ${this.dateiname}:`, fehler );
        }
    }
}