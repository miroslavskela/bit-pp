/*Write a function that combines two arrays by alternatingly taking elements.

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]
  */ 
"use strict"
function combines(niz1,niz2){
    var newniz=[];
for(var i=0,j=0; i<niz1.length;i++,j++){
    newniz[j]=niz1[i];
    j++;
    newniz[j]=niz2[i];
}return newniz;
}console.log(combines(["a", "b", "c"], [1,2,3]));