import React, { useState } from 'react';
import './index.css'
import axios from 'axios';

import Logo from '../../assets/img/logo.png';
import SearchBtn from '../../assets/ic/white/ic_search.png';
import CartBtn from '../../assets/ic/white/ic_shopping_cart.png';
import PersonBtn from '../../assets/ic/white/ic_person.png';
import MenuBtn from '../../assets/ic/white/ic_menu.png';
import SearchBtnBlack from '../../assets/ic/black/ic_search.png';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [list, setList] = useState([]);

  const onSearchChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    if (value === '') {
      setList([]);
    } else {
      axios
        .get('https://dog.ceo/api/breeds/list/all')
        .then((res) => {
          setList(
            Object.keys(res.data.message).filter((ele) =>
              ele.trim().toLowerCase().includes(value.trim().toLowerCase())
            )
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onClickList = (e) => {
    const val = e.target.attributes.val.nodeValue;
    setSearchTerm(val);
    setList(
      list.filter((ele) =>
        ele.trim().toLowerCase().includes(val.trim().toLowerCase())
      )
    );
  };

  return (
    <>
      <div className="header-wrapper">
        <div className="header-top">
          <img src={Logo} alt="Logo" />
          <div className="header-top-btns">
            <img src={SearchBtn} alt="search" />
            <img src={CartBtn} alt="cart" />
            <img src={PersonBtn} alt="person" />
            <img src={MenuBtn} alt="menu" />
          </div>
        </div>
        <form className="header-form">
          <input
            type="text"
            placeholder="What are you looking for?"
            value={searchTerm}
            onChange={onSearchChange}
          />
          <img src={SearchBtnBlack} alt="Search Button" />
        </form>
        {list.length !== 0 && (
          <ul className="header-search-result">
            {list.map((ele) => (
              <li onClick={onClickList} val={ele} key={ele}>
                {ele}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Header;