function calc(){
    var o=0;
    var units= parseInt(document.getElementById("unit").value);
    var s=document.getElementById("c");
    var ch=s.options[s.selectedIndex];
    var t=document.getElementById("c2");
    var  ci=t.options[t.selectedIndex];
    if(ch.text=="EUR")
    {
        
        
        if(ci.text=="EUR")
        {
            document.getElementById("ans").innerHTML= units +"EUR ="+ units +"EUR";
        }
        else if(ci.text=="PLN")
        {
            document.getElementById("ans").innerHTML= units +"EUR ="+units*4.15 +"PLN";
        }
        else if(ci.text=="USD")
        {
            document.getElementById("ans").innerHTML= units +"EUR ="+units*1.15 +"USD";
        }
        else if(ci.text=="BGN")
        {
            document.getElementById("ans").innerHTML= units +"EUR ="+units*6.321 +"BGN";
        }
        else if(ci.text=="PEN")
        {
            document.getElementById("ans").innerHTML= units +"EUR ="+units*17.477 +"PEN";
        }
        
        

    }
     else if(ch.text=="PLN")
    {
        
        
        if(ci.text=="EUR")
        {
            document.getElementById("ans").innerHTML= units +"PLN=" +units*0.636 +"EUR";
        }
        else if(ci.text=="PLN")
        {
            document.getElementById("ans").innerHTML= units +"PLN ="+units +"PLN";
        }
        else if(ci.text=="USD")
        {
            document.getElementById("ans").innerHTML= units +"PLN ="+units*0.734 +"USD";
        }
        else if(ci.text=="BGN")
        {
            document.getElementById("ans").innerHTML= units +"PLN ="+units*1.13 +"BGN";
        }
        else if(ci.text=="PEN")
        {
            document.getElementById("ans").innerHTML= units +"PLN  ="+units*2.15 +"PEN";
        }
    }
    else if(ch.text=="USD")
    {
        
        
        if(ci.text=="EUR")
        {
            document.getElementById("ans").innerHTML= units +"USD=" +units*0.866 +"EUR";
        }
        else if(ci.text=="PLN")
        {
            document.getElementById("ans").innerHTML= units +"USD ="+units*1.361 +"PLN";
        }
        else if(ci.text=="USD")
        {
            document.getElementById("ans").innerHTML= units +"USD ="+units* 17.05 +"USD";
        }
        else if(ci.text=="BGN")
        {
            document.getElementById("ans").innerHTML= units +"USD ="+units*0.577 +"BGN";
        }
        else if(ci.text=="PEN")
        {
            document.getElementById("ans").innerHTML= units +"USD  ="+units* 9.456+"PEN";
        }
        
        

    }
    else if(ch.text=="BGN")
    {
        
        
        if(ci.text=="EUR")
        {
            document.getElementById("ans").innerHTML= units +"BGN=" +units*0.158 +"EUR";
        }
        else if(ci.text=="PLN")
        {
            document.getElementById("ans").innerHTML= units +"BGN ="+units*3.678 +"PLN";
        }
        else if(ci.text=="USD")
        {
            document.getElementById("ans").innerHTML= units +"BGN ="+units*7.65+"USD";
        }
        else if(ci.text=="BGN")
        {
            document.getElementById("ans").innerHTML= units +"BGN ="+units*1.45 +"BGN";
        }
        else if(ci.text=="PEN")
        {
            document.getElementById("ans").innerHTML= units +"BGN  ="+units*9.765 +"PEN";
        }
        
        

    }
    else if(ch.text=="PEN")
    {
        
        
        if(ci.text=="EUR")
        {
            document.getElementById("ans").innerHTML= units +"PEN=" +units*0.0572+"EUR";
        }
        else if(ci.text=="PLN")
        {
            document.getElementById("ans").innerHTML= units +"PEN ="+units*16.05 +"PLN";
        }
        else if(ci.text=="USD")
        {
            document.getElementById("ans").innerHTML= units +"PEN ="+units*3.65 +"USD";
        }
        else if(ci.text=="BGN")
        {
            document.getElementById("ans").innerHTML= units +"PEN ="+units*0.487 +"BGN";
        }
        else if(ci.text=="PEN")
        {
            document.getElementById("ans").innerHTML= units +"PEN  ="+units*6.314 +"PEN";
        }
        
        

    }
   

}