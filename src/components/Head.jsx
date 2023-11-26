import React from "react";

const Head = (props) => {
  React.useEffect(() => {
    document.title = "South Journey | " + props.title;
    document.querySelector("meta[name='description']").setAttribute("content", props.description);
    console.log(props);
  }, [props])
};

export default Head;
