import { useState } from 'react';
import { ReactComponent as Arrow } from '../assets/arrow-dropdown.svg';

function DropDown({ title, content }) {
  const [active, setActive] = useState(false);
  const isArray = Array.isArray(content);
  return (
    <div className="dropdown-container">
      <div className="dropdown-title" onClick={() => setActive((prev) => !prev)}>
        {title}{' '}
        <button className="btn-arrow">
          <Arrow className={active ? 'arrow arrow-up' : 'arrow arrow-down'} />
        </button>
      </div>
      <div className={`dropdown-content ${active ? 'active' : ''}`}>
        {isArray ? (
          <ul>
            {content.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}

export default DropDown;
