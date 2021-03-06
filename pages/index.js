import { useState } from "react";

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Contador/>
        </div>
    )
}

function Contador()
{
    const [contador, setContador] = useState(2);

    function AddContador()
    {
        setContador(contador**2);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={AddContador}>Adiciona</button>
        </div>
    )
}

export default Home
