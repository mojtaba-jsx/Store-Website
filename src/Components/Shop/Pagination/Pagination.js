import React from "react";
import "./Pagination.css";
function Pagination() {
  return (
    <div className="pagination">
      <div className="container">
        <div className="pagination__wrapper">
          <ul className="pagination__list">
            <li className="pagination__list__item pagination__list__item--active">1</li>
            <li className="pagination__list__item">2</li>
            <li className="pagination__list__item">3</li>
            <li className="pagination__list__item">4</li>
            <li className="pagination__list__item">Next</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
