import { useState } from 'react';

import "./searchBar.scss";

const SearchBar = () => {
    const [query, setQuery] = useState({
        type: "buy",
        location: "",
        minPrice: 0,
        maxPrice: 0
    });
    const [isBuy, setIsBuy] = useState(true);
    const [isRent, setIsRent] = useState(false);

    const handleBuyClick = () => {
        setIsBuy(true);
        setIsRent(false);
        setQuery((prev) => ({ ...prev, type: "buy" }));
    };

    const handleRentClick = () => {
        setIsRent(true);
        setIsBuy(false);
        setQuery((prev) => ({ ...prev, type: "rent" }));
    };

    return (<>
        <div className="input-type">
            <button onClick={handleBuyClick} className={isBuy ? "btn-select" : ""}>Buy</button>
            <button onClick={handleRentClick} className={isRent ? "btn-select" : ""}>Rent</button>
        </div>
        <form action="" method="post" className="input-field">
            <label>City Location</label>
            <input type="text" name='location' />
            <label>Min Price</label>
            <input type="number" min={0} max={10000000} name='minPrice' />
            <label>Max Price</label>
            <input type="number" min={0} max={10000000} name='maxPrice' />
            <button type="submit"><img src="/search.png" alt="search" /></button>
        </form>
    </>);
};

export default SearchBar;