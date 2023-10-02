const reponse = await fetch("json/allchamps.json");
const champs = await reponse.json();

const champsZone = document.querySelector(".champsZone")


const fonction = function(x){
    for(let i = 0; i< champs.length; i++){
        const champCard = document.createElement("a")
        const champName = x[i].name
        const ChampImgSrc = x[i].icon
        champCard.href = `./pagesChampions/${champName}`
        champCard.innerHTML = `<h2>${champName}</h2><img src="${ChampImgSrc}">`
        champsZone.appendChild(champCard)
    }
}
fonction(champs)


// FILTRES // 

const btnPdvDec = document.querySelector("#filtrePdvDec")
const btnPdvCro = document.querySelector("#filtrePdvCro")

btnPdvCro.addEventListener("click", () => {
    const TriPdvCro = Array.from(champs)
    TriPdvCro.sort(function(a, b){
        return b.stats.hp - a.stats.hp
    })
    champsZone.innerHTML = ""
    fonction(TriPdvCro)
})

btnPdvDec.addEventListener("click", () =>{
    const TriPdvDec = Array.from(champs)
    TriPdvDec.sort(function(a, b){
        return a.stats.hp - b.stats.hp
    })
    champsZone.innerHTML = ""
    fonction(TriPdvDec)


})

const FiltrePdvMax = document.querySelector("#trierPdvMax")


FiltrePdvMax.addEventListener('input', () =>{
    const ChampionsFiltres = champs.filter(function(x){
        return x.stats.hp < FiltrePdvMax.value
    })
    champsZone.innerHTML =""
    fonction(ChampionsFiltres);
})