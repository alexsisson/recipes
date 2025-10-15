
const recipes = [
  {
    author: 'Provo High Culinary Students',
    url: '',
    isBasedOn: '',
    cookTime: '30 min',
    datePublished: '2016-10-16',
    tags: ['Waffles', 'Sweet Potato', 'Side'],
    description: 'Savory waffles made with sweet potato with a hint of ginger.',
    image: './images/sweet-potato-waffle-md.jpg',
    recipeIngredient: [
      '2 separated eggs',
      '1/4 C oil',
      '1/4 tsp salt',
      '1/4 tsp cayenne pepper',
      '3/4 C milk',
      '1 Tbsp brown sugar',
      '2 tsp shredded ginger',
      '3/4 C mashed sweet potatoes',
      '1 Tbsp minced shallots',
      '1 Tbsp baking powder',
      '1 Tbsp chives',
      '1/4 C cornmeal',
      '1 C flour'
    ],
    name: 'Sweet Potato Waffles',
    prepTime: '30 min',
    recipeInstructions: [
      'Add the egg yolks, oil, salt, cayenne, sugar, ginger, shallots, sweet potatoes (steam and mash before), and milk. Mix well.',
      'Add cornmeal, chives, flour, and baking powder.',
      'Whip the egg whites until stiff and fold in.',
      'Cook until golden brown in a waffle iron. Serve with butter or honey.'
    ],
    recipeYield: '6 waffles',
    rating: 4
  },
  {
    author: 'Shane Thompson',
    url: '',
    isBasedOn: '',
    cookTime: '20 min',
    tags: ['Chicken', 'Entree'],
    description:
      'Delicious creamy rice dish. The mustard, mushrooms, and lemon all blend together wonderfully.',
    image: './images/escalopes-de-poulet-a-la-creme.webp',
    recipeIngredient: [
      '2 chicken tenders, cubed',
      '4 mushrooms, sliced',
      '1/2 C whipping cream',
      '1-2 Tbsp mustard',
      '1 tsp lemon juice',
      'Salt and pepper to taste',
      '1 C rice',
      '4 oz green beans'
    ],
    name: 'Escalope de Poulet à la Crème',
    prepTime: '10 min',
    recipeInstructions: [
      'Boil rice and set aside.',
      'Cook chicken and mushrooms.',
      'Add cream, mustard, lemon juice, salt, and pepper.',
      'Serve sauce over rice with steamed green beans.'
    ],
    rating: 4.5
  },
  {
    author: 'Shane Thompson',
    cookTime: '30 min',
    tags: ['Potatoes', 'Side'],
    description: 'Easy and delicious oven-roasted potatoes that go great with almost anything.',
    image: './images/roasted-potatoes.webp',
    recipeIngredient: [
      '3-4 potatoes',
      '1 Tbsp olive oil',
      '2 tsp Italian seasoning',
      '1/2 tsp salt',
      '1/2 tsp pepper',
      '1 tsp hot sauce (optional)'
    ],
    name: 'Oven Roasted Potato Slices',
    prepTime: '10 min',
    recipeInstructions: [
      'Preheat oven to 400°F.',
      'Slice potatoes thinly.',
      'Mix with oil, salt, pepper, seasoning, and sauce.',
      'Bake 30 minutes or until crispy.'
    ],
    rating: 4
  },
  {
    author: 'Shane Thompson',
    cookTime: '20 min',
    tags: ['Southwest', 'Entree'],
    description: 'Black beans and tomatoes served over rice with cheese and tortilla chips.',
    image: './images/black-beans-and-rice.jpg',
    recipeIngredient: [
      '1 onion, diced',
      '2 cloves garlic',
      '1 Tbsp olive oil',
      '1 can black beans',
      '1 can diced tomatoes',
      'Cayenne pepper',
      '2 C brown rice',
      'Cheese',
      'Tortilla chips'
    ],
    name: 'Black Beans and Rice',
    prepTime: '10 min',
    recipeInstructions: [
      'Cook rice until done.',
      'Sauté onion and garlic in oil.',
      'Add beans, tomatoes, and spices.',
      'Serve over rice with cheese and chips.'
    ],
    rating: 3
  },
  {
    author: 'Shane Thompson',
    cookTime: '30 min',
    tags: ['Chicken', 'Indian', 'Entree'],
    description: 'Quick and easy chicken curry made with rich, creamy ingredients.',
    image: './images/chicken-curry.webp',
    recipeIngredient: [
      '4 slices bacon',
      '1 clove garlic',
      '2 Tbsp flour',
      '1 C water',
      '1 C milk',
      '3 Tbsp tomato paste',
      '1/2 C applesauce',
      '3-4 tsp curry powder',
      '2 tsp chicken bouillon',
      '3/4 C sour cream',
      '2 C chicken',
      '2 C rice'
    ],
    name: 'Chicken Curry',
    prepTime: '10 min',
    recipeInstructions: [
      'Cook rice and bacon; cube chicken.',
      'Make sauce with flour, milk, tomato paste, curry, and spices.',
      'Combine all ingredients; serve over rice.'
    ],
    rating: 5
  },
  {
    author: 'Shane Thompson',
    cookTime: '11 min',
    tags: ['Dessert'],
    description: 'Delicious soft chocolate chip cookies with coconut.',
    image: './images/chocolate-chip-cookies.jpg',
    recipeIngredient: [
      '1 lb butter',
      '1 C white sugar',
      '3 eggs',
      '1.5 C brown sugar',
      '1 tsp baking soda',
      '1 tsp vanilla',
      '1/4 tsp salt',
      '5 C flour',
      '2 C chocolate chips',
      '1 C coconut'
    ],
    name: 'Chocolate Chip Cookies',
    prepTime: '15 min',
    recipeInstructions: [
      'Preheat oven to 350°F.',
      'Cream butter, sugars, and eggs.',
      'Add flour, soda, salt, vanilla, chocolate chips, and coconut.',
      'Bake for 11–12 minutes.'
    ],
    rating: 5
  },
  {
    author: 'Ester Kocht',
    cookTime: '45 min',
    tags: ['Dessert', 'German'],
    description:
      'A tart, creamy, and crumbly German gooseberry cake filled with vanilla cream and streusel crumble.',
    image: './images/german-gooseberry-cake.jpg',
    name: 'Gooseberry Cake with Vanilla Cream and Crumble',
    prepTime: '30 min',
    recipeInstructions: [
      'Prepare base, cream, and crumble separately.',
      'Layer gooseberries, vanilla cream, and crumble in pan.',
      'Bake at 356°F for 45 minutes.'
    ],
    rating: 5
  },
  {
    author: 'AllRecipes',
    cookTime: '45 min',
    tags: ['Dessert'],
    description:
      'A simple, classic apple crisp that’s warm, sweet, and perfect with vanilla ice cream.',
    image: './images/apple-crisp.jpg',
    recipeIngredient: [
      '10 C apples',
      '1 C sugar',
      '1 Tbsp flour',
      '1 tsp cinnamon',
      '3 Tbsp water',
      '1 C oats',
      '1 C flour',
      '1 C brown sugar',
      '1/4 tsp baking powder',
      '1/4 tsp baking soda',
      '1/2 C butter'
    ],
    name: 'Apple Crisp',
    prepTime: '30 min',
    recipeInstructions: [
      'Preheat oven to 350°F.',
      'Place apples in dish; sprinkle with sugar, flour, and cinnamon.',
      'Mix topping and spread over apples.',
      'Bake for 45 minutes.'
    ],
    rating: 4
  }
];


function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  return list[random(list.length)];
}


function tagsTemplate(tags) {
  return tags.map(tag => `<li>${tag}</li>`).join('');
}

function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    html += i <= Math.round(rating)
      ? `<span aria-hidden="true" class="icon-star">⭐</span>`
      : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
  }
  html += `</span>`;
  return html;
}

function recipeTemplate(recipe) {
  return `
  <figure class="recipe">
    <img src="${recipe.image}" alt="Image of ${recipe.name}" />
    <figcaption>
      <ul class="recipe__tags">${tagsTemplate(recipe.tags)}</ul>
      <h2><a href="${recipe.url || '#'}">${recipe.name}</a></h2>
      <p class="recipe__ratings">${ratingTemplate(recipe.rating)}</p>
      <p class="recipe__description">${recipe.description}</p>
    </figcaption>
  </figure>`;
}


function renderRecipes(recipeList) {
  const container = document.getElementById('recipes-container');
  container.innerHTML = recipeList.map(recipeTemplate).join('');
}


function init() {
  const randomRecipe = getRandomListEntry(recipes);
  renderRecipes([randomRecipe]);
}
init();


function filterRecipes(query) {
  query = query.toLowerCase();
  const filtered = recipes.filter(recipe => {
    const inName = recipe.name.toLowerCase().includes(query);
    const inDesc = recipe.description.toLowerCase().includes(query);
    const inTags = recipe.tags.find(t => t.toLowerCase().includes(query));
    const inIngredients = recipe.recipeIngredient?.find(i =>
      i.toLowerCase().includes(query)
    );
    return inName || inDesc || inTags || inIngredients;
  });
  return filtered.sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(e) {
  e.preventDefault();
  const query = document.getElementById('search-input').value.trim().toLowerCase();

  if (!query) {
    init();
    return;
  }

  const results = filterRecipes(query);
  if (results.length > 0) {
    renderRecipes(results);
  } else {
    document.getElementById('recipes-container').innerHTML = `<p>No recipes found.</p>`;
  }
}

document.getElementById('search-form').addEventListener('submit', searchHandler);
