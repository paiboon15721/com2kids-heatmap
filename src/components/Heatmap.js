import React from 'react'
import CalendarHeatmap from 'react-calendar-heatmap'
import moment from 'moment'
import ReactTooltip from 'react-tooltip'

class Heatmap extends React.PureComponent {
  render() {
    const { usage, name } = this.props.school
    return (
      <div
        style={{
          backgroundColor: '#fff',
          padding: '1rem',
          marginTop: '1rem',
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
          borderRadius: 5,
        }}
      >
        <p style={{ fontSize: '2vw' }}>{name}</p>
        <CalendarHeatmap
          startDate={usage[0] ? new Date(usage[0].date) : Date.now()}
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
