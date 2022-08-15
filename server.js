function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  const favFood = process.env.FAV_FOOD

  async function main() {
    while(true) {
      console.log('Containers rule!');
      console.log(`My favourite food is ${favFood}`);
      await sleep(5000);
    }
  }
  
  main();