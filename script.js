let item=[]; //array contendo os nome dos 3 produtos selecionados
let price=[]; //array contendo os precos dos 3 produtos selecionados
let count = 0;

//marca o card de produto selecionado
function markCard (card) {
    card.classList.toggle("selected");
}

//garante que apenas um card seja selecionado por menu
function onlyCardMenu (m) {

    switch (m) {
    case 1:
        marked = document.querySelector(".menu:nth-of-type(1) div.selected");
        break;
    case 2:
        marked = document.querySelector(".menu:nth-of-type(2) div.selected");
        break;
    case 3:
        marked = document.querySelector(".menu:nth-of-type(3) div.selected");
        break;
    }
    
    if (marked)
        marked.classList.remove("selected");
}

//extrai o preco do produto do html
function cardPrice (card) {
    let text = card.querySelector("h3").innerHTML;
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

//extrai o nome do produto do html
function cardName (card) {
    const name = card.querySelector("h2").innerHTML;
    return name;
}

//habilita o botao de finalizar
function buttonReady () {
    const button = document.querySelector(".bottom-bar button");
    button.classList.add("ready");
    button.querySelector("p").innerHTML = "Fechar pedido";
    return true;
}



//Funcao chamada pelo clique na div de um card de produto
function selectItem (m, card) {
    
    //chamando funcoes para desmarcar outro pedido do mesmo menu e marcar o clicado
    onlyCardMenu (m);
    markCard(card);

    //verifica se o item clicado é apenas uma troca de opcao ou é mais uma selecao de outro menu
    if (item[m-1] == null)
        count++;

    //preencher os arrays com nome e preco do item
    item[m-1] = cardName(card);
    price[m-1] = cardPrice(card);

    //monitora se os 3 itens já foram selecionados para finalizar o pedido
    if (count>=3)
        buttonReady();
}