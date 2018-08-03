export class Planet
{
  constructor(earthAge, planetAge, planetExpect, yearsLeft, oldCheck)
  {
  this.earthAge = earthAge;
  this.planetAge = planetAge;
  this.planetExpect = planetExpect;
  this.yearsLeft = yearsLeft;
  this.oldCheck = false;

  }
  mercury()
  {
    let age = (this.earthAge / .24).toFixed(2);
    this.planetAge = parseFloat(age);
    this.planetExpect = 81 / .24;
    if(this.planetAge > this.planetExpect)
    {
      let left = (this.planetAge - this.planetExpect).toFixed(2);
      this.yearsLeft = parseFloat(left);
      this.oldCheck = true;
    }else{
      let left = (this.planetExpect - this.planetAge).toFixed(2);
      this.yearsLeft = parseFloat(left);
    }
  }
  venus()
  {
    let age = (this.earthAge / .62).toFixed(2);
    this.planetAge = parseFloat(age);
    this.planetExpect = 81 / .62;
    if(this.planetAge > this.planetExpect)
    {
      let left = (this.planetAge - this.planetExpect).toFixed(2);
      this.yearsLeft = parseFloat(left);
      this.oldCheck = true;
    }else{
      let left = (this.planetExpect - this.planetAge).toFixed(2);
      this.yearsLeft = parseFloat(left);
    }
  }
  mars()
  {
    let age = (this.earthAge / 1.88).toFixed(2);
    this.planetAge = parseFloat(age);
    this.planetExpect = 81 / 1.88;
    if(this.planetAge > this.planetExpect)
    {
      let left = (this.planetAge - this.planetExpect).toFixed(2);
      this.yearsLeft = parseFloat(left);
      this.oldCheck = true;
    }else{
      let left = (this.planetExpect - this.planetAge).toFixed(2);
      this.yearsLeft = parseFloat(left);
    }
  }
  jupiter()
  {
    let age = (this.earthAge / 11.86).toFixed(2);
    this.planetAge = parseFloat(age);
    this.planetExpect = 81 / 11.86;
    if(this.planetAge > this.planetExpect)
    {
      let left = (this.planetAge - this.planetExpect).toFixed(2);
      this.yearsLeft = parseFloat(left);
      this.oldCheck = true;
    }else{
      let left = (this.planetExpect - this.planetAge).toFixed(2);
      this.yearsLeft = parseFloat(left);
    }
}
  seconds()
  {
    this.earthAge = this.earthAge * 31536000;
    }
    
}
