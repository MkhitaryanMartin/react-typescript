import Card from '../../components/card';
import {ICharacterData, IFilms } from '../../type';

type Props = {
    data: ICharacterData,
    film: IFilms | undefined
}

const Cards = ({
    data,
    film
}: Props) => {
    return (
        <div className='cards__container'>
            {
              data.results && data.results.map((item) => {
                return <Card item={item} key={item.id} />
              })
            }
          </div>
    );
};

export default Cards;