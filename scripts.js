// document.getElementById('bmi-form').addEventListener('submit',function(even){
//     Event.preventDefault();

// var height = parseFloat(document.getElementById('height').value);
// var weight = parseFloat(document.getElementById('weight').value);
// var button = document.getElementById('button');

 var height = ""

if(weight > 0 && height > 0) {
    var bmi = weight / (height*height);
    var category = '';

    if (bmi <18.6){
        category = 'Under Weight';
    }
    else if (bmi >= 18.6 && bmi <24.9){
        category = 'Normal Weight';
    }
    else if (bmi>25 && bmi < 29.9){
        category = 'Over Weight';
    }
    else{
        category = 'Obesity';
    }
}

// })