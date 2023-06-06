// Write your tests here!
const {expect} = require("chai");
const  {caesar} = require("../src/caesar.js");

describe("caesar()error handling", () => {
  it("should return false if the shift amount is 0",() => {
    const message = "Welcome to Nao's Universe!"
    const shift = 0
    const actual = caesar(message,shift)
    expect(actual).to.be.false
  }) 
  it("should return false if the shift amount is above 25",()=>{
    const message = "Welcome to Naos Universe!"
    const shift = 26
    const actual = caesar(message,shift)
    expect(actual).to.be.false
  } )
  it("should return false if the shift amount is less than -25",()=>{
    const message = "Welcome to Naos Universe!"
    const shift = -26
    const actual = caesar(message,shift)
    expect(actual).to.be.false
  })
  
});
describe("caesar()encoding message",()=>{
  it("should encode a message by shifting the letters",()=>{
    const message = "Welcome to Naos Universe!"
    const shift= 3
    const actual = caesar(message,shift)
    expect(actual).to.equal("zhofrph wr qdrv xqlyhuvh!")
    })
  it("should leave spaces and other symbols as is",()=>{
    const message = "Welcome to Naos Universe!"
    const shift= 3
    const actual = caesar(message,shift)
    expect(actual).to.equal("zhofrph wr qdrv xqlyhuvh!")
    })
  it("should ignore capital letters",()=>{
   const message = "Welcome to Naos Universe!"
    const shift= 3
    const actual = caesar(message,shift)
    expect(actual).to.equal("zhofrph wr qdrv xqlyhuvh!")
    })
  it("should appropriatley handle letters at the end of the alphabet",()=>{
    const message = "Welcome to Naos Universe!"
    const shift= 3
    const actual = caesar(message,shift)
    expect(actual).to.equal("zhofrph wr qdrv xqlyhuvh!")
    })
   it("should allow for a negative shift that will shift to the left",()=>{
    const message = "Welcome to Naos Universe!"
    const shift= -3
    const actual = caesar(message,shift)
    expect(actual).to.equal("tbizljb ql kxlp rkfsbopb!")
    })
  });