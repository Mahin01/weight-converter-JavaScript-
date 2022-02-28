document.getElementById('output').style.visibility = 'hidden';

document.getElementById('lbsInput').addEventListener('input', function(e){

    document.getElementById('output').style.visibility = 'visible';

   let lbs = e.target.value;

   //Grams Value
   document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
    
    //Kilograms Value
   document.getElementById('kgOutput').innerHTML = lbs/2.2046;

    //Ounces Value
   document.getElementById('ozOutput').innerHTML = lbs*16;
});