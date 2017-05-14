import * as axios from 'axios';

const retrievePaginatedResponseJSON = response => {
  const countiesData = response.data.counties;
  const { page: currentPage, pages, docs: counties } = countiesData;
  return { currentPage, pages, counties };
};

export const getCounties = page => {
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

export const getCounty = id => {
  return new Promise(res => {
    axios.get(`/counties/${id}`).then(response => {
      const { county } = response.data;
      res(county);
    });
  });
};
