import { Planet } from './../src/planet';

describe('Planet', function(){
  it('should display your age on Mercury', function()
  {
    let testPerson = new Planet(50,0,0,0,false);
    testPerson.mercury();
    expect(12).toEqual(testPerson.planetAge);
  });
  it('should display your age on Mercury', function()
  {
    let testPerson = new Planet(50,0,0,0,false);
    testPerson.venus();
    expect(31).toEqual(testPerson.planetAge);
  });
  it('should display your age on Mercury', function()
  {
    let testPerson = new Planet(50,0,0,0,false);
    testPerson.mars();
    expect(94).toEqual(testPerson.planetAge);
  });
  it('should display your age on Mercury', function()
  {
    let testPerson = new Planet(50,0,0,0,false);
    testPerson.jupiter();
    expect(593).toEqual(testPerson.planetAge);
  });
  it('should correctly identify you as old', function()
  {
    let testPerson = new Planet(85,0,0,0,false);
    testPerson.mercury();
    expect(true).toEqual(testPerson.oldCheck);
  });
});
