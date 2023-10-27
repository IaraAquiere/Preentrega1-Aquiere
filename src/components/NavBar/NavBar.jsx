import CartWidget from "../CartWidget/CartWidget"


function NavBar() {
  return (
    <nav>
        <div className="p-3 text-center">
            <h1>Jugueteria la feliz</h1>
        </div>
        <div className="d-flex flex-row justify-content-evenly align-items-center p-3">
            <div>
                <button type="button" class="btn">Inicio</button>
                <button type="button" class="btn">Quienes somos</button>
                <button type="button" class="btn">Productos</button>
                <button type="button" class="btn">Contacto</button>
            </div>
            <div>
                <CartWidget />
                <p>5</p>
            </div>
        </div>    
    </nav>
  )
}

export default NavBar