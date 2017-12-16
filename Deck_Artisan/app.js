var cards;
var dataPromise;

function getCardData() {
  if(!dataPromise){
    dataPromise = $.ajax({ // Store jQuery promise so that we can return it for subsequent calls ensuring only one AJAX request is made
      url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards?collectible=10',
      type: 'GET',
      dataType: 'json',
      beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", "WlzAscEC75mshB8Cp0MUyAVZxY3gp1WvGMFjsnKSys4gfQ79PM");
      }
    });
  } 
  return dataPromise;
}

function showCardRandom(){
  var cardNo = Math.floor(Math.random() * cards.length); // Select a random card number
  showCard(cardNo)
}

function showCard(cardNo){
  var obj = cards[cardNo];
  $("#card-image").attr('src', obj.img);
  $("#card-name").html(obj.name);
  $("#card-type").text(obj.type);
  $("#card-faction").text(obj.faction);
  $("#card-rarity").text(obj.rarity);
  $("#player-class").text(obj.playerClass);
  $("#artist-name").text(obj.artist);
}


function flattenCards(data){
    // Flatten the object as cards are stored in sets
    var result = [];
    for (var set in data) {
      for (var i = 0; i < data[set].length; i++) {
        result.push(data[set][i]);
      }
    }
    return result;
}

var deck = document.querySelector(".display-cards-right");

$(document).ready(function () {
	getCardData()
		.done(function (data) {
			$("#nextCard").text("Next");
			cards = flattenCards(data);
			console.log(cards);
			var subset = [];
			for (let i = 0; i < cards.length; i++) {
				if (cards[i].rarity == "Free") {
					subset.push(cards[i]);
				}
			}
		console.log(subset);
			for (let i = 0; i < 10; i++) {
				var card = subset[Math.round(Math.random() * subset.length)];
				var cardWrap = document.createElement('div');
				cardWrap.classList.add("new-card");
				var img = document.createElement('img');
				img.src = card.img;
				
				var name = document.createElement('div');
				name.textContent = card.name;
				
				var type = document.createElement('div');
				type.textContent = card.type;
				
				var faction = document.createElement('div');
				faction.textContent = card.faction;
				
				
				
				cardWrap.appendChild(img);
				cardWrap.appendChild(name);
				cardWrap.appendChild(type);
				cardWrap.appendChild(faction);
				deck.appendChild(cardWrap);
			}
		});
});



