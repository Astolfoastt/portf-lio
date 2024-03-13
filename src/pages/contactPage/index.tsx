import { ContactComponent } from "../../components/contactComponent"
import style from "./style.module.scss";

export const ContactPage = () => {

    return (
            <main className={style.container}>
                <ContactComponent />
            </main>
        )
}