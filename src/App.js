import React from 'react'
import firebase from 'firebase/app'
import 'firebase/database'
import filter from 'lodash/fp/filter'
import map from 'lodash/map'
import fpMap from 'lodash/fp/map'
import pipe from 'lodash/fp/pipe'
import groupBy from 'lodash/fp/groupBy'
import sortBy from 'lodash/sortBy'
import moment from 'moment'
import HeatmapList from './components/HeatmapList'
import Header from './components/Header'
import Loading from './components/Loading'
import 'react-calendar-heatmap/dist/styles.css'

const db = firebase
  .initializeApp({
    apiKey: 'AIzaSyCsxH-qYnqMbiXlkjB1SLJBZreW9sUAgUw',
    authDomain: 'com2kids-5be26.firebaseapp.com',
    databaseURL: 'https://com2kids-5be26.firebaseio.com',
    projectId: 'com2kids-5be26',
    storageBucket: 'com2kids-5be26.appspot.com',
    messagingSenderId: '56322755216',
  })
  .database()

class App extends React.PureComponent {
  state = {
    schools: null,
  }
  componentDidMount() {
    db.ref('/').once('value', s => {
      let schools = s.val()
      delete schools.anonymous
      schools = map(schools, (v, k) => ({
        name: k,
        usage: pipe(
          filter(v => v.STOPDT !== undefined),
          fpMap(v => ({
            date: moment(
              `${v.STOPDT.slice(4, 10)} ${v.STOPDT.slice(-4)}`,
              'MMM DD YYYY',
            ).format('YYYY-MM-DD'),
          })),
          groupBy('date'),
          fpMap.convert({ cap: false })((v, k) => ({
            date: k,
            count: v.length,
          })),
        )(v.usage),
      }))
      this.setState({
        schools: sortBy(schools, v => v.usage.length).reverse(),
      })
    })
  }

  render() {
    const { schools } = this.state
    return (
      <div className="App">
        <Header />
        {schools ? <HeatmapList schools={schools} /> : <Loading />}
      </div>
    )
  }
}

export default App
