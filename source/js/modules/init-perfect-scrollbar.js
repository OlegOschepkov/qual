import PerfectScrollbar from 'perfect-scrollbar';

const initPerfectScrollbar = () => {
  const slimSelectLists = document.querySelectorAll('.ss-list');

  if (slimSelectLists.length)  {
    slimSelectLists.forEach((list) => {
      const ps = new PerfectScrollbar(list, {
        wheelSpeed: 2,
        wheelPropagation: false,
        minScrollbarLength: 53,
      });
    })
  }
};

export {initPerfectScrollbar};
