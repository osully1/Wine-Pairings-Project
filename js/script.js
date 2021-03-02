// SPOONACULAR API KEY: 943f525789854813b6099c3922ce1010
// URL EXAMPLE: https://api.spoonacular.com/food/wine/pairing?apiKey=943f525789854813b6099c3922ce1010&food=steak

const $input = $('#searchBox');
const $wine = $('.wine');
const $pairingText = $('#pairingText');

$('form').on('submit', handleWineInfo);

function handleWineInfo(e) {
    e.preventDefault();
    const term = $input.val();
    $.ajax('https://api.spoonacular.com/food/wine/pairing?apiKey=943f525789854813b6099c3922ce1010&food=' + term).then(function(data) {
        ul = document.createElement('ul');
        document.getElementById('wineList').appendChild(ul);
        data.pairedWines.forEach(function(wine) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.innerHTML += wine;
        })
        $pairingText.text(data.pairingText);
    })}