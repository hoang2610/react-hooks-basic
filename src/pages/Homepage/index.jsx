
import React, { useEffect, useState } from "react";
import queryString from 'query-string'

import './Homepage.scss';
// import ColorBox from './components/ColorBox';
// import Pagination from "./components/Pagination";
import PostList from "../../components/PostList";
// import TodoForm from './components/TodForm';
// import TodoList from './components/TodoList';
// import PostFiltersForm from "./components/PostFiltersForm";
// import Clock from "./components/Clock";
// import BetterClock from "./components/BetterClock";
import postsApi from "../../api/postsAPI";

function Homepage() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Predator 🛸' },
    { id: 2, title: 'Nitro 🚀' },
    { id: 3, title: 'Swift 🚗' }
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1
  })
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1
  })
  useEffect(() => {
    async function fetchPostList() {
      try {
        // const paramString = queryString.stringify(filters);
        // const reqUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        // const response = await fetch(reqUrl);
        // const resJson = await response.json();
        // //console.log({ resJson });
        // const { data, pagination } = resJson;
        // setPostList(data)
        // setPagination(pagination);
        const response = await postsApi.getAll(filters);
        console.log('successfuly', response);
        setPostList(response.data);
      } catch (error) {
        console.log(error)
        return;
      }
    }
    fetchPostList();
  }, [filters]);

  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      _page: newPage
    })
  }
  function handleOnClick(todo) {
    if (confirm('Are you want to delete this ?')) {
      const index = todoList.findIndex(c => c.id === todo.id);
      if (index < 0) alert('Not found');
      const newTodoList = [...todoList];
      newTodoList.splice(index, 1);
      setTodoList(newTodoList);
    }
  }
  function handleTodoFormSubmit(formValues) {
    const newTodo = {
      id: todoList.length + 1,
      ...formValues
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  function handleFiltersChange(newFilters) {
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm
    })
  }

  return (
    <div className="homepage">

      <h1>Welcome to my world</h1>

      {/* <ColorBox /> */}

      {/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}

      {/* <TodoList todos={todoList} onTodoClick={handleOnClick} /> */}
      {/* <PostFiltersForm onSubmit={handleFiltersChange} /> */}
      <PostList posts={postList} />
      {/* <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      /> */}
      {/* <Clock /> */}
      {/* <BetterClock /> */}
    </div>
  );
}

export default Homepage;
