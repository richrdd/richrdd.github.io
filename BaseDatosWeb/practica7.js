const gameended=false;
const testo=document.getElementById("testo");
const grid=document.getElementById("grid");
function check(pos){
    if(!(document.getElementById("c"+pos).value=="X" || document.getElementById("c"+pos).value=="O")){
        console.log(document.getElementById("c"+pos).value)
        document.getElementById("c"+pos).value="";
    }

    const c1 = document.getElementById("c1");
    const c2 = document.getElementById("c2");
    const c3 = document.getElementById("c3");
    const c4 = document.getElementById("c4");
    const c5 = document.getElementById("c5");
    const c6 = document.getElementById("c6");
    const c7 = document.getElementById("c7");
    const c8 = document.getElementById("c8");
    const c9 = document.getElementById("c9");

    

    if(c1.value==c2.value && c1.value==c3.value && c1.value!=""){
        var val=c1.value;
        c1.style.backgroundColor="green";
        c2.style.backgroundColor="green";
        c3.style.backgroundColor="green";
        if(val=="X"){
            endGame("X");
        }else{
            endGame("O");
        }
    }
    if(c4.value==c5.value && c4.value==c6.value  && c4.value!=""){
        var val=c4.value;
        c4.style.backgroundColor="green";
        c5.style.backgroundColor="green";
        c6.style.backgroundColor="green";
        if(val=="X"){
            endGame("X");
        }else{
            endGame("O");
        }
    }
    if(c7.value==c8.value && c7.value==c9.value && c7.value!=""){
        var val=c7.value;
        c7.style.backgroundColor="green";
        c8.style.backgroundColor="green";
        c9.style.backgroundColor="green";
        if(val=="X"){
            endGame("X");
        }else{
            endGame("O");
        }
    }
    if(c1.value==c4.value && c1.value==c7.value && c1.value!=""){
        var val=c1.value;
        c1.style.backgroundColor="green";
        c4.style.backgroundColor="green";
        c7.style.backgroundColor="green";
        if(val=="X"){
            endGame("X");
        }else{
            endGame("O");
        }
    }
    if(c2.value==c5.value && c2.value==c8.value && c2.value!=""){
        var val=c2.value;
        c2.style.backgroundColor="green";
        c5.style.backgroundColor="green";
        c8.style.backgroundColor="green";
        if(val=="X"){
            endGame("X");
        }else{
            endGame("O");
        }
    }
    if(c3.value==c6.value && c3.value==c9.value && c3.value!=""){
        var val=c3.value;
        c3.style.backgroundColor="green";
        c6.style.backgroundColor="green";
        c9.style.backgroundColor="green";
        if(val=="X"){
            endGame("X");
        }else{
            endGame("O");
        }
    }
    if(c1.value==c5.value && c1.value==c9.value && c1.value!=""){
        var val=c1.value;
        c1.style.backgroundColor="green";
        c5.style.backgroundColor="green";
        c9.style.backgroundColor="green";
        if(val=="X"){
            endGame("X");
        }else{
            endGame("O");
        }
    }
    if(c3.value==c5.value && c3.value==c7.value && c3.value!=""){
        var val=c3.value;
        c3.style.backgroundColor="green";
        c5.style.backgroundColor="green";
        c7.style.backgroundColor="green";
        if(val=="X"){
            endGame("X");
        }else{
            endGame("O");
        }
    }
}

function endGame(which){
    grid.style.display="none";
    if(which=="X"){
        testo.innerHTML="Las X han ganado el juego!!";
    }else{
        testo.innerHTML="Las O han ganado el juego!!";
    }
}