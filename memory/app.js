 document.addEventListener('DOMContentLoaded', ()=>{
    var chosen_cards = []
    var chosen_cards_id = []
    var won_cards = []
    const cards  = [
        {
            name: 'card01',
            image: 'assets/tiles/001.png'
        },
        {
            name: 'card01',
            image: 'assets/tiles/001.png'
        },
        {
            name: 'card02',
            image: 'assets/tiles/002.png'
        },
        {
            name: 'card02',
            image: 'assets/tiles/002.png'
        },
        {
            name: 'card03',
            image: 'assets/tiles/003.png'
        },
        {
            name: 'card03',
            image: 'assets/tiles/003.png'
        },
        {
            name: 'card04',
            image: 'assets/tiles/004.png'
        },
        {
            name: 'card04',
            image: 'assets/tiles/004.png'
        },
        {
            name: 'card05',
            image: 'assets/tiles/005.png'
        },
        {
            name: 'card05',
            image: 'assets/tiles/005.png'
        },
        {
            name: 'card06',
            image: 'assets/tiles/006.png'
        },
        {
            name: 'card06',
            image: 'assets/tiles/006.png'
        }
    ]

    cards.sort(()=>0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const result = document.querySelector('#result')

    function create_board()
    {
        for (let i = 0; i < cards.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'assets/tiles/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    function check_for_match()
    {
        let all_cards = document.querySelectorAll('img')
        const card1 = chosen_cards_id[0]
        const card2 = chosen_cards_id[1]

        if (cards[card1].name === cards[card2].name)
        {
            alert("That's a match!")
            all_cards[card1].setAttribute('src', 'assets/tiles/white.png')
            all_cards[card2].setAttribute('src', 'assets/tiles/white.png')
            won_cards.push(chosen_cards)
        }
        else
        {
            all_cards[card1].setAttribute('src', 'assets/tiles/blank.png')
            all_cards[card2].setAttribute('src', 'assets/tiles/blank.png')
        }

        chosen_cards = []
        chosen_cards_id = []
        result.textContent = won_cards.length
        if (won_cards.length === cards.length / 2)
            result.textContent = 'CONGRATULATIONS! YOU GOT THEM ALL!'
    }

    function flipcard()
    {
        let card_id = this.getAttribute('data-id')
        chosen_cards.push(cards[card_id].name)
        chosen_cards_id.push(card_id)
        this.setAttribute('src', cards[card_id].image)
        if (chosen_cards.length == 2)
        {
            setTimeout(check_for_match, 500);
        }
    }

    create_board()

})