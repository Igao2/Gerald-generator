const pronomes_pessoais = ["eu",
"nós",
"os rapazes",
"fellas"]
const pronome_possesivos =[
    ["meu","minha"],
    ["nossos","nossas"]
    ["dela"]
]
const substantivo = ["NAAAAAAAAAAAAAAAO","merda","joelho","crack","trembolona","skill issue","pés","pézinho"]
const adverbio = ["talvez","e se"]
const verbos_subjuntivo = [["usasse","cheirasse","lambesse","rebolasse"],
["usassemos","cheirassemos","lambessemos","rebolassemos"],
["usassem","cheirassem","lambessem","rebolassem"]]
//const verbos_infinitivo = ["rebolar","usar","fazer","cheirar"]

function montarfrase()
{
    
   
    var add = adverbio[Math.floor(Math.random()*2)]
    var ppe = pronomes_pessoais[Math.floor(Math.random() * 4)]
    var vs = ""
    if(ppe == "eu")
    {
        vs = verbos_subjuntivo[0][Math.floor(Math.random()*4)]
    }
    else if(ppe == "os rapazes"||ppe == "fellas")
    {
        vs = verbos_subjuntivo[2][Math.floor(Math.random()*4)]
    }
    else if(ppe == "nós")
    {
        vs = verbos_subjuntivo[1][Math.floor(Math.random()*4)]
    }
    var su = substantivo[Math.floor(Math.random()*8)]
    var frase = add+" "+ppe+" "+vs+ " "+su
    console.log(frase)
    return frase
   
    
    
}
var but = document.getElementById("gerar")
but.addEventListener("click",function()
{
    var b =montarfrase()
    var a = "''"
    document.getElementById("resultado").innerHTML= a+b+a
})
var twitter = document.getElementById("tweet")
twitter.addEventListener("click",function(){
    texto = "By generaldgenerator:"+document.getElementById("resultado").textContent

    var twitterURL = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(texto);

    window.open(twitterURL, "_blank");
})

