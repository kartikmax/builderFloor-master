import Image from "next/image";
import React from "react";
import { useState } from "react";
import MoreDropdown from "./more";
import FilterPrice from "./price";
import { Formik, Form, useFormikContext } from "formik";
import FilterSize from "./size";
import Select from "./select";
import axios from "axios";

async function listProperties(filterValues) {
  const filters = {
    ...(filterValues.cities?.length > 0 && {
      city: { $in: filterValues.cities },
    }),
    ...(filterValues.locations?.length > 0 && {
      sectorNumber: {
        // $in: filterValues.locations.map(({ value }) => value),
        $in: filterValues.locations,
      },
    }),
    ...(filterValues.possession?.length > 0 && {
      possession: { $in: filterValues.possession },
    }),
    ...(filterValues.floors?.length > 0 && {
      floor: { $in: filterValues.floors },
    }),
    ...(filterValues.accommodation?.length > 0 && {
      accommodation: { $in: filterValues.accommodation },
    }),
    ...(filterValues.categories?.length > 0 && {
      category: { $in: filterValues.categories },
    }),
    ...(filterValues.facing?.length > 0 && {
      facing: {
        $in: filterValues.facing,
      },
    }),
    ...(filterValues.positions.includes("parkFacing") > 0 && {
      parkFacing: { $eq: true },
    }),
    ...(filterValues.positions.includes("corner") > 0 && {
      cornerPlot: { $eq: true },
    }),
    ...(filterValues.priceRange?.[0] && {
      price: {
        $gte: filterValues.priceRange[0],
        ...(filterValues.priceRange?.[1] !=
          filterValues.priceRange[filterValues.priceRange.length - 1] && {
          $lte: filterValues.priceRange?.[1],
        }),
      },
    }),
    ...(filterValues.sizeRange?.[0] && {
      size: {
        $gte: filterValues.sizeRange?.[0],
        $lte: filterValues.sizeRange?.[1],
      },
    }),
  };

  const response = await axios.post(
    // "https://p24x7-server.herokuapp.com/api/p24x7",
    "https://testerp1apis.nextsolutions.in/api/p24x7",
    {
      action: "list",
      module: "properties",
      filters,
      apiKey: "083d2bc2-fd14-4a5e-a440-614232b4873e",
    }
  );
  return response.data;
}

const DropDown = ({ title, dropdown, changed, current, curr, check }) => {
  const [hover, setHover] = useState(false);

  const onPointerdown = () => {
    if (!hover) {
      // setClicked(false);
      if (curr === current) {
        changed(null);
      }
    }
  };

  React.useEffect(() => {
    document.addEventListener("pointerdown", onPointerdown);
    return () => {
      document.removeEventListener("pointerdown", onPointerdown);
    };
  });
  return (
    <div
      className="h-[40px] md:w-[200px] md:rounded-[40px] md:justify-center md:px-[40px] lg:mr-[20px]  border-[#000] md:w-[100%] md:my-[10px] bg-[#fff] relative flex items-center duration-10 cursor-pointer  px-[20px] rounded-sm border-[1px] "
      onClick={() => {
        // setClicked(true);

        changed(current);
      }}
      style={{
        backgroundColor: current === curr && "#006d77",
        border: " 1px solid #ccc",
      }}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <p
        className="text-[16px] capitalize  mr-[12px]"
        style={{
          color: current === curr && "#fff",
        }}
      >
        {title}
      </p>
      <Image
        src={
          current === curr
            ? "/assets/imgs/textures/drop1.svg"
            : "/assets/imgs/textures/dropdown.svg"
        }
        alt=""
        className="translate-y-[2px]"
        width={15}
        height={15}
      />
      {current === curr &&
        (check ? (
          <>{dropdown}</>
        ) : (
          <div
            className="absolute top-[60px] left-[-30px]"
            style={{
              zIndex: 99999999999,
            }}
          >
            {dropdown}
          </div>
        ))}
    </div>
  );
};

const RadioOptions = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="w-[100%] py-[10px]">
      <div className="flex px-[20px] mt-[5px] h-[25px] items-center">
        <input
          type="radio"
          id=""
          name="selectit"
          style={{
            accentColor: "#006d77",
          }}
          onChange={(e) => {
            setSelected(0);
          }}
          value={true}
        />
        <p className="font-medium translate-y-[-1px] ml-[10px]">Any</p>
      </div>
      <div className="flex px-[20px] mt-[5px] h-[25px] items-center">
        <input
          type="radio"
          name="selectit"
          id=""
          style={{
            accentColor: "#006d77",
          }}
          onChange={(e) => {
            setSelected(1);
          }}
        />
        <p className="font-medium translate-y-[-1px] ml-[10px]">Guesthouse</p>
      </div>
      <div className="flex px-[20px] mt-[5px] h-[25px] items-center">
        <input
          type="radio"
          id=""
          onChange={(e) => {
            setSelected(2);
          }}
          style={{
            accentColor: "#006d77",
          }}
          name="selectit"
        />
        <p className="font-medium translate-y-[-1px] ml-[10px]">Homestay</p>
      </div>
    </div>
  );
};
const CheckOptions2 = ({ setValue, selected, setSelected }) => {
  React.useEffect(() => {
    const arr = [];
    if (selected.second) {
      arr.push("parkFacing");
    }
    if (selected.first) {
      arr.push("corner");
    }
    setValue(arr);
  }, [selected]);
  return (
    <div className="w-[100%] py-[10px]">
      <div className="flex px-[20px] mt-[5px] h-[25px] items-center">
        <input
          type="checkbox"
          checked={selected.first}
          id=""
          style={{
            accentColor: "#006d77",
          }}
          onChange={(e) => {
            setSelected({
              ...selected,
              first: !selected.first,
            });
          }}
        />
        <p className="font-medium translate-y-[-1px] ml-[10px]">Corner</p>
      </div>
      <div className="flex px-[20px] mt-[5px] h-[25px] items-center">
        <input
          type="checkbox"
          id=""
          style={{
            accentColor: "#006d77",
          }}
          checked={selected.second}
          onChange={(e) => {
            setSelected({
              ...selected,
              second: !selected.second,
            });
          }}
        />
        <p className="font-medium translate-y-[-1px] ml-[10px]">Park facing</p>
      </div>
    </div>
  );
};

const CheckOptions1 = () => {
  const [selected, setSelected] = useState({
    first: false,
    second: false,
    third: false,
  });
  return (
    <div className="w-[100%] py-[10px]">
      <div className="flex px-[20px] mt-[5px] h-[25px] items-center">
        <input
          type="checkbox"
          id=""
          style={{
            accentColor: "#006d77",
          }}
          onChange={(e) => {
            setSelected({
              ...selected,
              first: !selected.first,
            });
          }}
          value={true}
        />
        <p className="font-medium translate-y-[-1px] ml-[10px]">North facing</p>
      </div>
      <div className="flex px-[20px] mt-[5px] h-[25px] items-center">
        <input
          type="checkbox"
          id=""
          style={{
            accentColor: "#006d77",
          }}
          onChange={(e) => {
            setSelected({
              ...selected,
              second: !selected.second,
            });
          }}
        />
        <p className="font-medium translate-y-[-1px] ml-[10px]">South facing</p>
      </div>
      <div className="flex px-[20px] mt-[5px] h-[25px] items-center">
        <input
          type="checkbox"
          id=""
          onChange={(e) => {
            setSelected({
              ...selected,
              third: !selected.third,
            });
          }}
          style={{
            accentColor: "#006d77",
          }}
        />
        <p className="font-medium translate-y-[-1px] ml-[10px]">
          North-East facing
        </p>
      </div>
    </div>
  );
};

const FilterContainer = ({ values, setProperties, locations }) => {
  const categoriesOptions = [
    {
      value: "plot",
      label: "Plot",
    },
    {
      value: "flat",
      label: "Flat",
    },
    {
      value: "commercial",
      label: "Commercial",
    },
    {
      value: "institutional",
      label: "Institutional",
    },
  ];

  const defaultFilters = values ?? {
    categories: [],
    cities: [],
    locations: [],
    facing: [],
    positions: [],
    floors: [],
    possession: [],
    accommodation: [],
    priceRange: [10000000, 30000000],
    sizeRange: [0, 10],
  };

  const [loading, setLoading] = useState(false);

  const onSubmit = async (values) => {
    setLoading(true);
    // setCookie("property_filters", JSON.stringify(values));
    const properties = await listProperties(values);
    setProperties(properties ?? []);
    setLoading(false);
  };

  const [selected, setSelected] = useState({
    first: false,
    second: false,
  });

  const [curr, setCurr] = useState(null);
  const [val, setVal] = useState([0, 10]);
  return (
    <div
      style={{
        borderTop: "1px solid #ccc",
        borderBottom: "1px solid #ccc",
      }}
      className="w-[100%] md:py-[20px] border-t-[#000] border-t-[1px] items-center  mb-[40px] lg:h-[70px] bg-[#f4f4f4] justify-start px-[20px] flex md:flex-col "
    >
      <Formik initialValues={defaultFilters} onSubmit={onSubmit}>
        {({ getFieldProps, setFieldValue, handleSubmit }) => (
          <>
            <DropDown
              curr={curr}
              check={true}
              changed={(e) => {
                setCurr(e);
              }}
              current={0}
              title={"Price"}
              dropdown={
                <FilterPrice
                  priceRangeIntial={getFieldProps("priceRange").value}
                  setPrice={(prices) => {
                    console.log(prices);
                    setFieldValue("priceRange", prices);
                  }}
                />
              }
            />
            <DropDown
              curr={curr}
              check={true}
              changed={(e) => {
                setCurr(e);
              }}
              current={1}
              title={"Size"}
              dropdown={
                <FilterSize
                  initvalues={val}
                  setVal={setVal}
                  values={[0, 10]}
                  setSize={(sizes) => setFieldValue("sizeRange", sizes)}
                />
              }
            />
            <DropDown
              curr={curr}
              changed={(e) => {
                setCurr(e);
              }}
              check={true}
              current={2}
              title={"Location"}
              dropdown={
                <Select
                  name="locations"
                  labelId={"Locations"}
                  options={locations}
                  multiple
                  {...getFieldProps("locations")}
                />
              }
            />
            <DropDown
              curr={curr}
              changed={(e) => {
                setCurr(e);
              }}
              check={true}
              current={3}
              title={"facing"}
              dropdown={
                <>
                  {/* <div className="bg-[#e4e7ec] w-[100%] h-[50px] flex items-center px-[20px] text-[13px] font-medium text-[#4c4c4c]">
                  Accomodation
                </div>
                <RadioOptions /> */}
                  {/* <div className="bg-[#e4e7ec] w-[100%] h-[50px] flex items-center px-[20px] text-[13px] font-medium text-[#4c4c4c]">
                    Facing
                  </div> */}
                  {/* <CheckOptions1 /> */}
                  <Select
                    name="facing"
                    labelId={"Facing"}
                    options={[
                      // { value: "north", label: "North" },
                      // { value: "south", label: "South" },
                      // { value: "east", label: "East" },
                      // { value: "west", label: "West" },
                      // { value: "north-east", label: "North-East" },
                      // { value: "north-west", label: "North-West" },
                      // { value: "south-east", label: "South-East" },
                      // { value: "south-west", label: "South-West" },
                      { value: "NORTH", label: "North" },
                      { value: "SOUTH", label: "South" },
                      { value: "EAST", label: "East" },
                      { value: "WEST", label: "West" },
                      { value: "NORTHEAST", label: "North-East" },
                      { value: "NORTHWEST", label: "North-West" },
                      { value: "SOUTHEAST", label: "South-East" },
                      { value: "SOUTHWEST", label: "South-West" },
                    ]}
                    multiple
                    {...getFieldProps("facing")}
                  />
                </>
              }
            />
            <DropDown
              curr={curr}
              changed={(e) => {
                setCurr(e);
              }}
              current={4}
              title={"position"}
              check={true}
              dropdown={
                <div
                  // className="w-[240px]  bg-[#fff] right-0 border-[1px] border-[#000]"
                  className="cursor-default  drop-shadow-2xl md:w-[100vw] md:px-[30px] lg:left-0 md:top-[50px] top-[60px] py-[10px] px-[10px] rounded-[3px] absolute w-[330px]  bg-[#fff]"
                  style={{
                    zIndex: 9999999999,
                    border: "1px solid #000",
                  }}
                >
                  {/* <div className="bg-[#e4e7ec] w-[100%] h-[50px] flex items-center px-[20px] text-[13px] font-medium text-[#4c4c4c]">
                  Accomodation
                </div>
                <RadioOptions /> */}
                  <div className="bg-[#e4e7ec] w-[100%] h-[50px] flex items-center px-[20px] text-[13px] font-medium text-[#4c4c4c]">
                    Position
                  </div>
                  <CheckOptions2
                    setValue={(e) => {
                      setFieldValue("positions", e);
                    }}
                    selected={selected}
                    setSelected={setSelected}
                  />
                </div>
              }
            />
            <DropDown
              curr={curr}
              changed={(e) => {
                setCurr(e);
              }}
              check={true}
              current={5}
              title={"Accomodation"}
              dropdown={
                // <div
                //   className="w-[240px]  bg-[#fff] right-0 border-[1px] border-[#000]"
                //   style={{
                //     zIndex: 9999999999,
                //     border: "1px solid #000",
                //   }}
                // >
                //   <div className="bg-[#e4e7ec] w-[100%] h-[50px] flex items-center px-[20px] text-[13px] font-medium text-[#4c4c4c]">
                //     Accomodation
                //   </div>
                //   <RadioOptions />
                // </div>
                <Select
                  name="accommodation"
                  labelId={"Accomodation"}
                  options={[
                    { value: "2BHK", label: "2 BHK" },
                    { value: "3BHK", label: "3 BHK" },
                    { value: "4BHK", label: "4 BHK" },
                    { value: "5BHK", label: "5 BHK" },
                    {
                      value: "6BHK",
                      label: "6 BHK",
                    },
                  ]}
                  multiple
                  {...getFieldProps("accommodation")}
                />
              }
            />
            <DropDown
              curr={curr}
              changed={(e) => {
                setCurr(e);
              }}
              check={true}
              current={6}
              title={"Floors"}
              dropdown={
                <Select
                  name="floors"
                  labelId={"Floor"}
                  options={[
                    { value: "1st", label: "First Floor" },
                    { value: "2nd", label: "Second Floor" },
                    { value: "3rd", label: "Third Floor" },
                    { value: "4th", label: "Fourth Floor" },
                    {
                      value: "firstBasement",
                      label: "Basement + First Floor",
                    },
                  ]}
                  multiple
                  {...getFieldProps("floors")}
                />
              }
            />
            {/* <MoreDropdown /> */}
            <button
              className="w-[100px] md:w-[200px] md:rounded-[30px] md:mt-[10px] h-[40px] rounded-sm bg-[#006d77] text-[#fff] font-medium"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              {loading ? "Filtering..." : "Filter"}
            </button>
          </>
        )}
      </Formik>
    </div>
  );
};

export default FilterContainer;
