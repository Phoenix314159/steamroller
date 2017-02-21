function steamrollArray() {
  
 var arr2 = [];
 
 for(var i=0; i<arguments[0].length; i++){
    
    if(Array.isArray(arguments[0][i])){
       
       arr2 = arr2.concat(steamrollArray(arguments[0][i]));
       }
    else {
      
      arr2.push(arguments[0][i]);
    }
  }
  return arr2;
}
