import React from 'react'
import './index.css'
import Category from '../../assets/ic/black/ic_categories.png';
import List from '../../assets/ic/black/ic_list.png';
import Catalog from '../../assets/ic/black/ic_playlist_add_check.png';
import Help from '../../assets/ic/green/ic_chat - active.png';
import PIM from '../../assets/ic/black/ic_check_circle.png';
import Account from '../../assets/ic/black/ic_person.png';
import Locations from '../../assets/ic/black/ic_place.png';

import CateGoryTitle from './category-title'
import CategoryItem from './category-item';
import CategoryFields from  './category-fields'

const CategoryPC = () => {
  return (
    <div className="category-pc-container">
      <CateGoryTitle icon={Category} text="Shop all categories" />
      <div className="category-pc-items">
        <CategoryItem icon={Catalog} text="My Catelog" />
        <CategoryItem icon={List} text="My List" />
        <CategoryItem icon={Help} text="Live Help" />
        <CategoryItem icon={PIM} text="PIM" />
        <CategoryItem icon={Account} text="Account" />
        <CategoryItem icon={Locations} text="Branch Locations" />
      </div>
      <CategoryFields />
    </div>
  )
}

export default CategoryPC
