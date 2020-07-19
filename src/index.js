const data = require("./data");

const getInsideTheBudget = (items, quantity, budget) => {
  let budgetChecker = 0;
  let newCart = [];
  items.sort((a, b) => a.price - b.price);

  for (let i = 0; i < quantity; i++) {
    budgetChecker += items[i].price;
    if (budgetChecker <= budget) newCart.push(items[i]);
  }
  return newCart;
};

const stayInBudget = (cart, budget) => {
  let amount = 0;
  cart.map(({ price }) => {
    amount += price;
    return amount;
  });

  let diff = amount - budget;
  let amount1 = 0;
  if (diff > 0) {
    let newCart = getInsideTheBudget(cart, cart.length, budget);
    newCart.map(({ price }) => {
      amount1 += price;
      return amount1;
    });
    let output = `You can purchase ${newCart.map(
      c => c.item
    )} to stay inside your budget, and you will save Rs. ${budget - amount1}\n`;
    console.log(output);
  } else {
    console.log(`You can make a purchase of Rs. ${Math.abs(diff)} more.\n`);
  }
};

for (let i = 0; i < data.length; i++) {
  stayInBudget(data[i].cart, data[i].budget);
}
