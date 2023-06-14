import { useState, useEffect } from "react";

// Components
import RangeSlider from "../elements/RangeSlider";

function FilterSize({ values, setSize, initvalues,setVal }) {
  const sizeRanges = [
    [0, 10],
    [10, 22],
    [22, 38],
    [38, 48],
    [48, 64],
    [64, 74],
    [74, 76],
  ];
  const baseSize = [100, 150, 200, 250, 300, 400, 500];
  const [sizes, setSizes] = useState();
  const [value, setValue] = useState(initvalues);
  const [check, setCheck] = useState(false);
  console.log(value);

  const getPrice = (value) => {
    let result;
    sizeRanges.forEach((sizeRange, index) => {
      if (value === 0) {
        result = baseSize[value];
        return;
      }
      if (value === sizeRanges[sizeRanges.length - 1][1]) {
        result = baseSize[baseSize.length - 1] + 1;
        return;
      }
      if (value > sizeRange[0] && value <= sizeRange[1]) {
        const min = sizeRange[0];
        const max = sizeRange[1];
        const increment =
          (baseSize[index + 1] - baseSize[index]) / ((max - min) / 2);
        result = baseSize[index] + ((value - min) / 2) * increment;
      }
    });
    return result;
  };

  useEffect(() => {
    if (check) {
      setSizes([getPrice(value[0]), getPrice(value[1])]);
      setSize([getPrice(value[0]), getPrice(value[1])]);
    } else {
      setCheck(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const getPriceWithWordNotation = (figure) => {
    const floatFigure = figure;
    if (figure > baseSize[baseSize.length - 1]) return "500 +";
    return `${floatFigure.toFixed(2)}`;
  };

  return (
    <div
      style={{
        zIndex: 999999,
        border: "1px solid #ccc",
      }}
      className="cursor-default drop-shadow-2xl md:w-[100vw] md:px-[30px] lg:left-0 md:top-[50px] drop-shadow-2xl top-[60px] py-[10px] px-[10px] rounded-[3px] absolute w-[330px] min-h-[100px] bg-[#fff]"
    >
      <div className="flex h-[40px] justify-between">
        <input
          className="w-[140px] h-[40px] px-[10px] tracking-wide font-medium "
          style={{ border: "1px solid #ccc" }}
          placeholder="Min."
          value={value[0]}
          type="number"
        />
        <input
          className="w-[140px] h-[40px] px-[10px] tracking-wide font-medium "
          style={{ border: "1px solid #ccc" }}
          placeholder="Max."
          value={value[1]}
          type="number"
        />
      </div>
      <div className="w-[100%] h-[50px] mt-[10px] flex items-center bg-[#f4f4f4]">
        <RangeSlider
          step={2}
          min={0}
          max={76}
          value={value}
          onChange={(event, value) => {
            console.log(value);
            setValue(value);
            setVal(value);
          }}
        />
      </div>
      <div className="flex h-[40px] px-[10px] mt-[15px] justify-between">
        <p className="text-[20px] font-bold">
          Min:{getPriceWithWordNotation(value[0])}
        </p>
        <p className="text-[20px] font-bold">
          Max:{getPriceWithWordNotation(value[1])}
        </p>
      </div>
    </div>
  );

  return (
    sizes && (
      <div
        className="w-[300px] bg-[#fff] flex justify-between items-center px-[30px] py-[10px] relative"
        style={{
          zIndex: 9999999999999,
          border: "1px solid #000",
        }}
      >
        <span id="price-from" className="price-from mr-13 font-medium">
          {getPriceWithWordNotation(sizes[0])} <br />
          <span className="sqyard"> Sq.Yard </span>
        </span>
        {/* <span> Sq.Yard</span> */}
        <RangeSlider
          step={2}
          min={0}
          max={76}
          value={value}
          onChange={(event, value) => setValue(value)}
        />
        <span id="price-to" className="price-to font-medium">
          {getPriceWithWordNotation(sizes[1])} <br />{" "}
          <span className="sqyard"> Sq.Yard </span>
        </span>
        {/* <span> Sq.Yard</span> */}
      </div>
    )
  );
}

export default FilterSize;
