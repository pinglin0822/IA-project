let pSeries = [
    {
        "name":"HUAWEI P30",
        "phoneImage":"image/p30.png",
        "processor":"HUAWEI Kirin 980 Octa-core",
        "operatingSystem":"EMUI 9.1",
        "memory":"6/8 GB RAM + 128 GB ROM",
        "battery":"3650 mAh",
    },{
        "name":"HUAWEI P40",
        "phoneImage":"image/p40.png",
        "processor":"HUAWEI Kirin 990 5G",
        "operatingSystem":"EMUI 10.1",
        "memory":"8 GB RAM + 128 GB ROM",
        "battery":"3800 mAh",
    },{
        "name":"HUAWEI P40 Pro",
        "phoneImage":"image/p40pro.png",
        "processor":"HUAWEI Kirin 990 5G",
        "operatingSystem":"EMUI 10.1",
        "memory":"8 GB RAM + 256 GB ROM",
        "battery":"4200 mAh",
    }  
];
let mateSeries = [
    {
        "name":"HUAWEI Mate 20 Pro ",
        "phoneImage":"image/mate20pro.png",
        "processor":"HiSilicon Kirin 980",
        "operatingSystem":"EMUI 9.0",
        "memory":"6 GB RAM + 128 GB ROM",
        "battery":"4200 mAh",
    },{
        "name":"HUAWEI Mate 30 Pro",
        "phoneImage":"image/mate30pro.png",
        "processor":"HUAWEI Kirin 990",
        "operatingSystem":"EMUI 10",
        "memory":"8 GB RAM + 256 GB ROM",
        "battery":"4500 mAh",
    },{
        "name":"HUAWEI Mate 30 ",
        "phoneImage":"image/mate30.png",
        "processor":"HUAWEI Kirin 990",
        "operatingSystem":"EMUI 10",
        "memory":"8 GB RAM + 128 GB ROM",
        "battery":"4200 mAh",
    }
];
let novaSeries = [
    {
        "name":"HUAWEI nova 5T",
        "phoneImage":"image/nova5t.png",
        "processor":"HUAWEI Kirin 980 Octa-core",
        "operatingSystem":"EMUI 9.1",
        "memory":"6 GB RAM + 128 GB ROM",
        "battery":"3750 mAh",
    },{
        "name":"HUAWEI nova 3",
        "phoneImage":"image/nova3.png",
        "processor":"HiSilicon Kirin 970",
        "operatingSystem":"EMUI 8.2",
        "memory":"4 GB RAM + 128 GB ROM",
        "battery":"3750 mAh",
    }
]
let n = 0;

function nextnova(){
    document.getElementById("novaname").innerHTML = novaSeries[n].name;
    document.getElementById("novaphoneImage").src = novaSeries[n].phoneImage;
    document.getElementById("novaprocessor").innerHTML ="Processor: "+ novaSeries[n].processor;
    document.getElementById("novaoperatingSystem").innerHTML ="Operating system: "+ novaSeries[n].operatingSystem;
    document.getElementById("novamemory").innerHTML ="Memory: "+ novaSeries[n].memory;
    document.getElementById("novabattery").innerHTML ="Battery: "+ novaSeries[n].battery;
    n++;
    if(n>1){
        n=0;
    }
}
function nextp(){
    document.getElementById("pname").innerHTML = pSeries[n].name;
    document.getElementById("pphoneImage").src = pSeries[n].phoneImage;
    document.getElementById("pprocessor").innerHTML ="Processor: "+ pSeries[n].processor;
    document.getElementById("poperatingSystem").innerHTML ="Operating system: "+ pSeries[n].operatingSystem;
    document.getElementById("pmemory").innerHTML ="Memory: "+ pSeries[n].memory;
    document.getElementById("pbattery").innerHTML ="Battery: "+ pSeries[n].battery;
    n++;
    if(n>2){
        n=0;
    }
}
function nextmate(){
    document.getElementById("matename").innerHTML = mateSeries[n].name;
    document.getElementById("matephoneImage").src = mateSeries[n].phoneImage;
    document.getElementById("mateprocessor").innerHTML ="Processor: "+ mateSeries[n].processor;
    document.getElementById("mateoperatingSystem").innerHTML ="Operating system: "+ mateSeries[n].operatingSystem;
    document.getElementById("matememory").innerHTML ="Memory: "+ mateSeries[n].memory;
    document.getElementById("matebattery").innerHTML ="Battery: "+ mateSeries[n].battery;
    n++;
    if(n>2){
        n=0;
    }
}