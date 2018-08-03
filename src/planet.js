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
    this.planetAge = this.earthAge * .24;
    this.planetExpect = 19.44;
    if(this.planetAge > this.planetExpect)
    {
      this.yearsLeft = this.planetAge - this.planetExpect;
      this.oldCheck = true;
    }else{
      this.yearsLeft = this.planetExpect - this.planetAge;
    }
  }
  venus()
  {
    this.planetAge = this.earthAge * .62;
    this.planetExpect = 50.22;
    if(this.planetAge > this.planetExpect)
    {
      this.yearsLeft = this.planetAge - this.planetExpect;
      this.oldCheck = true;
    }else{
      this.yearsLeft = this.planetExpect - this.planetAge;
    }
  }
  mars()
  {
    this.planetAge = this.earthAge * 1.88;
    this.planetExpect = 19.44;
    if(this.planetAge > this.planetExpect)
    {
      this.yearsLeft = this.planetAge - this.planetExpect;
      this.oldCheck = true;
    }else{
      this.yearsLeft = this.planetExpect - this.planetAge;
    }
  }
  jupiter()
  {
    this.planetAge = this.earthAge * 11.86;
    this.planetExpect = 19.44;
    if(this.planetAge > this.planetExpect)
    {
      this.yearsLeft = this.planetAge - this.planetExpect;
      this.oldCheck = true;
    }else{
      this.yearsLeft = this.planetExpect - this.planetAge;
    }
  }
}
