import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([])
  const [currencyDate, setCurrencyDate] = useState('')
  const [currency, setCurrency] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(process.env.react_app_url, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.react_app_key,
          'X-RapidAPI-Host': process.env.react_app_host,
        }
      })

      const json = await res.json()
      setData(json.exchange_rates)
      setCurrencyDate(json.base_currency_date)
      setCurrency(json.base_currency)
    }
    fetchData();
  }, [])

  return (
    <div className="App">
      <h1>RapidApi Deneme</h1>
      <h3>base currency : {currency} - base currency date : {currencyDate}</h3>
      <div>{data.map((item) => {
        return (
          <div key={item.currency}>
            <div>currency : {item.currency} - exchange rate buy : {item.exchange_rate_buy}</div>
          </div>
        )
      })}</div>
    </div>
  );
}

export default App;
