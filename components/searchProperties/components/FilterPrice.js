import { useState, useEffect } from "react";

// Components
import RangeSlider from "../../elements/RangeSlider";

export const priceRange = [
  10000000, 20000000, 30000000, 40000000, 50000000, 60000001,
];
function FilterPrice({ priceRangeIntial, setPrice }) {
  const [prices, setPrices] = useState([25000000, 35000000]);
  const [value, setValue] = useState([25000000, 35000000]);

  useEffect(() => {
    if (priceRangeIntial) {
      setPrices(priceRangeIntial);
      setValue(priceRangeIntial);
      setPrice(priceRangeIntial);
    } else {
      setPrice(value);
    }
  }, []);

  const getPriceWithWordNotation = (figure) => {
    if (figure >= priceRange[priceRange.length - 1]) return "6 Cr. +";
    var figureStr = figure?.toExponential();
    const floatFigure = figureStr?.toString()?.split("e")?.[0];
    if (figure > 999 && figure <= 9999) return `${floatFigure} Th.`;
    if (figure > 9999 && figure <= 99999) return `${floatFigure * 10} Th.`;
    if (figure > 99999 && figure <= 999999) return `${floatFigure} Lk.`;
    if (figure > 999999 && figure <= 9999999) return `${floatFigure * 10} Lk.`;
    if (figure > 9999999 && figure <= 99999999) return `${floatFigure} Cr.`;
  };

  return (
    prices && (
      <div className="mt-0">
        <span className="text-heading-5 color-green-900 d-inline-block items-center h-[100%]">
          <span id="price-from" className="price-from ">
            {getPriceWithWordNotation(prices[0])}
          </span>
          <RangeSlider
            step={2000000}
            min={priceRange[0]}
            max={priceRange[priceRange.length - 1]}
            value={value}
            onChange={(event, value) => {
              setValue(value);
              setPrices(value);
              setPrice(value);
            }}
          />
          <span id="price-to" className="price-to">
            {getPriceWithWordNotation(prices[1])}
          </span>
        </span>
      </div>
    )
  );
}

export default FilterPrice;
