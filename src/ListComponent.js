import React from "react";
import Listitem from "./Listitem"
import Img from "./image/avatar.jpg"
function ListComponent() {
    return (
    <div className="ListComponent">
<Listitem/>

<img src={Img}></img>

    </div>
    )
}

export default ListComponent;