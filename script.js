function c2f(){
    let c_deg = document.getElementById("tempc").value;
    let f_deg = document.getElementById("tempf").value;

    if (c_deg !== ""){
        f_deg = (c_deg * 9/5) + 32;
        document.getElementById("tempf").value = f_deg;
    }
    else if(f_deg !== ""){
        c_deg = (f_deg -32) * 5 / 9
        document.getElementById("tempc").value = c_deg
    }    
}



function kg2pd(){
    let wt_kg = document.getElementById("wtkg").value;
    let wt_pd = document.getElementById("wtpd").value;

    if (wt_kg !== ""){
        wt_pd = (wt_kg * 2.205);
        document.getElementById("wtpd").value = wt_pd;
    }
    else if (wt_pd !==""){
        document.getElementById("wtkg").value = null;
        wt_kg = wt_pd / 2.205
        document.getElementById("wtkg").value = wt_kg
    }
}

function km2mi(){
    let ds_km = document.getElementById("dskm").value;
    let ds_mi = document.getElementById("dsmi").value;

    if (ds_km !== ""){
        ds_mi = (ds_km / 1.609);
        document.getElementById("dsmi").value = ds_mi;
    }
    else if (ds_mi !==""){
        ds_km = ds_mi * 1.609
        document.getElementById("dskm").value = ds_km
    }
}

function reset_temp(){
    let c_deg = document.getElementById("tempc");
    let f_deg = document.getElementById("tempf");
    c_deg.value = "";
    f_deg.value = "";
}
function reset_wgt(){
    let wt_kg = document.getElementById("wtkg");
    let wt_pd = document.getElementById("wtpd");
    wt_kg.value = "";
    wt_pd.value = "";
}
function reset_dist(){
    let ds_km = document.getElementById("dskm");
    let ds_mi = document.getElementById("dsmi");
    ds_km.value = "";
    ds_mi.value = "";
}