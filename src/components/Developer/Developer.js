import React, { Component } from 'react';
import { RenderInput, RenderPasswordInput, RenderSubmitButton } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { Link } from 'react-router';

export default class Developer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {id, name, bio, lastname, rating} = this.props
    return (
      <div className="developer col-sm-12 col-md-12 col-lg-12">
        <div className="panel panel-default">

          <div className="panel-heading">
            <Link to={`developers/profile/${id}`}>
              <h4 className="panel-title text-center">{name} {lastname}</h4>
            </Link>
          </div>

          <div className="panel-body">
            <span>{bio}</span>
          </div>

          <ul className="list-group">
            <li className="list-group-item"><strong>Rating:</strong> {rating}</li>
          </ul>

        </div>
      </div>
    );
  }
}
