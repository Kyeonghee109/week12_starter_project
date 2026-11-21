import { useState, useEffect } from 'react';

export default function Timer(){
    const [ count, setCount ] = setState(0);

    console.log("Component rendered");

    useEffect(() => {
        const id = setInteral(() => {
            setCount(prev => prev + 1);
        },1000);

        return () => clearInterval(id);
    }, []);
    return <h2>Count: {count} </h2>
}