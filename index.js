function BoardMember(name, homeState, training){
  this.name = name
  this.homeState = homeState
  this.training = training

  this.veto = function(){"NO, I must disagree"}
  this.approve = function(){"You can do that!"}
  this.doCharity = function(){"I like to help people"}
  this.releasePressStatement =function(){"You will see great things from Scuber."}
  this.sayHi =function(){`HI, myname is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}`}
}