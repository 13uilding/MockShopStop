import React, { useState } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
  Form
 } from 'reactstrap';
import { Search } from 'react-bootstrap-icons';
import { useSelector, useDispatch } from 'react-redux';
import { change, selectSearchBar, selectSearchCurrent, focus } from '../features/search/searchSlice';
import { withRouter } from 'react-router-dom';


const MySearchBar = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);

  const searchBar = useSelector(selectSearchBar);
  const currentSearch = useSelector(selectSearchCurrent);
  const dispatch = useDispatch();

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(focus(searchBar));
    props.history.push(`/item/${searchBar}`);
    dispatch(change(""));
  }

  return (
    <Form onSubmit={(e) => onSubmit(e)} className="flex-grow margin-right-2em">
      <InputGroup >
        <InputGroupAddon addonType="prepend" className="background-primary">
          <NavLink >
            <Search />
          </NavLink>
        </InputGroupAddon>
        <Input onChange={(e) => dispatch(change(e.target.value))} value={searchBar}/>
      </InputGroup>
    </Form>
  );
}


export default withRouter(MySearchBar);