import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hook/redux';
import { fetchCharacter, fetchFilms } from '../../store/reducers/actionCreator';
import { pageReducer, searchReducer } from '../../store/reducers/characterReducer';
import "./style.scss";
import { createPages } from '../../components/pagination/pagination';
import {uniqueId } from 'lodash';
import { IFilms } from '../../type';
import Spinner from '../../components/svg/spinner';
import PaginationBattons from '../../components/pagination/paginationBattons';
import Cards from './cards';
import Input from '../../components/input';
import {backgroundImg } from '../../assets/backgroundImg';

const Home = () => {
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState(false)
  const { data, isfetching, error, page, search } = useAppSelector((state) => state.character);
  const dataFilms = useAppSelector((state) => state.films.data.results);
  const totalPage = Math.ceil(data.count / 10);
  const pages: number[] = createPages(totalPage, page)
  const [film, setFilm] = useState<IFilms>()

  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = (e: React.MouseEvent) => {
    e.stopPropagation()
    setOpen(true)
  }

  const handlePage = (el: number) => {
    dispatch(pageReducer(el))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchReducer(e.currentTarget.value))
    setFilm(undefined)
  }

  useEffect(() => {
    dispatch(fetchFilms())
  }, [])

  useEffect(() => {
    if (search) {
      const timer = setTimeout(() => {
        dispatch(fetchCharacter({page, search, urls: film ? film.characters : null }))
      }, 500)
      return () => clearTimeout(timer)
    } else {
      dispatch(fetchCharacter({ page, search, urls: film ? film.characters : null  }))
    }
  }, [page, search, film])

  return (
    <section
      className='home__container'
      onClick={handleClose}
      style={
        film ? { backgroundImage: `url(${backgroundImg.films[film.title.replace(/ /g, '')]})` } : {}}
    >
      {
        error ? <div
          className='error'
        >
          <h2>{error}</h2>
        </div> : isfetching ? <Spinner /> : <>
          <div
            className={open ? "fillter-block_show" : dataFilms.length ? "fillter-block": ""}
            onClick={handleOpen}
          >
            {open ? <>{
              dataFilms && dataFilms.map((el) => {
                return <span
                  key={uniqueId()}
                  className={el.title === "ALL" ? (film === undefined ? "active" : "film-title") : (el.title === film?.title ? "active" : "film-title")}
                  onClick={(e) => {
                    if(el.title === "ALL"){
                      setFilm(undefined)
                    }else(setFilm(el))
                  }}
                >
                  {el.title}
                </span>
              })
            }</> : <p>fillter</p>}</div>
          {film ? null: <Input handleChange={handleChange} search={search} />}
          <Cards data={data} film={film} />
          <PaginationBattons handlePage={handlePage} pages={pages} page={page} />
        </>
      }
    </section>
  );
};

export default Home;