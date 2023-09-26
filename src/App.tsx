import { Suspense } from 'preact/compat'
import UserCount from 'components/UserCount'

import Header from 'components/Header/Header'
import Home from 'components/Home/Home'
import Appeals from 'components/Appeals/Appeals'
import Calculator from 'components/Calculator/Calculator'
import Requests from 'components/Requests/Requests'
import { Route } from 'preact-router'

export default function () {
  return (
    <div className="container mx-auto max-w-prose p-10 prose">
      <Header />
      <div>
      <Route path='/' component={Home} />
      <Route path='/appeals' component={Appeals} />
      <Route path='/calculator' component={Calculator} />
      <Route path='/requests' component={Appeals} />
    </div>
      <Suspense fallback={<p>Loading...</p>}>
        <UserCount />
      </Suspense>
    </div>
  )
}
