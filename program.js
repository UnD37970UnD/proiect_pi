const form = document.querySelector('.calc')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let rezultat = document.getElementById("rezultat");
    let clasa_tol = document.getElementById("clasa_toleranta");
    let d_nom = document.getElementById("d_nominala");
    let tes = document.getElementById("tesitura");
    if(tes.checked)
        {
            switch(clasa_tol.value){
                case "f":{
                    if(d_nom.value > 3 && d_nom.value <=6)
                        rezultat.innerText = "±0,5 mm";
                    else if (d_nom.value > 6 && d_nom.value <=565)
                        rezultat.innerText = "±1 mm";
                }
                case "m":{
                    if(d_nom.value > 3 && d_nom.value <=6)
                        rezultat.innerText = "±0,5 mm";
                    else if (d_nom.value > 6 && d_nom.value <=565)
                        rezultat.innerText = "±1 mm";

                }
                case "c":{
                    if(d_nom.value > 3 && d_nom.value <=6)
                        rezultat.innerText = "±1 mm";
                    else if (d_nom.value > 6 && d_nom.value <=565)
                        rezultat.innerText = "±2 mm";

                }
                case "v":{
                    if(d_nom.value > 3 && d_nom.value <=6)
                        rezultat.innerText = "±1 mm";
                    else if (d_nom.value > 6 && d_nom.value <=565)
                        rezultat.innerText = "±2 mm";
                    
                }
            }
                 
        }
    else
        {
            switch(clasa_tol.value){
                case "f":{
                    if(d_nom.value > 3 && d_nom.value <=6)
                        rezultat.innerText = "±0,05 mm";
                    else if (d_nom.value > 6 && d_nom.value <=30)
                        rezultat.innerText = "±0,1 mm";
                    else if (d_nom.value > 30 && d_nom.value <=120)
                        rezultat.innerText = "±0,15 mm";
                    else if (d_nom.value > 120 && d_nom.value <=400)
                        rezultat.innerText = "±0,2 mm";
                    else if (d_nom.value > 400 && d_nom.value <=565)
                        rezultat.innerText = "±0,3 mm";
                }
                case "m":{
                    if(d_nom.value > 3 && d_nom.value <=6)
                        rezultat.innerText = "±0,1 mm";
                    else if (d_nom.value > 6 && d_nom.value <=30)
                        rezultat.innerText = "±0,2 mm";
                    else if (d_nom.value > 30 && d_nom.value <=120)
                        rezultat.innerText = "±0,3 mm";
                    else if (d_nom.value > 120 && d_nom.value <=400)
                        rezultat.innerText = "±0,5 mm";
                    else if (d_nom.value > 400 && d_nom.value <=565)
                        rezultat.innerText = "±0,8 mm";
                }
                case "c":{
                    if(d_nom.value > 3 && d_nom.value <=6)
                        rezultat.innerText = "±0,3 mm";
                    else if (d_nom.value > 6 && d_nom.value <=30)
                        rezultat.innerText = "±0,5 mm";
                    else if (d_nom.value > 30 && d_nom.value <=120)
                        rezultat.innerText = "±0,8 mm";
                    else if (d_nom.value > 120 && d_nom.value <=400)
                        rezultat.innerText = "±1,2 mm";
                    else if (d_nom.value > 400 && d_nom.value <=565)
                        rezultat.innerText = "±2 mm";
                }
                case "v":{
                    if(d_nom.value > 3 && d_nom.value <=6)
                        rezultat.innerText = "±0,5 mm";
                    else if (d_nom.value > 6 && d_nom.value <=30)
                        rezultat.innerText = "±1 mm";
                    else if (d_nom.value > 30 && d_nom.value <=120)
                        rezultat.innerText = "±1,5 mm";
                    else if (d_nom.value > 120 && d_nom.value <=400)
                        rezultat.innerText = "±2,5 mm";
                    else if (d_nom.value > 400 && d_nom.value <=565)
                        rezultat.innerText = "±4 mm";
                }
            }
        }
        
});