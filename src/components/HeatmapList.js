import React from 'react'
import map from 'lodash/map'
import Heatmap from './Heatmap'

class HeatmapList extends React.PureComponent {
  render() {
    const { schools } = this.props
    return (
      <div style={{ marginLeft: 10, marginRight: 10 }}>
        {map(schools, v => (
          <Heatmap key={v.name} school={v} />
        ))}
      </div>
    )
  }
}

export default HeatmapList
