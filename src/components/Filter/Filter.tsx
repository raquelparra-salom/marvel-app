import { IFilterProp } from './interfaces';
import './styled.scss';

export const Filter = ({ value, count, handleChange }: IFilterProp) => {
  return (
    <div className="filter-wrapper">
      <input
        type="text"
        placeholder="Search a Character..."
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        minLength={3}
      />
      <div className="counter">{count} Results</div>
    </div>
  );
};

export default Filter;
