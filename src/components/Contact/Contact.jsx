import { BsFillTelephoneFill } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import css from "./Contact.module.css";
export default function Contact({ item: { name, number } }) {
  return (
    <div className={css.conteinerContact}>
      <div>
        <p>
          <RiAdminFill size="15" />
          {name}
        </p>
        <p>
          <BsFillTelephoneFill size="12" />
          {number}
        </p>
      </div>

      <button>Delite</button>
    </div>
  );
}
