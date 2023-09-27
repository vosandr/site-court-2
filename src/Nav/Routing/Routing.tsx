import Router from "preact-router"

import Proc from 'components/Jud/Proc/Proc';
import Acts from 'components/Jud/Acts/Acts';
import Jud_Appeals from 'components/Jud/Jud_Appeals/Jud_Appeals';
import Terr from 'components/Jud/Terr/Terr';

import Home from "components/Home/Home"
import Appeals from "components/Appeals/Appeals"
import Calculator from "components/Calculator/Calculator"
import Requests from "components/Requests/Requests"

export default function () {
  return (
    <Router>
      <Proc path="/Jud_Proc">Судебное делопроизводство</Proc>
      <Acts path="/Jud_Acts">Судебные акты</Acts>
      <Jud_Appeals path="/Jud_Appeals">Обращения граждан</Jud_Appeals>
      <Terr path="/Jud_Terr">Территориальная подсудность</Terr>
      
      <Home path="/"></Home>
      <Appeals path="/Appeals"></Appeals>
      <Calculator path="/Calculator"></Calculator>
      <Requests path="/Requests"></Requests>
    </Router>
  )
}