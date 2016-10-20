import React from 'react'
import ReactDOM from 'react-dom'


const SearchForm = () => {

    return (
        <form>
            <input type="pokemonname" />
            <button type="search"> Search </button>
        </form>
    )

}

const Header =(props) => (
    <header>
        <p>{props.title}</p>
        <SearchForm />
    </header>
)

const Items = (props) => {
    console.log(props.Items)
    return (
        <table>
            {props.Items.map(item => (
                     <div>
                         <img src={item[0]} width="300" height="300"/>
                         
                         	 <p>
                         	 	<li>{item[1]} </li>
                                <li>{item[2]} </li>
                                <li>{item[3]} </li>
                                <li>{item[4]} </li>
                             </p>
                         
                     </div>
                )
            )}
        </table>
    )
}

const Content = (props) => (

    <section>

        <p> {props.pokemondescription} </p>
        <Items Items={props.Items} />

    </section>


)

const App = () => {
    const appTitle = 'MyPokedex'
    const pokemondescription = 'Pokemon in MyPokedex'
    const Items = 	[
                    [ "image/Freezer.jpg","Name : Freezer", "CP : 2605" ,"Location : near Dome","IV : n/a" ],
    				[ "image/Fushigibana.jpg","Name : Fushigibana", "CP : 1625" ,"Location : near Chiang Rak","IV : n/a" ],
    				[ "image/Kamex.jpg","Name : Kamex", "CP : 1452" ,"Location : near near Sapan dow ","IV : n/a" ],
    				[ "image/Lizardon.jpg","Name : Lizardon", "CP : 1655" ,"Location : near Sc ","IV : n/a" ],
                    ]
    return (
            <section>
                 <Header title={appTitle} />
                 <Content 
                    content={pokemondescription} 
                    Items={Items}
                 />
            </section>

    )  

}

const element = document.getElementById('app')
ReactDOM.render(<App />, element)