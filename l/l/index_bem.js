let objeto, _salida, _buscar;  

let pokemons    = document.querySelector("#pokemons");
let _detalles   = document.querySelector("#detalles");
let buscar      = document.querySelector("#buscar");
let busqueda    = document.querySelector("#busqueda");
let res         = document.querySelector("#res");

const NUEVE     = 9;
const MAS       = 1;
let nueveMas    = NUEVE;

class Pokemon { 
    constructor() {
        _detalles.style.display = "none";
    }
    static
    lanzar(detonador) {
        detonador.style.display === "block" ? detonador.style.display = "none" : detonador.style.display = "block";        
    }
    static
    colocar(limite) {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limite}&offset=0`).then(function(response) {
            if(response.ok) { return response.json(); } 
            else { throw 'Error de URL o respuesta.'; }
        }).then(function(json) {
            objeto  = json;
            _salida = "";

            for(let i in objeto.results) {
                let id = objeto.results[i].url.split("/");
                Pokemon.obtener(id[6], objeto.results[i]);
            }

            Pokemon.salida();
        }).catch(function (error) {
            console.log('Error de captura: ' + error.message);
        });
    }
    static 
    async obtener(id, objeto) {
        _salida += `
            <div class='pokemon'>
                <div>
                    <img id='foto${id}' />
                    <h2>${objeto.name}</h2>
                    <button onclick='Pokemon.detalles(${id})'>
                        <!--img src="i_iconos/info.png" alt="Submit"--> Detalles
                    </button>
                </div>
                <div>
                    <h3>Sub tipos</h3>
                    <ol id='subtipo${id}'>

                    </ol>
                    <p>#${id}</p>
                </div>
            </div>
        `;

        await Pokemon.subTipos(id);
    }
    static
    salida() {
        if(_salida !== '')  { pokemons.innerHTML = _salida; } 
        else                { pokemons.innerHTML = `<strong>No ha resultados...</strong>`; }
    } 
    static 
    subTipos(id) {
        fetch("https://pokeapi.co/api/v2/pokemon/" + id).then(function(response) {
            if(response.ok) { return response.json(); } 
            else { throw 'Error de URL o respuesta.'; }
        }).then(function(json) {             
            let li = "";
            
            for(let i in json.types) {
                li += "<li>" + json.types[i].type.name + "</li>";
            }

            document.querySelector('#foto' + id).src = "i_iconos/pokeball.png";
            document.querySelector('#subtipo' + id).innerHTML = li; 
            
            setTimeout(function () {
                document.querySelector('#foto' + id).src = json.sprites.front_default;
            }, 500);
        }).catch(function (error) {
            console.log('Error de captura: ' + error.message);
        });
    }
    static 
    detalles(id) {
        Pokemon.lanzar(_detalles);
        
        fetch("https://pokeapi.co/api/v2/pokemon/" + id).then(function(response) {
            if(response.ok) { return response.json(); } 
            else { throw 'Error de URL o respuesta.'; }
        }).then(function(json) {
            let pokemon = "";
            
            pokemon = `
                <section>
                    <section>
                        <img src="${json.sprites.front_default}" />
                    </section>
                    <h4>Nombre</h4>
                    <p>${json.name}</p>
                    <h4>Tipos</h4>
                    <ol id="tipo${id}">

                    </ol>
                    <h4>Peso</h4>
                    <p>${json.weight}</p>
                    <h4>Habilidades</h4>
                    <ol id="habilidad${id}">

                    </ol>
                    <h4>Experiencia base</h4>
                    <p>${json.base_experience }</p>

                    <button onclick="Pokemon.lanzar(_detalles);">Cerrar</button>
                </section>
            `;

            
            _detalles.innerHTML = pokemon;
            Pokemon.detallar(id, json.types, json.abilities);
        }).catch(function (error) {
            console.log('Error de captura: ' + error.message);
        }); 
    }
    static
    detallar(id, tipos, habilidades) {
        let l = "", ll = "";

        for(let i in tipos) {
            l += "<li>" + tipos[i].type.name + "</li>";
        }
        for(let i in habilidades) {
            ll += "<li>" + habilidades[i].ability.name + "</li>";     
        }

        document.querySelector('#tipo' + id).innerHTML = l;
        document.querySelector('#habilidad' + id).innerHTML = ll; 
    }
    static 
    colocarBusqueda() {
        if(buscar.value === "") {
            _buscar = "s/vacio.json";
        } else {
            _buscar = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126";
        }

        fetch(_buscar).then(function(response) {
            if(response.ok) { return response.json(); } 
            else { throw 'Error de URL o respuesta.'; }
        }).then(function(json) { 
            objeto = json;
            
            if(objeto.res === 0) {
                Pokemon.colocar(9);
            } else {
                _salida     = "";
                let valor   = buscar.value;

                for(let i in objeto.results) { 
                    if(
                        objeto.results[i].name.substr(0, valor.length).toUpperCase() === valor.toUpperCase() ||
                        objeto.results[i].name.substr(1, valor.length).toUpperCase() === valor.toUpperCase() ||
                        objeto.results[i].name.substr(2, valor.length).toUpperCase() === valor.toUpperCase() ||
                        objeto.results[i].name.substr(3, valor.length).toUpperCase() === valor.toUpperCase() ||
                        objeto.results[i].name.substr(4, valor.length).toUpperCase() === valor.toUpperCase() ||
                        objeto.results[i].name.substr(5, valor.length).toUpperCase() === valor.toUpperCase() ||
                        objeto.results[i].name.substr(6, valor.length).toUpperCase() === valor.toUpperCase() ||
                        objeto.results[i].name.substr(7, valor.length).toUpperCase() === valor.toUpperCase() ||
                        objeto.results[i].name.substr(8, valor.length).toUpperCase() === valor.toUpperCase() ||
                        objeto.results[i].name.substr(9, valor.length).toUpperCase() === valor.toUpperCase()
                    ) { 
                        let id = objeto.results[i].url.split("/");
                        Pokemon.obtener(id[6], objeto.results[i]);
                    }
                }
            
                Pokemon.salida();
            }
        }).catch(function (error) {
            console.log('Error de captura: ' + error.message);
        });
    }
    static
    desplazarse() {
        let des     = Number(document.body.clientHeight - 630);
        let footer  = document.querySelector("footer");

        if(document.body.scrollTop > des || document.documentElement.scrollTop > des) {
            nueveMas = nueveMas + MAS;
            Pokemon.colocar(nueveMas);
        } 
        
        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            footer.style.display = "block";
            pokemons.style.flexDirection = "column";
        } else {
            footer.style.display = "none";
            pokemons.style.flexDirection = "unset";
        }
    }
}

/* Disparadores
--------------------------------------------------------------------------------*/
new Pokemon();

window.onload = function() {
    Pokemon.colocar(9);
};

/* Disparadores: complementos: Busqueda...
--------------------------------------------------------------------------------*/
buscar.oninput = function() {
    Pokemon.colocarBusqueda();
};
busqueda.onsubmit = function(evento) {
    evento.preventDefault();
    Pokemon.colocarBusqueda();
};

/* Disparadores: desplazarse
--------------------------------------------------------------------------------*/
window.onscroll = function () { 
    Pokemon.desplazarse();
};



