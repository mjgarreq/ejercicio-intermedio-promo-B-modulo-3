

function AddCountry({changeNewCountry, addNewCountry}) {

    const handleInput = (ev) => {
        changeNewCountry(ev.target.id, ev.target.value)
    }

    const handleClick = (ev) => {
        ev.preventDefault();
        addNewCountry();
    }

  return (
    <form action="">
        <div>
            <label htmlFor="">Nombre</label>
            <input type="text" name="" id="name" onChange={handleInput}/>
        </div>
        <div>
            <label htmlFor="">Capital</label>
            <input type="text" name="" id="capital" onChange={handleInput}/>
        </div>
        <div>
            <label htmlFor="">Bandera</label>
            <input type="text" name="" id="flag" onChange={handleInput}/>
        </div>
        <div>
            <label htmlFor="">Continent</label>
            <input type="text" name="" id="continent" onChange={handleInput}/>
        </div>
        <div>
            <button onClick={handleClick}>Añadir</button>
        </div>
    </form>
  )
}

export default AddCountry