import React from 'react'
import {Link,Outlet} from 'react-router-dom'
export  function Dashboard() {
  return (
    <>
<div>
<Link to="/kunddli">kunddliForm</Link> <br/>
<Link to="/kunddlilist">kunddliList</Link>
</div>
<div>
    <Outlet/>
</div>
    </>
  )
}
