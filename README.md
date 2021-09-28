# recipePage

This will help users find recipes based on ingredients they input
Users will input a series of ingredients one at a time, then the ingredients will be sent to the edamam API, and it will return recipes that include those ingredients to truesale.me/recipes.html. At this point a list will be formatted with the first five recipes.

The list is unforunately hard coded until I get better at dynamically declaring variables. The ID's for the list are named with the intention of being able to set the by declaring variables dynamically but I wasn't able to get that far.

There really is only error protection for sending bad information to the API via the try-catch statement, I didn't include too much other error check due to time constraints.

The first image link should be clickable, for some reason most of the recipes do not go to the correct recipe page.
