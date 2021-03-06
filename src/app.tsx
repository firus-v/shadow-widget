import React, {Component} from 'react';
import './index.scss';
import {connect} from 'react-redux';
import {AppState} from './store/reducers/appReducer';

interface Props {
  appState: AppState,
}


class App extends Component<Props> {
  render() {
    return (
      <div>

        <button>Fetch data</button>

        <div className="block">
          React App
        </div>

      </div>
    );
  }
}


const mapState = (state: any) => ({
  appState: state.appReducer,
});

const mapDispatch = () => ({});

export default connect(mapState, mapDispatch)
(App);
