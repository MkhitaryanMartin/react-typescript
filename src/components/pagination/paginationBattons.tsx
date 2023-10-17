import { uniqueId } from "lodash";
import "./style.scss"

type Props = {
    page: number,
    handlePage: (el: number)=>void,
    pages: number[]
}

const PaginationBattons = ({
    pages,
    handlePage,
    page
}: Props) => {
    return (
        <ul className='pages'>
        {
          pages.map((el) => {
            return <li
            key={uniqueId()}
              onClick={()=>handlePage(el)}
              className={page === el ? "current-page" : "page"}
            >
              {el}
            </li>
          })
        }
      </ul>
    );
};

export default PaginationBattons;