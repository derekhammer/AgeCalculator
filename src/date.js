export class Calendar
{
  constructor (year, month, day, targetYear, targetMonth, targetDay, time)
  {
    this.year = year;
    this.month = month;
    this.day = day;
    this.targetYear = targetYear;
    this.targetMonth = targetMonth;
    this.targetDay = targetDay;
    this.time = time;
  }

  birthday()
  {
    let date1 = (this.year * 31536000) + (this.month * 2,629,746) + (this.day * 86400);
    let date2 = (this.targetYear * 31536000) + (this.targetMonth * 2,629,746) + (this.targetDay * 86400);
    this.time = date2 - date1;

  }
}
