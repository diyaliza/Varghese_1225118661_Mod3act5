export const generateRandomNumber = function(minimu, maximum){
    return Math.floor(Math.random() * (maximum-minimu)) +minimu;
}

console.log(`from utility- ${generateRandomNumber(10,100)}`);
