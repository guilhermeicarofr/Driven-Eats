function selectItem (m, c) {
    

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
    card.classList.toggle("selected");











}