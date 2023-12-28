import React from 'react'
import { useSelector } from 'react-redux'

export default function CounterResult() {


    const counterobj = useSelector((store) => store.counter)

    const counter = counterobj.counterValue;
    return (
        <div>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Counter value :{counter}</p>

            </div>
        </div>
    )
}
