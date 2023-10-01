const reponse = await fetch("json/allchamps.json");
const champs = await reponse.json();

const champsZone = document.querySelector(".champsZone")

console.log(champsZone);

for(let i = 0; i< champs.length; i++){
    const champCard = document.createElement("a")
    const champName = champs[i].name
    const ChampImgSrc = champs[i].icon
    champCard.href = `./pagesChampions/${champName}`
    champCard.innerHTML = `<h2>${champName}</h2><img src="${ChampImgSrc}">`
    champsZone.appendChild(champCard)
    console.log(champCard);
}
