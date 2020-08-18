function addSpaceOnNumber(element,value){
    if(element.id == 'chiffre_affaire'){
        if(value.toString().replace(/[^0-9.]/g, "").replace(/ /g, "") > 30000000){
            element.value = 0;
            return;
        }
    }
    element.value = addThreeSpace(value);
}

function addThreeSpace(value){
    //Remove all none numeric value
    let numericValue = value.toString().replace(/[^0-9.]/g, "").replace(/ /g, "");
    //Add space
    const threeZeroCount = Math.trunc(numericValue.length / 3);
    console.log(threeZeroCount);
    let start = numericValue.length;
    for(let i = 0; i < threeZeroCount; i++){
        const index = start - 3*(i+1);
        if(index == 0){
            break;
        }
        numericValue = addStringAtIndex(numericValue, " ", index); 
    }
    return numericValue.slice(0, numericValue.length);
}

/**
 * 
 * @param {String} email 
 */
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email){
        return re.test(email.toLowerCase());
    } else {
        return true;
    }
}

/**
 * 
 * @param {String} phoneNumber 
 */
function validatePhoneNumberFromGabon(phoneNumber){
    const re = /0(6[1256]|7[74])[0-9]{6}/;
    const test= phoneNumber.replace(/ /g, "").toLowerCase();
    return  re.test(test);
}

/**
 * 
 * @param {String} str 
 * @param {String} value 
 * @param {Number} index 
 */
function addStringAtIndex(str, value, index){
    return str.slice(0, index) + value + str.slice(index, str.length);
}