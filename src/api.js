import * as axios from 'axios';

const retrievePaginatedResponseJSON = (response) => {
  const countiesData = response.data.counties;
  const { page: currentPage, pages, docs: pageCounties } = countiesData;
  return { currentPage, pages, pageCounties };
};

export const getCounties = (page) => {
  return new Promise(res => {
    axios.get(`/counties?page=${page}`).then(response => {
      res(retrievePaginatedResponseJSON(response));
    });
  });
};

export const findCountiesByName = (name, page) => {
  return new Promise(res => {
    axios.get(`/counties/search/${name}?page=${page}`).then(response => {
      res(retrievePaginatedResponseJSON(response));
    });
  });
};
