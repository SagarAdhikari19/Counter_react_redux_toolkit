
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 classNameName="display-5 fw-bold text-body-emphasis">Counter</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Counter value :</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
