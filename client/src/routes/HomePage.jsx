import SearchBar from "../components/searchBar/SearchBar";
import "./homePage.scss";

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="text-container">
                <div className="wrapper">
                    <h1 className="title">Discover Homes & Secure Your Ideal Space</h1>
                    <p>Explore our curated listings to find the perfect property that fits your lifestyle and budget. From cozy apartments to luxurious estates, our extensive database connects you with real estate opportunities that align with your dream living space. Start your journey with us today and step into a home that feels uniquely yours</p>
                    <SearchBar />
                    <div className="achievements">
                        <div className="achievement">
                            <h2>22+</h2>
                            <h3>Years Of Experience</h3>
                        </div>
                        <div className="achievement">
                            <h2>110</h2>
                            <h3>Awards</h3>
                        </div>
                        <div className="achievement">
                            <h2>24,000+</h2>
                            <h3>Buildings Available!</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-container">
                <img src="/buildings.png" alt="" />
            </div>

        </div>
    );
};

export default HomePage;