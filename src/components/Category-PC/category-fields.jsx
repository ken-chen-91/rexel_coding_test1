import React from "react";
import CategoryField from "./category-field";
import DataComm from "../../assets/img/datacomm.png";
import HVAC from "../../assets/img/hvac.png";
import Industrial from "../../assets/img/industrial.png";
import Lighting from "../../assets/img/lighting.png";
import Energy from "../../assets/img/energy.png";
import Utility from "../../assets/img/utility.png";

const CategoryFields = () => {
  return (
    <div className="category-pc-fields-wrapper">
      <h1>Product Markets</h1>
      <div className="category-pc-fields">
        <CategoryField icon={DataComm} text="DataComm" />
        <CategoryField icon={HVAC} text="HVAC" />
        <CategoryField icon={Industrial} text="Industrial" />
        <CategoryField icon={Lighting} text="Lighting" />
        <CategoryField icon={Energy} text="Energy Efficiency" />
        <CategoryField icon={Utility} text="Utility" />
      </div>
    </div>
  );
};

export default CategoryFields;
