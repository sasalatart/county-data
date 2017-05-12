import * as axios from 'axios';

export const getCounties = (page) => {
  return new Promise(res => {
    axios.get(`/counties?page=${page}`).then(response => {
      const countiesData = response.data.counties;
      const { page: currentPage, pages, docs: pageCounties } = countiesData;
      res({ currentPage, pages, pageCounties });
    });
  });
};
