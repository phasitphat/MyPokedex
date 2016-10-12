import {sayHi} from './function'
import {sayBye} from './function'

const name = "Phasit Phat"

console.log(sayHi(name))

import axios from 'axios'
const movieUrl = 'http://www.omdbapi.com/?t=batman&y=&plot=short&r=json'
axios.get(movieUrl)
.then(response => {
        console.log(response)
    })


console.log(sayBye(name))