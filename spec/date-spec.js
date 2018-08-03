import { Calendar } from './../src/date';

describe('Calendar', function(){
  it('find the difference in dates by seconds', function()
  {
    let testCalendar = new Calendar(1989, 8, 22, 2018, 9, 3, 0);
    testCalendar.birthday();
    expect(912902400).toEqual(testCalendar.time);
  });
});
