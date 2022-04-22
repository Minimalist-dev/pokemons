let _salida, _obtener, _buscar, menos;  

let logo        = document.querySelector("#logo");
let pokemons    = document.querySelector("#pokemons");
let raza        = document.querySelector("#raza");
let subRazas    = document.querySelector("#sub-razas");
let _detalles   = document.querySelector("#detalles");
let buscar      = document.querySelector("#buscar");
let busqueda    = document.querySelector("#busqueda");
let res         = document.querySelector("#res");
let mas         = document.querySelector("#mas");

const NUEVE = 9;
const MAS = 1;
let nueveMas = NUEVE;

class Pokemon { 
    constructor() {
        _detalles.style.display = "none";
    }
    static
    lanzar(detonador) {
        detonador.style.display === "block" ? detonador.style.display = "none" : detonador.style.display = "block";        
    }
    static
    colocar(limite) { //console.log(limite);
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limite}&offset=0`).then(function(response) {
            if(response.ok) { return response.json(); } 
            else { throw 'Error de URL o respuesta.'; }
        }).then(function(json) {
            const objeto = json;
            Pokemon.obtener(objeto);
//            _salida = "";
//
//            for(let i in objeto.results) {
//                let id = objeto.results[i].url.split("/");
//
//                Pokemon.obtener(id, objeto.results[i]);
//            }
//            
//            Pokemon.salida();
        }).catch(function (error) {
            console.log('Error de captura: ' + error.message);
        });
    }
    static
    obtener(objeto) {
        _salida = "";

        for(let i in objeto.results) {
//            setTimeout(function () {
                let id = objeto.results[i].url.split("/");
            
                _salida += `
                    <div class='pokemon'>
                        <div>
                            <img id='foto${id[6]}' />
                            <h2>${objeto.results[i].name}</h2>
                            <button onclick='Pokemon.detalles(${id[6]})'>Detalles</h2>
                        </div>
                        <div>
                            <h3>Sub tipos</h3>
                            <ol id='subtipo${id[6]}'>

                            </ol>
                            <p>#${id[6]}</p>
                        </div>
                    </div>
                `;

                Pokemon.subTipos(id[6]);
//            }, 200);
        }
        
        Pokemon.salida();
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
            
            setTimeout(function () { 
                document.querySelector('#foto' + id).src = "i_iconos/pokeball.png";
                
                setTimeout(function () {
                    document.querySelector('#foto' + id).src = json.sprites.front_default;
                }, 200);
            }, 100);
            
            for(let i in json.types) {
                li += "<li>" + json.types[i].type.name + "</li>";
            }

            document.querySelector('#subtipo' + id).innerHTML = li;
            
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
//            console.log("Imagen");
//            console.log(json.sprites.front_default);
//            console.log();
//            console.log("Nombre");
//            console.log(json.name);
//            console.log();
//            console.log("Tipo o especies");
//            console.log(json.types);
//            console.log(json.species.name);
//            console.log();
//            console.log("Peso");
//            console.log(json.weight);
//            console.log();
//            console.log("Habilidades");
//            console.log(json.abilities);
//            console.log();
//            console.log("Experiencia base o Puntos base");
//            console.log(json.base_experience);
//            console.log(json.stats[0].base_stat);
//            console.log();
            
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

            Pokemon.detallar(id, json.types, json.abilities);
            _detalles.innerHTML = pokemon;
            
        }).catch(function (error) {
            console.log('Error de captura: ' + error.message);
        }); 
    }
    static
    detallar(id, tipos, habilidades) {
        setTimeout(function() {
            let li = "", lii = "";

            for(let i in tipos) {
                li += "<li>" + tipos[i].type.name + "</li>";
            }

            document.querySelector('#tipo' + id).innerHTML = li;
            
            setTimeout(function() {
                for(let i in habilidades) { //console.log(habilidades[i].ability.name);
                    lii += "<li>" + habilidades[i].ability.name + "</li>";     
                }
                
                document.querySelector('#habilidad' + id).innerHTML = lii;
            }, 100);
        }, 100);    
    }
    static
    cerrerDetalles() {
        Pokemon.lanzar(_detalles);
    }
    static
    colocarBusqueda() {
        if(buscar.value === "") {
            _buscar = "s/vacio.json";
        } else {
            _buscar = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126";
        }

        fetch(_buscar).then(function(response) { //console.log(response);
//            statusText: "OK"
            if(response.ok) { return response.json(); } 
            else { throw 'Error de URL o respuesta.'; }
        }).then(function(json) {  //console.log(json);
            if(json.res === 0) {
                res.innerHTML = "";
            } else {
                const objeto = json;
                _obtener = "";

                let valor = buscar.value;

                for(let i in objeto.results) { 
                    if(objeto.results[i].name.substr(0, valor.length).toUpperCase() === valor.toUpperCase()) { 
                        let id = objeto.results[i].url.split("/");
    //                    Pokemon.obtener(id, objeto.results[i]);
    //                    Pokemon.obtenerBusqueda(id, objeto.results[i]);
                        _obtener += `
                            <div class='pokemon'>
                                <div>
                                    <img id='foto_buscar${id[6]}' />
                                    <h2>${objeto.results[i].name}</h2>
                                    <button onclick='Pokemon.detalles(${id[6]})'>Detalles</h2>
                                </div>
                                <div>
                                    <h3>Sub tipos</h3>
                                    <ol id='subtipo${id[6]}'>

                                    </ol>
                                    <p>#${id[6]}</p>
                                </div>
                            </div>
                        `;

                        Pokemon.subTiposDeBusqueda(id[6]);

                    }
                }
            
                Pokemon.salidaDeBusqueda();
            }
//            Pokemon.salida();
        }).catch(function (error) {
            console.log('Error de captura: ' + error.message);
        });
    }
    static
    obtenerBusqueda(id, objeto) {
        _obtener += `
            <div class='pokemon'>
                <div>
                    <img id='foto_buscar${id[6]}' />
                    <h2>${objeto.name}</h2>
                    <button onclick='Pokemon.detalles(${id[6]})'>Detalles</h2>
                </div>
                <div>
                    <h3>Sub tipos</h3>
                    <ol id='subtipo${id[6]}'>

                    </ol>
                    <p>#${id[6]}</p>
                </div>
            </div>
        `;

        Pokemon.subTiposDeBusqueda(id[6]);
    }
    static
    salidaDeBusqueda() {
        if(_obtener !== "") { res.innerHTML = _obtener; } else { res.innerHTML = `<strong>No ha resultados...</strong>`; }
//        if(_obtener === "") { res.innerHTML = `<strong>No ha resultados...</strong>`; }
    }
    static
    subTiposDeBusqueda(id) {
        fetch("https://pokeapi.co/api/v2/pokemon/" + id).then(function(response) {
            if(response.ok) { return response.json(); } 
            else { throw 'Error de URL o respuesta.'; }
        }).then(function(json) {             
            let li = "";

            setTimeout(function () { 
                document.querySelector('#foto_buscar' + id).src = "i_iconos/pokeball.png";
                
                setTimeout(function () {
                    document.querySelector('#foto_buscar' + id).src = json.sprites.front_default;
                }, 200);
            }, 100);

            for(let i in json.types) {
                li += "<li>" + json.types[i].type.name + "</li>";
            }

            document.querySelector('#subtipo' + id).innerHTML = li;
        }).catch(function (error) {
            console.log('Error de captura: ' + error.message);
        });
    }
    static
    desplazarse() {
    //    let des = Number(document.body.clientHeight - 611);
        let des = Number(document.body.clientHeight - 614);

    //    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        if (document.body.scrollTop > des || document.documentElement.scrollTop > des) {

            nueveMas = nueveMas + MAS;
            Pokemon.colocar(nueveMas);
        } 
//        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
//            logo.style.height = "100px";
//        } else {
//            logo.style.height = "200px";
//        }
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

/* Desplazarse
--------------------------------------------------------------------------------*/
window.onscroll = function () { 
    Pokemon.desplazarse();
};




