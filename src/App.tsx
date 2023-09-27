import Router from "preact-router"

import Nav from "Nav/Nav"
import Home from "components/Home/Home"
import Appeals from "components/Appeals/Appeals"
import Calculator from "components/Calculator/Calculator"
import Requests from "components/Requests/Requests"
import Name from "components/Name/Name"

export default function () {
  return (
    <>
      <Name></Name>
      <Nav />
    </>
  )
}

