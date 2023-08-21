const express = require("express");


function fetchNumbersSorted(numberArray){
    for (let i = 0; i < numberArray.length; i++) {
        if(i!=numberArray.length-1){
            for(let a=i+1;a<numberArray.length;a++){
                if(numberArray[i]>numberArray[a]){
                    let holder=numberArray[i];
                    numberArray[i]=numberArray[a];
                    numberArray[a]=holder;
                }
            }
        }      
      }
      return numberArray;
}


module.exports = {
    fetchNumbersSorted:fetchNumbersSorted,
}