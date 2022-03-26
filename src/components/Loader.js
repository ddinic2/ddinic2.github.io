import React from "react";

let Loader = ({type}) => {
    return(
        <div className={type === 'row'? 'snippetRow':'snippet'}>
          <div className="stage">
            <div className="dot-pulse"></div>
          </div>
        </div>
    )
}

export default Loader;