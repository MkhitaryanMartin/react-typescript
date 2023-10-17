import React, { useState, useEffect } from 'react';
import "./style.scss";
import Modal from '../modal';
import axios from 'axios';
import { IWorld, Props } from './types';

const Card = ({ item }: Props) => {
    const [open, setOpen] = useState(false)
    const [worldInfo, setWorldInfo] = useState<IWorld>()
    const [backgroundColor, setBackgroundColor] = useState("")
    const [error, setError] = useState<string>("")
    const date = item.created ? new Date(item.created) : null;
    const [spinner, setSpinner]= useState(true)


    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(true)
    }
    useEffect(() => {
        if(open){
            axios.get(item.homeworld)
            .then((res) => setWorldInfo(res.data))
            .catch((error) => setError("Error 404"))
            .finally(()=> setSpinner(false))
        }

        if (item.species.length) {
            axios.get(item.species[0])
                .then((res) => {
                    setBackgroundColor(res.data.skin_colors === "n/a" ? "rgba(241, 240, 255, 1)" : res.data.skin_colors.split(",")[0])
                })
                .catch((error) => setBackgroundColor(""))
        }
    }, [open])

    return (
        <article
            className='card__container'
            style={{ borderColor: backgroundColor }}
            onClick={handleOpen}
        >
            <h2>{item.name}</h2>
            <div>
                <img src={require(`../../assets/img/characters/${item.id}.jpg`)} alt='img' />
            </div>
            {
                open ?  <Modal isVisible={open} title={item.name} content="asd" onClose={handleClose} >
                {
                    spinner ? <div className='loading'>...loading</div>: <div className='modal__block'>
                    <img className='img' src={require(`../../assets/img/characters/${item.id}.jpg`)} alt="img" />
                    <div>
                        {
                            error ? <span className='card-error'>{error}</span> : <>
                                <p>
                                    Height: {item.height}m <br />
                                    Mass: {item.mass} <br />
                                    Created: {date ? `${date?.getDay().toString().padStart(2, "0")}-${date?.getMonth().toString().padStart(2, "0")}-${date?.getFullYear()}` : "no date"} <br />
                                    Films: {item.films.length} <br />
                                    Year of birth: {item.birth_year} <br />
                                    World- 
                                    Name: {worldInfo?.name}<br /> 
                                    Climate: {worldInfo?.climate} <br />
                                    Residents: {worldInfo?.residents?.length}
                                </p>

                            </>
                        }
                    </div>
                </div>
                }
            </Modal> : null
            }
        </article>
    );
};

export default Card;