import React, {  } from "react";
import logo from "../../imgs/logo.png";
import { CHANGE_SEARCH_TITLE  } from '../../constants/actionTypes'
import { connect } from "react-redux";
import agentObj from "../../agent";
const Banner = (props) => {
  const queryTitle = props.title;
  const handleQueryChange = (value) => {

    if (value?.length >= 3) {
      props.onSearchResult(value)
    } else if (value?.length === 0) {
      props.onSearchResult("")
    }
    props.onSearchTitle(value)
  }
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get</span>
          <input id="search-box" value={queryTitle} onChange={e => {
            handleQueryChange(e.target.value)
          }} />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => { 
  return state
}

const mapDispatchToProps = (dispatch) => { 
  return {
    onSearchTitle: (title) => dispatch({ type: CHANGE_SEARCH_TITLE, title }),
    onSearchResult: (title) => dispatch({ type: CHANGE_SEARCH_TITLE, payload: agentObj.Items.byTitle(title), title })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Banner);
