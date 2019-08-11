var cartas=["img/1.png","img/1.png","img/2.png","img/2.png","img/3.jpg","img/3.jpg","img/4.png","img/4.png","img/5.png","img/5.png","img/6.jpg","img/6.jpg","img/7.png","img/7.png","img/8.jpg","img/8.jpg"];
var contador = 0
var puntuaje = 0

function Rotar(carta)
{
    if (!$("#"+ carta.id).hasClass("active"))
    {
        $("#" + carta.id).addClass("voltear"),
        setTimeout(function()
        {
            carta.src = cartas[parseInt(carta.id)-1], 
            $("#" + carta.id).addClass("mostrar")
        }, 400)
        $("#" + carta.id).addClass("active")
    }
    else
    {
        $("#" + carta.id).removeClass("mostrar"),
        setTimeout(function()
        {
            carta.src = "img/0.jpg",
            $("#" + carta.id).removeClass("voltear")
        }, 400)
        $("#" + carta.id).removeClass("active")
    }
}

var pareja1
var pareja2

function MostrarCarta(carta)
{
    if (!$("#" + carta.id).hasClass("pareja") || !$("#" + carta.id).hasClass("active"))
    {
        puntuaje=puntuaje+1
        if (puntuaje == 1)
        {
            pareja1 = carta
            Rotar(pareja1)
        }
        if (puntuaje == 2)
        {
            pareja2 = carta
            if (pareja1 != pareja2)
            {
                Rotar(pareja2)
                setTimeout(() => {
                    if (pareja1.src == pareja2.src)
                    {
                        swal("Acertaste", "", "img/Gol.jpg");
                        contador=contador+1
                        $("#" + pareja1.id).addClass("pareja")
                        $("#" + pareja2.id).addClass("pareja")
                    
                        if (contador == 1)
                        {
                            $("#puntuacion")[0].innerHTML ="Pares Encontrados: "+ contador + "/8"
                        }
                        else
                        {
                            $("#puntuacion")[0].innerHTML ="Pares Encontrados: "+ contador + "/8"
                        }
                        if (contador == 8)
                        {
                            swal("¡¡Felicidades Ganaste!!","","img/copa.jpg");
                        }
                        
                    }
                    else
                    {
                        swal("Fallaste","", "img/error.png");
                        Rotar(pareja1)
                        Rotar(pareja2)
                    }
                    setTimeout(() => {
                        puntuaje = 0
                    }, 600)
                }, 1500)
            }
        }
    }
}
cartas.sort(function()
{
   return Math.random()- 0.5 
})


for (let i = 0; cartas.length > i; i++) 
{
    $("#" + (i + 1)).click(function() 
    {
        MostrarCarta(this)
    })
}
