
import products from '../products'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cartSlice'



const Home = () => {
    const dispatch=useDispatch()
    const addToCartHandler=(product)=>{
        dispatch( addToCart( product ) )


    }

    
  
    return(
       <div className='home-container'>
        <div>
            <h2>List Of Mobiles</h2>
        </div>
        <div className='products'>
            {products.map((product)=>{return(
                <div key={product.id} className='product'>
                    <h3>{product.name}</h3>
                    <img src={product.image} alt={product.name}/>
                    <div className='details'>
                        <span>{product.desc}</span>
                        <span className='price'> ${product.price}</span>

                    </div>
                    <button onClick={()=>(addToCartHandler(product))}>Add To Cart</button>
                </div>
            )})}
        </div>

       </div>
    )



}

export default Home
