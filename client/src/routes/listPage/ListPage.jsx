import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import { listData } from "../../lib/dummyData";
import "./listPage.scss";

const ListPage = () => {
    const data = listData;

    return (
        <>
            <div className="list-page">
                <div className="list-container">
                    <div className="wrapper">
                        <Filter />
                        {data.map(item => <Card key={item.id} item={item} />)}
                    </div>
                </div>
                <div className="map-container">Map</div>
            </div>
        </>
    );
};

export default ListPage;