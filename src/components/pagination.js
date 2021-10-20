
import utils from '../utils'

import constant from '../constant'

const Pagination = (data, onPageClicked) => {
  if (utils.isEmpty(data)) {
    return
  }
  const count = data.count;
  const currentPage = data.currentPage;
  const numberOfPage = Math.round(count/constant.PAGE_SIZE)+ 1;
  let arrPage = [];
  if (numberOfPage <= 5) {
    arrPage.range(1, numberOfPage, 1);
  }else {
    if (currentPage - 2 <= 0 ) {
      arrPage.range(1, 5,1);
    }else if (currentPage + 2 > numberOfPage) {
      arrPage.range(numberOfPage - 5, numberOfPage, 1);
    }else {
      arrPage.range(currentPage - 2, currentPage + 2, 1);
    }

  }

  return (
    <ul class="pagination justify-content-center">

      <li class={currentPage === 1 ? "page-item disabled": "page-item"}>
        <button onClick={() => onPageClicked(1)}  class="page-link" tabindex="-1">
          <i class="fa fa-angle-double-left"></i>
          <span class="sr-only">Previous</span>
        </button>
      </li>

      <li class={currentPage === 1 ? "page-item disabled": "page-item"}>

        <button onClick={() => onPageClicked(currentPage - 1)}  class="page-link" tabindex="-1">
          <i class="fa fa-angle-left"></i>
          <span class="sr-only">Previous</span>
        </button>
      </li>
        {arrPage.map((page, _) => {
          const active = page === currentPage ? "page-item active" : "page-item";
          return <li class={active}>
            <button onClick={() => onPageClicked(page)} class="page-link" >{page} <span class="sr-only"></span></button>
          </li>
        })}

      <li class={currentPage === numberOfPage ? "page-item disabled": "page-item"}>
        <button onClick={() => onPageClicked(currentPage + 1)} class="page-link" href="#">
          <i class="fa fa-angle-right"></i>
          <span class="sr-only">Next</span>
        </button>
      </li>
      <li class={currentPage === numberOfPage ? "page-item disabled": "page-item"}>

        <button onClick={() => onPageClicked(numberOfPage)}  class="page-link" tabindex="-1">
          <i class="fa fa-angle-double-right"></i>
          <span class="sr-only">Previous</span>
        </button>
      </li>

    </ul>
  );
};

export default Pagination;
