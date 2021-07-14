import MoviesCard from '../MoviesCard/MoviesCard.js';
import words from '../../images/words.jpg';
import years from '../../images/years.jpg'
import banksy from '../../images/banksy.jpg'
import baskia from '../../images/baskia.jpg'
import running from '../../images/running.jpg'
import booksellers from '../../images/booksellers.jpg'
import germany from '../../images/germany.jpg'
import gimme from '../../images/gimme.jpg'
import jenis from '../../images/jenis.jpg'
import jump from '../../images/jump.jpg'
import harvy from '../../images/harvy.jpg'
import waves from '../../images/waves.jpg'

function MoviesCardList() {
    return (
        <section className="movies__section">
            <ul className="movies__grid">
                <MoviesCard name="33 слова о дизайне" time="1ч 47м" pic={words} />
                <MoviesCard name="Киноальманах «100 лет дизайна»" time="1ч 3м" pic={years} />
                <MoviesCard name="В погоне за Бенкси" time="1ч 42м" pic={banksy} />
                <MoviesCard name="Баския: Взрыв реальности" time="1ч 21м" pic={baskia} />
                <MoviesCard name="Бег это свобода" time="1ч 47м" pic={running} />
                <MoviesCard name="Книготорговцы" time="1ч 47м" pic={booksellers} />
                <MoviesCard name="Когда я думаю о Германии ночью" time="1ч 47м" pic={germany} saved={true} />
                <MoviesCard name="Gimme Danger: История Игги и The Stooges" time="1ч 47м" pic={gimme} saved={true} />
                <MoviesCard name="Дженис: Маленькая девочка грустит" time="1ч 47м" pic={jenis} saved={true} />
                <MoviesCard name="Соберись перед прыжком" time="1ч 47м" pic={jump} saved={true} />
                <MoviesCard name="Пи Джей Харви: A dog called money" time="1ч 47м" pic={harvy} saved={true} />
                <MoviesCard name="По волнам: Искусство звука в кино" time="1ч 47м" pic={waves} saved={true} />
            </ul>
            <button type="button" className="movies__more-btn">Ещё</button>
        </section>


    )
}

export default MoviesCardList;