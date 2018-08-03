export class Planet
{
  constructor(earthAge, planetAge, planetExpect, oldCheck)
  {
  this.earthAge = earthAge;
  this.planetAge = planetAge;
  this.planetExpect = planetExpect;
  this.oldCheck = false;
  }
  mercury()
  {
    this.planetAge = this.earthAge * .24;
    this.planetExpect = 19.44;
    if(this.planetAge > 19.44)
    {
      this.oldCheck = true;
    }
  }
}
