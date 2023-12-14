
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

    
    if (eingabewert.length>6) {
        
        ausgabe1.innerHTML='Die Laenge muss kleine als 6 Zeichnen sein für Ihre eingabe haben keine Kriterien';
    }
    else if(eingabewert.length===0){

        ausgabe1.innerHTML='Feld ist leer. Bitte eine Kriterien eingeben';
    }
    else{
        ausgabe1.innerHTML='Für Ihre Eingabe haben wir folgends Kriterien:';

        for(var i=0;i<eingabewert.length-3;i++){

            //Die erste 3 Elemente in charArray mit der Methode push() hinzufügen
            charArray.push(eingabewert[i]);
        }
        //Ausgabe für die erste 3 Elemente in charArray
        ausgabe1.innerHTML='Die Eingabe: '+charArray;

        //Letzte 3 Element (Zeichen FehlerCode)
        fehlerCode=eingabewert.slice(-3);
        //ausgabe5.innerHTML='FehlerCode lautet: '+fehlerCode;

        //Anfang //Ende 1.Zeichen Fehler-/ Arbeitsort und dafür ist Variable ausgabe2 geeignt
        switch(charArray[0]){

            case 'A':{

                ausgabe2.innerHTML='Technik';
            }break;

            case 'B':{

                ausgabe2.innerHTML='ÜVT(TAL)';
            }break;

            case 'C':{

                ausgabe2.innerHTML='HVT';
            }break;



            
            default:{
                ausgabe2.innerHTML='FalscheEingabe';
            }
        }
        //Ende 1.Zeichen Fehler-/ Arbeitsort

        //Anfang 2.Zeichen Fehler-/ Tätigkeit und dafür ist Variable ausgabe3 geeignt
        switch(charArray[1]){

            case 'A':{
                ausgabe3.innerHTML='Unterberechung';
            }break;

            default:{
                ausgabe3.innerHTML='FalscheEingabe';
            }

        }
        //Ende 2.Zeichen Fehler-/ Tätigkeit


        //Anfang 3.Zeichen Qualifizierung/ weitere Bearbeitung und dafür ist Variable ausgabe4 geeignt
        switch(charArray[2]){

            case 'B':{
                ausgabe4.innerHTML='Kunde informiert, Techniker nicht vor Ort(Messung ok)';
            }break;

            default:{
                ausgabe4.innerHTML='FalscheEingabe';
            }

        }
        //Ende 3.Zeichen Qualifizierung/ weitere Bearbeitung

        //Beginn 4.Zeichen FehlerCode
        switch(fehlerCode){

            case "$01":{
                ausgabe5.innerHTML='Kein Fehler Feststellbar';
            }break;

            default:{
                ausgabe5.innerHTML='FalscheEingabe für 4.Zeichen FehlerCode';
            }
        }
        //Ende 4.Zeichen FehlerCode



    }
}


var eingabeInput = document.getElementById('eingabe');
eingabeInput.addEventListener('click', eingabeUeberpruefen);