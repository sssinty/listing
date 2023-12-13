import './App.css'
import Listing from './components/Listing'
import {data} from './data/etsy'

function App() {
  const list = JSON.parse(JSON.stringify(data))
  return (
    <>
      <Listing items={list} />
    </>
  )
}

export default App;
