import { useEffect, useState } from 'react';
import '../src/style/style.css';
import CardList from './components/CardList';
import CategoriesHolder from './components/CategoriesHolder';
import Loader from './components/Loader';
import InfiniteScroll from 'react-infinite-scroller';
import SwipeMenu from './components/SwipeMenu';



function App() {

  const [categories] = useState(['Food track', 'Vegetarian', 'Burger', 'Asian']);
  const [activeCategory, setActiveCategory] = useState('Food track');
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [startLoading, setStartLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [resultsPerLoading] = useState(15);

  useEffect(() => {
    getDataForCategory(categories[0]);
  }, [])

  let getDataForCategory = (category) => {
    setActiveCategory(category);
    setLoading(true);
    fetch('https://api.yelp.com/v3/businesses/search?location=San Jose, CA 95127&amp;term=restaurants&limit=15&categories=' + category + '&offset=' + page * resultsPerLoading, { headers: { Authorization: 'Bearer uNZtsuNHOndsfwiygeUMRY7G1SddTnKllAW9lnEhgxHz9dbAL6aLiFiwCeZ8MbFP98ihTgNdBqLYhbATz6Rw3NMY7dtURF3FeSZTfjiN4Gf-kCMCnDRuNGcDmlRPYHYx' } })
      .then(response => response.json())
      .then(data => { setData({ ...data }); setLoading(false); setPage(0); setHasMore(true) })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  let loadMore = () => {
    if (!startLoading) {
      setStartLoading(true);
      setPage(page + 1);
      console.log('offset ', (page + 1) * resultsPerLoading, activeCategory)
      fetch('https://api.yelp.com/v3/businesses/search?location=San Jose, CA 95127&amp;term=restaurants&categories=' + activeCategory + '&offset=' + (page + 1) * resultsPerLoading + '&limit=15', { headers: { Authorization: 'Bearer uNZtsuNHOndsfwiygeUMRY7G1SddTnKllAW9lnEhgxHz9dbAL6aLiFiwCeZ8MbFP98ihTgNdBqLYhbATz6Rw3NMY7dtURF3FeSZTfjiN4Gf-kCMCnDRuNGcDmlRPYHYx' } })
        .then(response => response.json())
        .then(res => {
          if (res.businesses.length < resultsPerLoading)
            setHasMore(false);
          let copyData = data;
          copyData.businesses = [...copyData.businesses, ...res.businesses];
          setData({ ...copyData });
          setStartLoading(false);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }

  return (
    <div>
      {loading ? <Loader /> :
        <div className='container'>
          {categories && categories.length > 0 && <CategoriesHolder categories={categories} getDataForCategory={getDataForCategory} activeCategory={activeCategory} />}
          <SwipeMenu categories={categories} getDataForCategory={getDataForCategory} activeCategory={activeCategory} />
          {data && data.businesses && data.businesses.length > 0 && <InfiniteScroll
            pageStart={page}
            loadMore={loadMore}
            initialLoad={false}
            hasMore={hasMore}
            loader={<Loader key={0} type='row' />}>
            <div className="menuHolder">
              <CardList data={data} />
            </div>
          </InfiniteScroll>
          }
        </div>
      }
    </div>
  );
}

export default App;
