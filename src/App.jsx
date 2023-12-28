
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Button from './components/Button'
import CounterResult from './components/CounterResult'


function App() {

  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="col-lg-6 mx-auto">Counter</h1>
        <CounterResult />
        <Button />

      </div>
    </>
  )
}

export default App
