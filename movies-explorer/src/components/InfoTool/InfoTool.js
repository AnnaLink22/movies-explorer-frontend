import tick from '../../images/tick.svg';
import redCross from '../../images/red_cross.svg';

function InfoTool({ isSuccesful, onClose, isOpen }) {

  const className = `info-tool ${isOpen ? 'info-tool_opened' : ''}`;

  return (
    <div className={className}>
      <div className="info-tool__container">
        <button type="button" className="info-tool__close-btn" onClick={onClose}></button>
        <img src={isSuccesful ? tick : redCross} alt="Картинка" className="info-tool__img" />
        <h3 className="info-tool__heading">{isSuccesful ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</h3>
      </div>
    </div>
  );
}

export default InfoTool;