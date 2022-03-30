import { useEffect, useState } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [usd, setUsd] = useState("");

  const onClick = (event) => {
    event.preventDefault();
  };
  const onChange = (event) => {
    setUsd(event.target.value);
    // console.log(usd);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    console.log(usd);
  }, [usd]);

  return (
    <div>
      <h1>Get the Coins! {loading ? null : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading ...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <form>
        <input
          onChange={onChange}
          type="text"
          placeholder="WRITE YOUR USD"
          value={usd}
        />
        <button onClick={onClick}>converting..</button>
      </form>
    </div>
  );
}

export default CoinTracker;
