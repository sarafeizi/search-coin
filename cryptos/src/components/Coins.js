import React from 'react';
import styles from "../components/Coin.module.css";
const Coins = ({name,symbol,image,price,markercap,pricechange}) => {


    return (
        <div className={styles.containor}>
            <img src={image} alt={name}  className={styles.image}/>
<span className={styles.name}>{name}</span>
<span className={styles.symbol}>{symbol.toUpperCase()}</span>
<span className={styles.currentPrice}>$ {price}</span>
<span className={styles.marketCap}> $ {markercap}</span>
<span className={pricechange > 0 ? styles.greenPriceChange : styles.redPriceChange}>{pricechange.toFixed(2)}</span>
            
        </div>
    );
};

export default Coins;