import { promises as fs } from "fs";

export default class DateiAnhaenger {

    constructor( prefix ) {

        const now = new Date();
        const formattedDate = now.toISOString() .split( "T" )[0];
        const formattedTime = now.toTimeString().split( " " )[0].replace( /:/g, "-" );
        this.dateiname = `${prefix}-${formattedDate}_${formattedTime}.txt`;

        console.log( `Neue Datei: ${this.dateiname}` );
    }

    async zeileAnDateiAnhaengen( zeile ) {

        try {

            await fs.appendFile( this.dateiname, 
                                 zeile + "\n", 
                                 "utf8"
                               );

        } catch ( fehler ) {

            console.error( `Fehler beim Anhängen von Zeile an ${this.dateiname}:`, fehler );
        }
    }
}