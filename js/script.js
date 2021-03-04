// SPOONACULAR API KEY: 943f525789854813b6099c3922ce1010
// URL EXAMPLE: https://api.spoonacular.com/food/wine/pairing?apiKey=943f525789854813b6099c3922ce1010&food=steak
const $input = $('#searchBox');
const $pairingText = $('#pairingText');
const $title = $('#title');
const $description = $('#description');
const $productImage = $('#product-image');
const $price = $('#price');
const $link = $('#link');
const $wineList = $('#wineList');
const $message = $('#message');



$('form').on('submit', handleWineInfo);

function handleWineInfo(e) {
    e.preventDefault();
    const term = $input.val();
    $.ajax('https://api.spoonacular.com/food/wine/pairing?apiKey=943f525789854813b6099c3922ce1010&food=' + term).then(function(data) {
        let dataAll = data
        if (data.status) {
            $('.recprod-container').hide();
            $('#pairingText').hide();
            $('#wineList').hide();
            $message.show();
            $message.text(dataAll.message);
        } else {
            $message.hide();
            $('.recprod-container').show();
            $('#pairingText').show();
            $('#wineList').show();
            $wineList.empty();
            ul = document.createElement('ul');
            document.getElementById('wineList').appendChild(ul);
            data.pairedWines.forEach(function(wine) {
                let li = document.createElement('li');
                ul.appendChild(li);
                li.innerHTML += wine;
            })
            $pairingText.text(data.pairingText);
            document.getElementById("recprod").style.display = "block";
            $title.text(data.productMatches[0].title);
            $price.text(data.productMatches[0].price);
            $productImage.attr('src', data.productMatches[0].imageUrl);
            $description.text(data.productMatches[0].description);
            $link.attr('href', data.productMatches[0].link);
            $link.text("Purchase " + data.productMatches[0].title);
        }
    }), function () {
        // document.getElementById('error').display = block
    }
}