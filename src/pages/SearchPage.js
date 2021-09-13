import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RoomIcon from '@material-ui/icons/Room';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import '../asstes/css/SearchPage.css';
import useGoogleSearch from '../asstes/hooks/useGoogleSearch';
import Search from '../components/Search';

function SearchPage() {
    const history = useHistory();
    const {input} = useParams();
    const termData = input;
    const { data } = useGoogleSearch(termData);

    if(!termData) history.push('/')

    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                <img className="searchPage__logo" alt="Google branding" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
                </Link>
                <div className="searchPage__headerBody">
                    <Search />

                    <div className="searchPage__options">
                        
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage__option">
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchPage__option">
                                <ImageIcon />
                                <Link to="/image">Image</Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOfferIcon />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon />
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="searchPage__option">
                                <MoreVertIcon />
                                <Link to="/more">More</Link>
                            </div>
                        </div>

                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage__option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {data && (
                <div className="searchPage__results">
                    <p className="searchPage__resultCoun">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for "{termData}"
                    </p>

                    {data?.items.map( (item, index) => (
                        <div key={item.cacheId || index} className="searchPage__result">
                            <a href={item.link} >
                                <h2  className="searchPage__resultTitle">{item.title}</h2>
                            </a>
                            <b> 
                                <img 
                                    alt=""
                                    className="searchPage__resultImage"
                                    src={item.pagemap?.cse_image?.length > 0 && item.pagemap.cse_image[0].src}
                                 />
                                 {item.displayLink} </b>
                            <p className="searchPage__resultSnippet">{item.snippet}</p>
                        </div>
                    ))}
                </div>
            )}
            
        </div>
    )
}

export default SearchPage

    // https://developers.google.com/custom-search/v1/using_rest
    //https://cse.google.com/cse/create/new