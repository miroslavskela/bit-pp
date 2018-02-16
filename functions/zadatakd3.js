/* Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2] */

function rotates(niz,k){
    var newNiz=[];
    var j=0;
    for( i=k; i<niz.length; i++){
        newNiz[j]=niz[i];
        j++;
    }for(i=0; i<k;i++){
        newNiz[j]=niz[i];
        j++; 
    }
    return newNiz;

}console.log(rotates([1,2,3,4,5,6], 2));