import { navLinks } from "../constants"

function Navbar() {
  return (
    <header>
        <nav>
            <img src="/logo.svg" alt="Apple logo"></img>
            <ul>
                {navLinks.map(({ label }) => (<li key={label}><a href={label}>{label}</a></li>))}
            </ul>
            <div className="flex-center gap-3">
                <button>
                    <img src="/search.svg" alt="Search"></img>
                </button>
                <button>
                    <img src="/cart.svg" alt="Cart"></img>
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar