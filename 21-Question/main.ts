interface objType{
    country:string
    capitalCity:string
}

let countriesObject1:objType ={
    country:"Iran",
    capitalCity:"Tehran"
}
let countriesObject2:objType ={
    country:"Iraly",
    capitalCity:"Rome"
}
let countriesObject3:objType ={
    country:"Pakitan",
    capitalCity:"Islamabad"
}
let countriesObject4:objType ={
    country:"UK",
    capitalCity:"London" 
}


console.log("Countries With their capital cities:");
console.log("---------------------------------------");
console.log(`Country Name: ${countriesObject1.country} - Capital: ${countriesObject1.capitalCity}`);
console.log("---------------------------------------");
console.log(`Country Name: ${countriesObject2.country} - Capital: ${countriesObject2.capitalCity}`);
console.log("---------------------------------------");
console.log(`Country Name: ${countriesObject3.country} - Capital: ${countriesObject3.capitalCity}`);
console.log("---------------------------------------");
console.log(`Country Name: ${countriesObject4.country} - Capital: ${countriesObject4.capitalCity}`);
console.log("---------------------------------------");
