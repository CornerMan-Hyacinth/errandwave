// /* this useEffect hook is triggered whenever any change
//   is made to either items the order object */
// useEffect(() => {
//   let price = order.price;
//   let mealExists = false;

//   if (price === "") {
//     mealDataIndex = data.findIndex((obj) => Object.values(obj).includes);
//     mealDataIndex !== -1 && (price = data[mealDataIndex].price);
//   }

//   mealOrder.forEach((innerArray, outerIndex) => {
//     order.meal === innerArray[0] && (mealExists = true);
//   });

//   if (!mealExists) {
//     addOrder([order.meal, price]);
//   }
// }, [order.meal || order.price]);
