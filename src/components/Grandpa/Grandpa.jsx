import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);

const Grandpa = () => {
  const [money, setMoney] = useState(1000);

  const asset = 'diamond';
  return (
    <div>
      <section className="grandpa">
        <h2>Grandpa</h2>
        <p>Net money: {money}</p>
          <section className="flex">
            <MoneyContext.Provider value={[money, setMoney]}>
              <AssetContext.Provider value="gold">
                <Dad asset={asset}></Dad>
                <Uncle asset={asset}></Uncle>
                <Aunty></Aunty>
              </AssetContext.Provider>
            </MoneyContext.Provider>
          </section>
      </section>
    </div>
  );
};

export default Grandpa;

/**
 * 1. Create a context and export it
 * 2. Add provider for the context with a value. Value cound br amything
 * 3. useContect to access the value in the context API
 * 
 */