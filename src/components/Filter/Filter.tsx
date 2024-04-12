import { IFilterProp } from './interfaces';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styled.scss';

export const Filter = ({ value, count, handleChange }: IFilterProp) => {
  return (
    <div className="filter-wrapper">
      <div className="searcher">
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          placeholder="Search a Character..."
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div className="counter">{count} Results</div>
    </div>
  );
};

export default Filter;
