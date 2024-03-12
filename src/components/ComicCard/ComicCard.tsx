import { ICardProp } from './interfaces';
import './styled.scss';

export const ComicCard = ({ thumbnail, date, name }: ICardProp) => {
  return (
    <div className="comic-card">
      <img src={`${thumbnail.path}.${thumbnail.extension}`} />
      <div className="title">{name}</div>
      <div className="date">{date}</div>
    </div>
  );
};

export default ComicCard;
