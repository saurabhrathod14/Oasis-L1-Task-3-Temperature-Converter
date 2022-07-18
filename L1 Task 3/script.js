const calculateTemp=() => {
    const numberTemp=document.getElementById('temp').value;
    const tempSelected=document.getElementById('temp_diff');
    const valueTemp=temp_diff.options[tempSelected.selectedIndex].value;
    const celtofah=(cel) => {
        let fahrenheit = Math.round((cel*9/5)+32);
        return fahrenheit;
    }
    const fahtocel= (fehr) => {
        let celcius = Math.round((fehr-32) * 5/9 );
        return celcius;
    }
    let answer;
    if(valueTemp=='cel'){
        answer=celtofah(numberTemp);
        document.getElementById('answer').innerHTML= `= ${answer}° fahrenheit`;

    }else{
        answer=fahtocel(numberTemp);
        document.getElementById('answer').innerHTML= `= ${answer}° celcius`;
        
    }


}