let item=[]; //array contendo os nome dos 3 produtos selecionados
let price=[]; //array contendo os precos dos 3 produtos selecionados
let count = 0; //contador de pedidos selecionados
let client = ''; //nome do cliente
let adress = ''; //endereco do cliente
let wmessage = ''; //mensagem do whatsapp nao codificada

/*funcoes secundárias chamadas por outras funcoes*/

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
    const text = card.querySelector("h3").innerHTML;
    let price='';
    for(let i=2;i<7;i++) {

        if (text[i]==',')
            price += '.';
        else
            price += text [i];
    }
    price = Number(price);
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
}

//funcao que chama/volta a tela de confirmacao
function checkout () {
    document.querySelector(".checkout-box").classList.toggle('hidden');
}

//funcao que escreve a mensagem de whatsapp e codifica ela para o link
function whatsWrite () {
    let total = (price[0]+price[1]+price[2]);
    wmessage =`Olá, gostaria de fazer o pedido:\n - Prato: ${item[0]}\n - Bebida: ${item[1]}\n - Sobremesa: ${item[2]}\nTotal: R$ ${total.toFixed(2)}\n\nNome: ${client}\nEndereço: ${adress}`;
    return (encodeURIComponent(wmessage));
}

//funcao que modifica o href do link do botao da tela de chekout para formatar o whatsapp
function whatsLink () {
    let link = `https://wa.me/5531993751892?text=${whatsWrite()}`;
    let html = `<a href="${link}" target="_blank">Tudo certo, pode pedir!</a>`;
    (document.querySelector(".checkout-box div button:nth-of-type(1)").innerHTML) = html;
}



/*funcoes primarias chamadas por clique*/

//Funcao chamada pelo clique na div de um card de produto, recebe o numero do menu(1,2,3) e o 'div.this'
function selectItem (m, card) {
    
    //chamando funcoes para desmarcar outro pedido do mesmo menu e marcar o clicado
    onlyCardMenu(m);
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

//funcao chamada pelo botao finalizar pedido, pede nome e endereco, armazena e chama a tela de confirmacao
function closeOrder (button) {
    
    if (button.classList.contains("ready")) {
        client = prompt("Informe seu nome:");
        adress = prompt("Informe seu endereço");
        checkout();
        whatsLink();
    }
}