import s from "./contactsList.module.css";

export default function ContactsList({ contacts, removeContacs }) {
  return (
    <div>
      <h2>Contacts:</h2>
      <ul>
        {contacts.map((el, inx) => {
          const number = inx + 1;
          return (
            <li key={el.id} className={s.item}>
              <span className={s.number}>{number}</span>
              <span>
                <b className={s.text}>name:</b> {el.name}{" "}
              </span>
              <span>
                <b className={s.text}>tel:</b>
                {el.number}
              </span>
              <button
                className={s.button}
                type="button"
                onClick={() => {
                  removeContacs(el.id);
                }}
              >
                <span className={s.unicode}></span>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
