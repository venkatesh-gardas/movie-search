import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
//Image
import searchIcon from "../../images/search-icon.svg";
//Styles
import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({ setSearhTerm }) => {
  const [state, setState] = useState("");
  const initial = useRef(true);
  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearhTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearhTerm, state]);
  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(event) => setState(event.currentTarget.value)}
        />
      </Content>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  setSearhTerm: PropTypes.func,
};

export default SearchBar;
