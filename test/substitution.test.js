// Write your tests here!

const { expect } = require("chai");
const { substitution } = require("../src/substitution.js");

describe('substitution() error handling', () => {
  it('should encode a message with a valid substitution alphabet', () => {
    const input = 'Welcome to Naos Universe';
    const alphabet = 'xoyqmcgrukswaflnthdjpzibev';
    const expectedOutput = 'imwylam jl fxld pfuzmhdm'
    expect(substitution(input, alphabet)).to.equal(expectedOutput);
  });

  it('should decode a message with a valid substitution alphabet', () => {
    const input = 'imwylam jl fxld pfuzmhdm';
    const alphabet = 'xoyqmcgrukswaflnthdjpzibev';
    const expectedOutput = 'welcome to naos universe';
    expect(substitution(input, alphabet, false)).to.equal(expectedOutput);
  });

  it('should handle spaces correctly', () => {
    const input = 'Welcome to Naos Universe';
    const alphabet = 'xoyqmcgrukswaflnthdjpzibev';
    const expectedOutput =  'imwylam jl fxld pfuzmhdm';
    expect(substitution(input, alphabet)).to.equal(expectedOutput);
  });

  it('should handle uppercase letters', () => {
    const input = 'WELCOME TO NAOS UNIVERSE';
    const alphabet = 'XOYQMCGRUKSWAFLNTHDJPZIBEV';
    const expectedOutput = 'IMWYLAM JL FXLD PFUZMHDM';
    expect(substitution(input, alphabet)).to.equal(expectedOutput);
  });

  it('should return false if the substitution alphabet is missing', () => {
    const input = 'thinkful';
    const alphabet = '';
    expect(substitution(input, alphabet)).to.be.false;
  });

  it('should return false if the substitution alphabet has fewer than 26 characters', () => {
    const input = 'thinkful';
    const alphabet = 'abcde';
    expect(substitution(input, alphabet)).to.be.false;
  });

  it('should return false if the substitution alphabet has more than 26 characters', () => {
    const input = 'thinkful';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz123456';
    expect(substitution(input, alphabet)).to.be.false;
  });

  it('should return false if the substitution alphabet contains duplicate characters', () => {
    const input = 'thinkful';
    const alphabet = 'abaaaab';
    expect(substitution(input, alphabet)).to.be.false;
  });
});

