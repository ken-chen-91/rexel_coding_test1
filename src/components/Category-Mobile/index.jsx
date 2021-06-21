import React from "react";
import "./index.css";

import Category from "../../assets/ic/black/ic_categories.png";
import MyList from "../../assets/ic/black/ic_list.png";
import Catalog from "../../assets/ic/black/ic_playlist_add_check.png";
import LiveHelp from "../../assets/ic/green/ic_chat - active.png";
import PIM from "../../assets/ic/black/ic_check_circle.png";
import Account from "../../assets/ic/black/ic_person.png";
import Locations from "../../assets/ic/black/ic_place.png";
import Search from "../../assets/ic/green/ic_search.png";
import Scanner from "../../assets/ic/green/ic_scanner.png";
import CateGories from '../../assets/ic/green/ic_line_style.png'

import CategoryTitle from "./category-title";
import CategoryItem from "./category-item";
import CategoryBtn from './category-btn'

const index = () => {
  return (
    <div className="category-mobile-container">
      <div className="category-mobile-wrapper">
        <CategoryTitle icon={Category} text="Shop all categories" />
        <CategoryItem icon={Catalog} text="My Catalog" />
        <CategoryItem icon={MyList} text="My List" />
        <CategoryItem icon={LiveHelp} text="Live Help" />
        <CategoryItem icon={PIM} text="My Catalog" />
        <CategoryItem icon={Account} text="Accountg" />
        <CategoryItem icon={Locations} text="Branch Locations"/>
      </div>
      <div className="category-mobile-btn-wrapper">
        <CategoryBtn icon={CateGories} text="Categories" />
        <CategoryBtn icon={Search} text="Search" />
        <CategoryBtn icon={Scanner} text="Scanner"/>
      </div>
    </div>
  );
};

export default index;
