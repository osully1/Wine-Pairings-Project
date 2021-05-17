# O-wine Pairing Companion

Link to Live Site: https://osully1.github.io/Wine-Pairings-Project/
Link to test for mobile use: http://www.responsinator.com/?url=http%3A%2F%2F127.0.0.1%3A5500%2Findex.html

The O-wine Pairing Companion will accept most any food, ingredient, or cuisine-type input for which you want a wine to compliment. It will return:
  * Multiple types of wine pairings
  * Explanations on why these wine pairings fit your food, ingredient, or cuisine
  * A recommended product, its price, and its label (if label is available)
  * A description of the recommended product
  * A link that will brings you to a page where you can buy this recommended product in a new window
  
The O-wine Pairing Companion takes advantage of the following technologies:
  * Spoonacular API: https://spoonacular.com/food-api
  * ajax requests to the Spoonacular API
  * jquery
  * media queries to format it for mobile and desktop use

My personal goal for this project was to focus on styling (my biggest weakness). The JS involves a simple API request that adds text to empty p tags, adds li tags with text to empty ul tags, and an SRC attribute to an empty IMG tag. Then, the majority of my primary focus was CSS styling and mobile-first formatting.
  
The next step for this project is to format and style for medium-sized screens such as tablets. Then, if not too cumbersome, provide suggestions of recipes to go with the food, ingredient, or cuisine of choice.
