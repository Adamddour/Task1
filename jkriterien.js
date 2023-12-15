
function eingabeUeberpruefen() {
    //eingegebenen Wert von HTLM input-Elemnt aufrufen und in Variable eingabe zuweisen
    var eingabe = document.getElementById('eingabe');
    var eingabewert = eingabe.value;


    //In HTML Seite in einen p-Element ausgeben lassen 
    var ausgabe1=document.getElementById('ausgabe1');
    var ausgabe2=document.getElementById('ausgabe2');
    var ausgabe3=document.getElementById('ausgabe3');
    var ausgabe4=document.getElementById('ausgabe4');
    var ausgabe5=document.getElementById('ausgabe5');

    //Für 1.,2. und 3. Fehler
    var charArray=[];
   
    //Für 4.Zeichen FehlerCode
    var fehlerCode;

    
    if (eingabewert.length>10 || eingabewert[0] !== '[' || eingabewert[4] !== ']' || eingabewert[5] !== ';' || eingabewert[6] !== ' ') {
        
        ausgabe1.innerHTML='Ungültige Eingabe. Bitte folgendes Format verwenden: [ABC]; §12';
    }
    else if(eingabewert.length===0){

        ausgabe1.innerHTML='Feld ist leer. Bitte Kriterien eingeben';
    }
    else{

        ausgabe1.innerHTML='Für Ihre Eingabe haben wir folgends Kriterien:';

        for(var i=0;i<eingabewert.length;i++){

            //Die erste 3 Elemente in charArray mit der Methode push() hinzufügen
            charArray.push(eingabewert[i]);
        }
        //Ausgabe für die erste 3 Elemente in charArray
        //ausgabe1.innerHTML='Die Eingabe: '+charArray;

        //Die Eingabewert überprüfen
       

        //Letzte 3 Element (Zeichen FehlerCode)
        fehlerCode=eingabewert.slice(-3);
        ausgabe5.innerHTML='FehlerCode lautet: '+fehlerCode;

        //Anfang //Ende 1.Zeichen Fehler-/ Arbeitsort und dafür ist Variable ausgabe2 geeignt
        switch(charArray[1]){

            case 'A':{

                ausgabe2.innerHTML='Technik';
            }break;

            case 'B':{

                ausgabe2.innerHTML='ÜVT(TAL)';
            }break;

            case 'C':{

                ausgabe2.innerHTML='HVT';
            }break;

            case 'D':{

                ausgabe2.innerHTML='Hk';
            }break;

            case 'E':{

                ausgabe2.innerHTML='KVz/MFG';
            }break;

            case 'F':{

                ausgabe2.innerHTML='VzK';
            }break;

            case 'G':{

                ausgabe2.innerHTML='APL/Glasfaser-AP';
            }break;

            case 'H':{

                ausgabe2.innerHTML='Endleitung';
            }break;

            case 'I':{

                ausgabe2.innerHTML='Anschalteeinrichtung ( 1.TAE, RJ45, GF-TA)';
            }break;

            case 'L':{

                ausgabe2.innerHTML='DPU (FTTB)';
            }break;

            case 'M':{

                ausgabe2.innerHTML='Courtesy Call';
            }break;

            case 'O':{

                ausgabe2.innerHTML='ONT(FTTH)';
            }break;

            case 'Q':{

                ausgabe2.innerHTML='Querkabel';
            }break;

            case 'X':{

                ausgabe2.innerHTML='kein fehlerort/Objekt zuweisbar';
            }break;

            default:{
                ausgabe2.innerHTML='Falsche Eingabe für 1.Zeichen Fehler-/ Arbeitsort';
            }
        }
        //Ende 1.Zeichen Fehler-/ Arbeitsort

        //Anfang 2.Zeichen Fehler-/ Tätigkeit und dafür ist Variable ausgabe3 geeignt
        switch(charArray[2]){

            case 'A':{
                ausgabe3.innerHTML='Unterberechung';
            }break;

            case 'B':{
                ausgabe3.innerHTML='Verschaltung';
            }break;

            case 'C':{
                ausgabe3.innerHTML='Defekt';
            }break;

            case 'D':{
                ausgabe3.innerHTML='Beeinflussung';
            }break;

            case 'E':{
                ausgabe3.innerHTML='Konfiguration';
            }break;

            case 'G':{
                ausgabe3.innerHTML='Kunde meldet gut';
            }break;

            case 'H':{
                ausgabe3.innerHTML='kein Fehler festgestellt (Resale/TAL)';
            }break;

            case 'K':{
                ausgabe3.innerHTML='Inkompatibles Kundeequipment';
            }break;

            case 'M':{
                ausgabe3.innerHTML='Inkompatibles Kundeequipment';
            }break;

            case 'T':{
                ausgabe3.innerHTML='TKG (Telekommunikationsgesetzt)';
            }break;

            case 'V':{
                ausgabe3.innerHTML='VAS';
            }break;

            case 'Y':{
                ausgabe3.innerHTML='siehe Freitext';
            }break;

            case '1':{
                ausgabe3.innerHTML='Provisorium';
            }break;

            case '2':{
                ausgabe3.innerHTML='Externe Störer/ Komplexe Kupferstörung';
            }break;

            case '3':{
                ausgabe3.innerHTML='Anschluss und Heimnetz fehlerfrei (Retail)';
            }break;

            case 'X':{
                ausgabe3.innerHTML='-';
            }break;

            default:{
                ausgabe3.innerHTML='Falsche Eingabe 2.Zeichen Fehler-/ Tätigkeit';
            }

        }
        //Ende 2.Zeichen Fehler-/ Tätigkeit


        //Anfang 3.Zeichen Qualifizierung/ weitere Bearbeitung und dafür ist Variable ausgabe4 geeignt
        switch(charArray[3]){

            case 'B':{
                ausgabe4.innerHTML='Kunde informiert, Techniker nicht vor Ort(Messung ok)';
            }break;

            case 'C':{
                ausgabe4.innerHTML='Anschluss vom Netzknoten bis Endkunde überprüft (Resale/TAL mit Termin)';
            }break;

            case 'D':{
                ausgabe4.innerHTML='Störung behoben, PPA gemessen (ohne Termin) (Resale/TAL,Fehler kurz)';
            }break;

            case 'E':{
                ausgabe4.innerHTML='Termin notwendig ( Prüfung vor Ort notwendig) (Resale/TAL)';
            }break;

            case 'F':{
                ausgabe4.innerHTML='Termin notwendig (Kunde nicht vor Ort)';
            }break;

            case 'G':{
                ausgabe4.innerHTML='Termin notwendig (kein Zugang APL/Verteiler)';
            }break;

            case 'H':{
                ausgabe4.innerHTML='Termin notwendig (Kunde nicht auffindbar)';
            }break;

            case 'I':{
                ausgabe4.innerHTML='Abgabe andere Einheit (DT Technik)';
            }break;

            case 'J':{
                ausgabe4.innerHTML='weietre Bearbeitung erforderlich';
            }break;

            case 'M':{
                ausgabe4.innerHTML='Rückfall, Rückbau, z.B. falsche APL gebucht';
            }break;

            case 'R':{
                ausgabe4.innerHTML='Zugang zur Lokation verweigert oder Kunde bestätigt Funktion';
            }break;

            case 'S':{
                ausgabe4.innerHTML='Kunde/Dritter behebt Fehler selbst';
            }break;

            case 'T':{
                ausgabe4.innerHTML='Kunde klärt mit Eigentümer';
            }break;

            case 'U':{
                ausgabe4.innerHTML='Kunde akzeptiert die Einschränkung ';
            }break;

            case 'X':{
                ausgabe4.innerHTML='-';
            }break;

            case '1':{
                ausgabe4.innerHTML='Regelbauweise durch KD abgelehnt, Eigenrealisierung gewünscht, TAE am APL gesetzt';
            }break;

            case '3':{
                ausgabe4.innerHTML='Mitwirkung KD nicht erbracht, nur neu terminieren, wenn KD schaltbare EL hergestellt hat';
            }break;

            case '4':{
                ausgabe4.innerHTML='Endleitung nicht VDSL-fähig, TAE am APL gesetzt';
            }break;

            case '5':{
                ausgabe4.innerHTML='Endleitung nicht VDSL-fähig, TAE am APL nicht möglich';
            }break;

            default:{
                ausgabe4.innerHTML='Falsche Eingabe für 3.Zeichen Qualifizierung/ weitere Bearbeitung';
            }

        }
        //Ende 3.Zeichen Qualifizierung/ weitere Bearbeitung

        //Beginn 4.Zeichen FehlerCode
        switch(fehlerCode){

            case "§01":{
                ausgabe5.innerHTML='kein Fehler feststellbar/Fehler beim Eingrenzen verschwunden';
            }break;

            case "§02":{
                ausgabe5.innerHTML='Fehler im Zuständigkeitsbereich des Endkunden';
            }break;

            case "§03":{
                ausgabe5.innerHTML='Endkunde verweigert Ausführung';
            }break;

            case "§04":{
                ausgabe5.innerHTML='Endkunde nicht angetroffen';
            }break;

            case "§05":{
                ausgabe5.innerHTML='kein Zugang zum Kollokationsraum';
            }break;

            case "§06":{
                ausgabe5.innerHTML='kein Fehler feststellbar / Kunde meldet gut';
            }break;

            case "§11":{
                ausgabe5.innerHTML='keine Stromversorgung/Hardware nicht angeschlossen';
            }break;

            case "§12":{
                ausgabe5.innerHTML='Verkabelungsfehler= TAE -> IAD';
            }break;

            case "§13":{
                ausgabe5.innerHTML='Verkabelungsfehler= TAE -> Starterbox, NTsplit, Splitter, NTBA';
            }break;

            case "§14":{
                ausgabe5.innerHTML='Verkabelungsfehler= Starterbox, NTsplit, Splitter, NTBA -> Modem (WLAN-) Router';
            }break;

            case "§15":{
                ausgabe5.innerHTML='ungeeignete Endleitung';
            }break;

            case "§16":{
                ausgabe5.innerHTML='Fehler in der Konfiguration der Hardware';
            }break;

            case "§17":{
                ausgabe5.innerHTML='Parallelschaltung';
            }break;

            case "§21":{
                ausgabe5.innerHTML='WLAN/Router defekt';
            }break;

            case "§22":{
                ausgabe5.innerHTML='WLAN/Router';
            }break;

            case "§23":{
                ausgabe5.innerHTML='Splitter defekt';
            }break;

            case "§24":{
                ausgabe5.innerHTML='Ntsplit defekt';
            }break;

            case "§25":{
                ausgabe5.innerHTML='Modem defekt';
            }break;

            case "§26":{
                ausgabe5.innerHTML='IAD defekt';
            }break;

            case "§27":{
                ausgabe5.innerHTML='Carrierbox defekt';
            }break;

            case "§31":{
                ausgabe5.innerHTML='TAL Port defekt Portwechsel (mit enstprechendem Angaben zur Technik/Problem im ÜVT)';
            }break;

            case "§32":{
                ausgabe5.innerHTML='Unterbrechung Verschaltung ÜVT (mit enstprechendem Angaben zur Technik/Problem im ÜVT)';
            }break;

            case "§33":{
                ausgabe5.innerHTML='Schaltstreifen defekt (mit enstprechendem Angaben zur Technik/Problem im ÜVT)';
            }break;

            default:{
                ausgabe5.innerHTML='FalscheEingabe für 4.Zeichen FehlerCode';
            }
        }
        //Ende 4.Zeichen FehlerCode



    }
}


/*var eingabeInput = document.getElementById('eingabe');
eingabeInput.addEventListener('DOMContentLoaded', eingabeUeberpruefen);
eingabeUeberpruefen();*/
