import {React, Fragment,useEffect} from 'react'
import {CgMouse} from 'react-icons/all'
import Loading from '../Component/layout/loader/Loader'
import './Home.css'
import Product from './Product'
import MetaData from '../Component/layout/MetaData'
import {getProduct} from '../actions/productAction'
import {useDispatch, useSelector} from  'react-redux'
import { useAlert } from 'react-alert'

// const product = {
//   name:"BlueShirt",
//   images:[{url:{top1}}],
//   price:"$30",
//   _id:"megaus"
// };

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const {loading,error,products} = useSelector(
      (state)=>state.products
  );
   


  useEffect(() => {
    if(error){
      return alert.error(error);
    }
    dispatch(getProduct());
  }, [dispatch,error,alert]);

    return (
    <Fragment>
      {loading ? <Loading/>:  <>
      <MetaData title="METROPOLITE" />
      <div className="banner">
        <div className="banner-child">

       
          <p>Welcome to <br/>Metropolite </p>
          <h1>FIND AMAZING <br/> <p id='home-metro-text'> PRODUCTS  BELOW</p></h1>

          <a href="#container">
            <button> 
             Scroll <CgMouse/>
            </button>
          </a>
          </div>
      </div>

      <h2 className='homeHeading'>Featured Product</h2>
      <div className='container' id='container'>
           {products && products.map((product)=> <Product product={product} />)}
      </div>
      </>}
    </Fragment>
    );
}

export default Home
