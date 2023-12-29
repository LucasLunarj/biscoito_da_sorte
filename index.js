const Cookie = document.querySelector('.box1 img');
const resetButton = document.querySelector('.box2 button')
let randomNumber = Math.round(Math.random() * 9);
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')


const wordsList = ['A vida trará coisas boas se tiver paciência'
    , 'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão', 'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo', 'Não há que ser forte. Há que ser flexível.', 'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.', 'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
    'Siga os bons e aprenda com eles.'
];


function luckyWordsGenerator() {
    box1.classList.toggle('hide')
    box2.classList.toggle('hide')

    document.querySelector('.box2 p').innerText = `${wordsList[randomNumber]}`

}

Cookie.addEventListener('click', luckyWordsGenerator)

function reset() {
    box1.classList.toggle('hide')
    box2.classList.toggle('hide')

    randomNumber = Math.round(Math.random() * 9);
}

resetButton.addEventListener('click', reset)
