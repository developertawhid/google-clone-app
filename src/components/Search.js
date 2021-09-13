import { Button } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import '../asstes/css/Search.css';

function Search({showButtons = false}) {
    
    const [input, setInput] = useState('');
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();

        console.log('You hit the search button')

        // do something with input... come back and fix
        if(input) {

            history.push(`/search/${input}`);
        }
    }


    return (
        <form onSubmit={search} className="search">
            <div className="search__input">
                <SearchIcon  className="search__inputIcon" />
                <input value={ input } onChange={e => setInput(e.target.value)}/>
                <MicIcon />
            </div>
            {showButtons && (<div className="search__buttons">
                <Button type="submit" variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>) }
        </form>
    )
}
// hello

export default Search
