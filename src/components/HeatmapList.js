import React from 'react'
import map from 'lodash/map'
import Heatmap from './Heatmap'

class HeatmapList extends React.PureComponent {
  render() {
    const { schools } = this.props
    return (
      <div>
        {map(schools, v => (
          <Heatmap key={v.name} school={v} />
        ))}
      </div>
    )
  }
}

export default HeatmapList
