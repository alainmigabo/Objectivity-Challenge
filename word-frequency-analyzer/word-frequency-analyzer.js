//////////////////////// EXAMPLE OF A STRING INPUT ////////////////////////

// let str = "how are you going to ask him how you got him here?";

function frequency (str) {
    let arr = str.split(" ");
    let newarr = [];
    let count = 0;
    let itemsarray = [];
    for (let i in arr){
        if (arr[i] != 200) {
            for (let j in arr){
                if(arr[i] === arr[j]){
                    count++;
                }
                else{}
            }
            for(let k in newarr){
                itemsarray.push(newarr[k].item);
            }
            if(!itemsarray.includes(arr[i])){
                newarr.push({
                    "item":arr[i],
                    "count":count
                })
                arr[i] = 200;
                count = 0;
            }
        }
    }
    let largest = 0;
    for (let i in newarr){
        if(newarr[i].count > largest){
            largest = newarr[i].count;
        }
    }
    let output = [];
    for (let n=largest;n>0;n--){
        for (let i in newarr){
            if (newarr[i].count === n) {
                output.push({"word":newarr[i].item,"frequency count":newarr[i].count})
            }
        }
    }
    return output
}

//////////////////////// EXAMPLE OF FUNCTION CALL ////////////////////////

// frequency(str)