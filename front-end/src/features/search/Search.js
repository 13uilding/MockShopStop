import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { change, selectSearchBar, selectSearchCurrent, focus } from './searchSlice';
import { Input, Form } from 'reactstrap';

export function Search() {
  const searchBar = useSelector(selectSearchBar);
  const currentSearch = useSelector(selectSearchCurrent);
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(focus(searchBar));
    dispatch(change(""));
  }

  return (
    <div>
      <h2>{`Your current search is: ${currentSearch}`}</h2>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Input onChange={(e) => dispatch(change(e.target.value))} value={searchBar}></Input>
      </Form>
    </div>
  )
}