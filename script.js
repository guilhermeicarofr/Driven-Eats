function findCard (m, c) {
    let card;
    if (m===1) {
        switch(c) {
            case 1:
                card = document.querySelector(".menu:nth-of-type(1) div:nth-child(1)");
                break;
            case 2:
                card = document.querySelector(".menu:nth-of-type(1) div:nth-child(2)");
                break;        
            case 3:
                card = document.querySelector(".menu:nth-of-type(1) div:nth-child(3)");
                break;
            case 4:
                card = document.querySelector(".menu:nth-of-type(1) div:nth-child(4)");
                break;
        }
    } else if (m===2) {
        switch(c) {
            case 1:
                card = document.querySelector(".menu:nth-of-type(2) div:nth-child(1)");
                break;
            case 2:
                card = document.querySelector(".menu:nth-of-type(2) div:nth-child(2)");
                break;        
            case 3:
                card = document.querySelector(".menu:nth-of-type(2) div:nth-child(3)");
                break;
            case 4:
                card = document.querySelector(".menu:nth-of-type(2) div:nth-child(4)");
                break;
        }
    } else if (m===3) {
        switch(c) {
            case 1:
                card = document.querySelector(".menu:nth-of-type(3) div:nth-child(1)");
                break;
            case 2:
                card = document.querySelector(".menu:nth-of-type(3) div:nth-child(2)");
                break;        
            case 3:
                card = document.querySelector(".menu:nth-of-type(3) div:nth-child(3)");
                break;
            case 4:
                card = document.querySelector(".menu:nth-of-type(3) div:nth-child(4)");
                break;
        }
    }
    return card;
}

function markCard (m,c) {
    const card = findCard(m,c);
    card.classList.toggle("selected");
}

function cardPrice (m,c) {
    let text = findCard(m,c).querySelector("h3").innerHTML;
    let price='';

    for(let i=2;i<7;i++) {

        if (text[i]==',')
            price += '.';
        else
            price += text [i];
    }
    Number(price);
    return(price);
}

function cardName (m,c) {
    const name = findCard(m,c).querySelector("h2").innerHTML;
    return name;
}

function onlyCardMenu (m) {

    let card;
    for (let j=1;j<5;j++) {
        card = findCard(m,j);
        if (card.classList.contains("selected"))
            card.classList.toggle("selected");
    }
} 

function buttonReady () {
    const button = document.querySelector(".bottom-bar button");
    button.classList.add("ready");
    button.querySelector("p").innerHTML = "Fechar pedido";
    return true;
}



function selectItem (m, c) {
    onlyCardMenu (m)
    markCard(m,c);
}
