import img1 from "../img/films/1.jpeg"
import img2 from "../img/films/2.jpg"
import img3 from "../img/films/3.jpg"
import img4 from "../img/films/4.jpg"
import img5 from "../img/films/5.jpg"
import img6 from "../img/films/6.jpg"

interface IObjectKeys {
    [key: string]: string ;
  }

interface Films extends IObjectKeys {
    ANewHope: string,
    TheEmpireStrikesBack: string,
    ReturnoftheJedi: string,
    ThePhantomMenace: string,
    AttackoftheClones: string,
    RevengeoftheSith: string
}

export interface BackgroundImg {
   films: Films;
}


export const backgroundImg : BackgroundImg = {
    films: {
        ANewHope: img1,
    TheEmpireStrikesBack: img2,
    ReturnoftheJedi: img3,
    ThePhantomMenace: img4,
    AttackoftheClones: img5,
    RevengeoftheSith: img6
    }
}