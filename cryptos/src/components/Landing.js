import  { getcoin } from "../Api"
import React ,{useEffect,useState} from 'react';
import Preloader from "./Preloader";
import Coins from "./Coins";
import styles from "../components/Landing.module.css";
const Landing = () => {
    const [coins,setcoins]=useState([]);
 const[search,setsearch]=useState("");
useEffect(()=>{

    const fetchapi=async()=>{
        const data=await getcoin();
        setcoins(data);
    }
    fetchapi()

},[])
const searchhandler=event=>{
    setsearch(event.target.value)
}
const searchedcoins=coins.filter(coin=>coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            <input className={styles.input}  type="text" placeholder="search" value={search} onChange={searchhandler}/>  

            {coins.length ?
            <div className={styles.coincontainor}>
                {
                     searchedcoins.map(coin=> <Coins  
                        key={coin.id}
                        name={coin.name}
                        price={coin.current_price}
                        image={coin.image}
                        symbol={coin.symbol}
                        marketcap={coin.market_cap}
                        pricechange={coin.price_change_percentage_24h}

                    />)
                }
            </div>
            :
            <Preloader/>
}


            
        </div>
    );
};

export default Landing;