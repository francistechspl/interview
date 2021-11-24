'use strict';

function getCentralIndex(params) {
    if (!Array.isArray(params))
        return null;
        
    if (params.length <= 2) {
        return null;
    }

    let i = 0, j=params.length - 1;
    var left = params[i];
    var right = params[j];

    while(i < j) {
        if (left == right) {
            if (i+2 == j) {
                return i+1;
            }
            left += params[++i];
        } else {
            if (left > right) {
                j--;
                right +=params[j];
            } else {
                i++;
                left +=params[i];
            }   
        }
    }
    return null;
}

module.exports = getCentralIndex;