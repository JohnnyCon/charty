
class Data {
  _threshold    = 50
  _successColor = 'green'
  _failColor    = 'red'

  _days = {
    0: { index: 0, label: 'M',  key: 'monday',    dayOfWeek: 1},
    1: { index: 1, label: 'T',  key: 'tuesday',   dayOfWeek: 2},
    2: { index: 2, label: 'W',  key: 'wednesday', dayOfWeek: 3},
    3: { index: 3, label: 'TH', key: 'thursday',  dayOfWeek: 4},
    4: { index: 4, label: 'F',  key: 'friday',    dayOfWeek: 5},
    5: { index: 5, label: 'S',  key: 'saturday',  dayOfWeek: 6},
    6: { index: 6, label: 'SU', key: 'sunday',    dayOfWeek: 7}
  }

  week = []

  constructor(){
  }

  addDay({ progress = 0 }) {
    const index = this.week.length;

    if (index > 6) return this.week;

    const day = this._days[index]
    let color = (progress >= this._threshold) ? this._successColor : this._failColor
    let answer = (progress >= this._threshold)
    console.log('this._successColor', this._successColor)
    console.log('this._failColor', this._failColor)
    console.log('color', color)
    console.log('answer', answer)
    console.log('progress', progress)
    console.log('this._threshold', this._threshold)

    // this.week.push({ day: day.day, key: day.key, progress: progress, color: color, dayOfWeek: day.dayOfWeek })
    this.week.push({ ...day, color: color, progress: progress })

    // console.log(this.week);

    return this.week
  }

  resetWeek(){
    this.week = []
    return this.week
  }
}


export default Data;
