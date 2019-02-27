import React from 'react'
import CalendarHeatmap from 'react-calendar-heatmap'
import moment from 'moment'
import ReactTooltip from 'react-tooltip'

class Heatmap extends React.PureComponent {
  render() {
    const { usage, name } = this.props.school
    return (
      <div>
        <h2>{name}</h2>
        <CalendarHeatmap
          startDate={new Date(usage[0].date)}
          endDate={Date.now()}
          values={usage}
          showWeekdayLabels
          classForValue={v => {
            if (!v) {
              return 'color-empty'
            }
            const n = Math.ceil(v.count / 5)
            return `color-gitlab-${n > 4 ? 4 : n}`
          }}
          tooltipDataAttrs={v => ({
            'data-tip': v.date
              ? `${moment(v.date).format('DD/MM/YYYY')} ใช้งาน ${v.count} ครั้ง`
              : '',
          })}
        />
        <ReactTooltip />
      </div>
    )
  }
}

export default Heatmap
