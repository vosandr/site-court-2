import Router, { Link, Route } from 'preact-router';
import "./Navigation.css"
export default function () {
  return (
    <>
      <nav>
        <Link className="Link Jud_Proc" href="Jud_Proc">Судебное делопроизводство</Link>
        <Link className="Link Jud_Acts" href="Jud_Acts">Судебные акты</Link>
        <Link className="Link Jud_Appeals" href="Jud_Appeals">Обращения граждан</Link>
        <Link className="Link Jud_Terr" href="Jud_Terr">Территориальная подсудность</Link>
        </nav>
        <nav>
        <Link className="Link Home" href="/">Главная</Link>
        <Link className="Link Appeals" href="/Appeals">Внепроцессуальные обращения</Link>
        <Link className="Link Calculator" href="/Calculator">Калькулятор госпошлины</Link>
        <Link className="Link Requests" href="/Requests">Карта сайта</Link>
      </nav>
    </>
  )
}