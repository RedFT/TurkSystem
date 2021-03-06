import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SystemDemandList } from 'components';
import { fetchSDList } from '../../actions/SystemDemand/actions';

class SystemDemands extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    if(!this.props.systemdemands.isLoaded){
      this.props.actions.fetchSDList();
    }
  }

  render() {
    return (
      <div className="systemdemands container">
        <h1 className="text-center">
          <u>System Demands</u>
        </h1>
        {this.props.systemdemands.isLoaded &&
          <SystemDemandList systemdemands={this.props.systemdemands} user={this.props.auth}/>
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ fetchSDList }, dispatch)
});

const mapStateToProps = (state) => ({
  auth: state.auth,
  systemdemands: state.systemdemands
});

export default connect(mapStateToProps, mapDispatchToProps)(SystemDemands);
