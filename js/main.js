function spannung(){
    //alert('spannung');
    spannungsfall();
    //document.querySelector('#iKabellaenge').value='90';
}

function sicherung(){
    //alert('sicherung');
    spannungsfall()
}
function cosinus(){
    //alert('sicherung');
    let c=document.querySelector("#iCosinus").value;
    
    c=c.replace(',','.');
    c=Number(c);
    if (Number(c)>1){
        document.querySelector('#iCosinus').value=1;
        console.log(c+100);
        c=1;
    } else{
        console.log('nix');
    }
    document.querySelector('#iCosinus').value=c;
    spannungsfall()
}
function spannungsfall(){
    const stromart=stromRadioButton();
    //console.log("Stromart :",stromart);
    

    //alert('Spannungsfall');
    //       2*l*I*cos(phi)
    //  dU  ---------------
    //      k*A
    const Kappa=56; // Leit Elektrische Leitfähigkeit  Kupfer:56 m/Ωmm²   Aluminium: 36 m/Ωmm²
    let u=0;
    let spannung=document.querySelector("#iSpannung").value;
    let strom=document.querySelector("#iSicherung").value;
    let laenge=document.querySelector("#iKabellaenge").value;
    let cosinus=document.querySelector("#iCosinus").value;
    let deltaU=document.querySelector("#iSpannungsfall").value;
    console.log(spannung);
    
    console.log("strom: ", strom, "Länge: ", laenge, "cos: ", cosinus, "Leitfächigkeit",Kappa, "Querschnitt: ", "Spannungsfall: ", deltaU);
    
    const delt_u=deltaU*spannung*0.01
    if (stromart=='0'){
       //Drehstrom: 3-phasen System 
       const koeffizient=Math.sqrt(3);// Koeffizient für Drehstromsystem =Wurzel(3)
       
    //    querschnitt=(koeffizient*strom*laenge*cosinus)/(Kappa*deltaU );
       querschnitt=(koeffizient*strom*laenge*cosinus)/(Kappa*delt_u );

       console.log( 'Drehstromsystem');

    } else if (stromart=='1'){
        //Wechselstrom: 1-phasensystem
        querschnitt=(2*strom*laenge*cosinus)/(Kappa*delt_u);
       console.log( 'Wechselstromsystem');

    } else{
        console.log( "wird nicht berechnet");
    }
    

    
    
    console.log(querschnitt.toFixed(2));
    document.querySelector("#iQuerschnitt").value=querschnitt.toFixed(2);
    
}

function laenge(){
    let i=0;
    spannungsfall()
}

function stromRadioButton(){
    const RadioButton=document.getElementsByName('stromartRadio');
    let radioButtonChecked;
    for (let i=0; i<RadioButton.length;i++){
        if(RadioButton[i].checked){
            radioButtonChecked=i;
        }
    }
    return radioButtonChecked
}
