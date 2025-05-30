//inheritance
class person {
    constructor(name,age){
        this.name =name;
        this.age = age;

    }
    greet(){
        console.log(`hello ${this.name}`)
    }
}
let user = new person("John" ,8)
user.greet();
console.log(user);

//static
class Game{
    static score =0;

    constructor(){
        this.isPlaying = false;
    }
    start(){
        this.isPlaying = true;
        console.log(`The game has started`);
    }
    end(){
        this.isPlaying = false;
        console.log(`The game has ended`);
        Game.updateScore()
    }
    static updateScore(){
        Game.score++;
        console.log(`Score: ${Game.score}`)
    }
}

//private fields
class BankAccount{
  #balance = 0;

  deposit(amount){
    this.balance += amount;
    console.log(`Deposited ${amount}, new balance is ${this.balance}`)
  }
  withdraw(amount){
    if(amount > this.balance){
        console.log(`insuficient funds`)
    }
    else{
        this.balance -= amount;
        console.log(`this.withdraw ${amount},
            new balance is ${this.balance}`)
    }
  }
}
const account = new BankAccount();
console.log(account.balance);
//try and catch
function d(a,b){
    try{
        if(b==0){
            throw new Error("Cant divided by 0")

        }
        else{
            console.log(a/b);

        }
        
    }catch(err){
        console.log(err.message)
    }
}
d(10,0)

// Fetch API example
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.json();
  })
  .then(data => {
    data.forEach(post => {
      console.log(post.title);
    });
  })
  .catch(error => console.error('Fetch error:', error));
