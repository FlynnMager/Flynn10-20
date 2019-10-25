function firstLast6(arr){
    if(arr[arr.length-1]==6||arr[0]==6){
        return true
    }
    return false
}
function has23(arr){
    if(arr[0]==2||arr[0==3]||arr[1]==2||arr[1]==3){
        return true
    }
    return false
}
function fix_23(arr){
    for(var i = 0; i<2; i++){
        if(arr[i]==2&&arr[i+1]==3)
            arr[i+1]= 0
    }
    return arr
}
function countYZ(arr) {
    var x = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == " " && (arr[i - 1] == "y" || arr[i - 1] == "z")) {
            x++
        }
        if (arr[i] == " " && (arr[i - 1] == "Y" || arr[i - 1] == "Z")) {
            x++
        }
    }
    if (arr[arr.length - 1] == "y" || arr[arr.length - 1] == "z") {
        x++
    }
    if (arr[arr.length - 1] == "Y" || arr[arr.length - 1] == "Z") {
        x++
    }
    return x
}
function endOther(x,y) {
    x= x.toLowerCase();
    y= y.toLowerCase();
    if (x.length <= y.length) {
        if (x == y.substring(y.length - x.length, y.length)) {
            return true
        }
    }else if (y == x.substring(x.length-y.length, x.length)) {
            return true
    }
    return false
}

function starOut(x){
    var y="";
    for(var i=0;i<x.length;i++){
        if(!(x.substring(i-1,i)=="*"||x.substring(i+1,i+2)=="*"||x.substring(i,i+1)=="*")){
            y=y+x.substring(i,i+1);
        }
    }
    return y
}

function getSandwich(x){
    var y = "";
    if(!(x.indexOf("bread")== x.lastIndexOf("bread"))){
        y = x.substring(x.indexOf("bread")+5,x.lastIndexOf("bread"))
    }
    return y
}

function canBalance(x){
    var b = 0;
    var a = 0;
    for(var i = 0; i < x.length; i++){
        a=0;
        b=0;
        for(var z = 0; z < i+1; z++){
            a += x[z]
        }
        for(var d = i+1 ; d < x.length; d++){
            b += x[d]
        }
        if(a==b){
            return true
        }
    }
    return false
}
function countClumps(x) {
    var y = 0;
    for (var i = 0; i < x.length; i++) {
        if (x[i] == x[i + 1]) {
            while (x[i] == x[i + 1]) {
                i++
            }
            y++
        }
    }
    return y
}
function evenlySpaced(t,y,u){
    var x = [t,y,u];
    var s=0;
    var m=0;
    var b=0;
    if(x[0]>x[1]&&x[0]>x[2]){
        b=x[0];
        if(x[1]>x[2]){
            m=x[1];
            s=x[2];
        }else{
            m=x[2];
            s=x[1];
        }
    }else if(x[1]>x[2]){
        b=x[1];
        if(x[0]>x[2]){
            m=x[0];
            s=x[2];
        }else{
            m=x[2];
            s=x[0];
        }
    }else{
        b=x[2];
        if(x[0]>x[1]){
            m=x[0];
            s=x[1];
        }else{
            m=x[1];
            s=x[0];
        }
    }
    if((m-s) == (b-m)){
        return true
    }
    return false
}


function tester() {
    document.getElementById("output").innerHTML += firstLast6(arr);
    document.getElementById("output").innerHTML += has23(arr);
    document.getElementById("output").innerHTML += fix_23(arr);
    document.getElementById("output").innerHTML += countYZ(arr);
    document.getElementById("output").innerHTML += endOther(x,y);
    document.getElementById("output").innerHTML += starOut(x);
    document.getElementById("output").innerHTML += getSandwich(x);
    document.getElementById("output").innerHTML += canBalance(x);
    document.getElementById("output").innerHTML += countClumps(x);
    document.getElementById("output").innerHTML += evenlySpaced(t,y,u)
}
