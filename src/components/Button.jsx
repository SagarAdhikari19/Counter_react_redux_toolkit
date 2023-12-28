import React, { useRef } from 'react'
import { counterActions } from '../Store/Index';
import { useDispatch } from 'react-redux';



function Button() {
    const inputElement = useRef();



    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(counterActions.increment());



    };
    const handleDecrement = () => {
        dispatch(counterActions.decrement());


    }

    const handleAdd = () => {


        dispatch(counterActions.add(inputElement.current.value));
    }
    const handleSubstract = () => {
        dispatch(counterActions.subtract(inputElement.current.value));

    }

    return (
        <div>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={handleIncrement}>+ 1</button>

                <button type="button" className="btn btn-success btn-lg px-4" onClick={handleDecrement}>- 1</button>

            </div>
            <div className="mt-3 d-flex align-items-center justify-content-center">
                <input
                    type="text"
                    className="form-control form-control-sm me-3 form-control-wid"
                    ref={inputElement}
                    // onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter value"
                />
                <button type="button" className="btn btn-primary me-2" onClick={handleAdd} >Add</button>
                <button type="button" className="btn btn-danger" onClick={handleSubstract} >Subtract</button>
            </div>
        </div>
    )
}

export default Button