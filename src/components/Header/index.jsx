import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";

import Logo from "../../assets/img/logo.png";
import SearchBtn from "../../assets/ic/white/ic_search.png";
import CartBtn from "../../assets/ic/white/ic_shopping_cart.png";
import PersonBtn from "../../assets/ic/white/ic_person.png";
import MenuBtn from "../../assets/ic/white/ic_menu.png";
import SearchBtnBlack from "../../assets/ic/black/ic_search.png";

const Header = () => {

  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get(
        "https://dummy.restapiexample.com/api/v1/employees"
      );
      setUsers(response.data.data);
    }; 
    loadUsers();
  }, []);

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = users.filter((user) => {
        const regex = new RegExp("^" + text.replace(/[^A-Za-z]+/g, ""), "i");
        return user.employee_name.match(regex);
      });
    }

    const sorted = matches.sort((a, b) => {
      if (a.employee_name.startsWith(text) && b.employee_name.startsWith(text))
        return a.employee_name.localeCompare(b.employee_name);
      else if (a.employee_name.startsWith(text)) return -1;
      else if (b.employee_name.startsWith(text)) return 1;

      return a.employee_name.localeCompare(b.employee_name);
    });
    setSuggestions(sorted);
    setText(text);
  };

  const onSuggestHandler = (text) => {
    setText(text);
    setSuggestions([]);
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
            value={text}
            onChange={(e) => onChangeHandler(e.target.value)}
          />
          <img src={SearchBtnBlack} alt="Search Button" />
        </form>

        {suggestions && (
          <ul className="header-search-result">
            {suggestions.map((suggestion, i) => (
              <li className="header-search-list"
                onClick={() => {
                  onSuggestHandler(suggestion.employee_name);
                }}
              >
                {suggestion.employee_name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Header;
