// Your code here
function mapToNegativize(arr){
    let newarr = [];
    for(let e of arr){
        e = e * (-1);
        newarr.push(e);
    }
    return newarr;
}

const mapToNoChange = (arr)=>{
    return arr;
}

function mapToDouble(arr){
    let newarr = [];
    for(let e of arr){
        newarr.push(e*2);
    }
    return newarr;
}
function mapToSquare(arr){
    let newarr = [];
    for(let e of arr){
        newarr.push(e*e);
    }
    return newarr;
}
function reduceToTotal(arr,total=0){
    for(let e of arr){
        total = total + e;
    }
    return total;
}
function reduceToAllTrue(arr){
    let b = true;
    for(let e of arr){
        if((!e)){
            b=false;
            return b;
        }
    }
    return b;
}
function reduceToAnyTrue(arr){
    let b = false;
    for(let e of arr){
        if((e)){
            b=true;
            return b;
        }
    }
    return b;
}
