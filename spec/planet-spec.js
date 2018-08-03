import { Planet } from './../src/planet';

describe('Planet', function(){
  it('should display your age on Mercury', function()
  {
    let testPerson = new Planet(50,0,0,0,false);
    testPerson.mercury();
    expect(208.33).toEqual(testPerson.planetAge);
  });
  it('should display your age on Venus', function()
  {
    let testPerson = new Planet(50,0,0,0,false);
    testPerson.venus();
    expect(80.65).toEqual(testPerson.planetAge);
  });
  it('should display your age on Mars', function()
  {
    let testPerson = new Planet(50,0,0,0,false);
    testPerson.mars();
    expect(26.6).toEqual(testPerson.planetAge);
  });
  it('should display your age on Jupiter', function()
  {
    let testPerson = new Planet(50,0,0,0,false);
    testPerson.jupiter();
    expect(4.22).toEqual(testPerson.planetAge);
  });
  it('should correctly identify you as old', function()
  {
    let testPerson = new Planet(85,0,0,0,false);
    testPerson.mercury();
    expect(true).toEqual(testPerson.oldCheck);
  });
  it('should correctly identify how much time you have left', function()
  {
    let testPerson = new Planet(29,0,0,0,false);
    testPerson.mercury();
    expect(216.67).toEqual(testPerson.yearsLeft);
    //I do not like this but i cannot get .toFixed(2) to work OR ceil() to work!
    expect(false).toEqual(testPerson.oldCheck);
  });
  it('should correctly identify how far past expiration date you are', function()
  {
    let testPerson = new Planet(95,0,0,0,false);
    testPerson.mars();
    expect(7.44).toEqual(testPerson.yearsLeft);
    expect(true).toEqual(testPerson.oldCheck);
  });
});
