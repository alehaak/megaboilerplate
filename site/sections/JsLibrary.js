import React from 'react';
import cx from 'classnames';
import { VelocityComponent, VelocityTransitionGroup } from 'velocity-react';


const JS_LIBRARY_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 50 50">
    <path d="M 29.125 7.34375 L 17.125 41.34375 L 20.875 42.65625 L 32.875 8.65625 L 29.125 7.34375 z M 9.9375 13.375 L 1.25 23.71875 L 0.1875 25 L 1.25 26.28125 L 9.9375 36.65625 L 13.03125 34.09375 L 5.40625 25 L 13 15.9375 L 9.9375 13.375 z M 40.0625 13.375 L 37 15.9375 L 44.59375 25 L 37 34.0625 L 40.09375 36.625 L 48.71875 26.28125 L 49.78125 25 L 48.71875 23.71875 L 40.0625 13.375 z" overflow="visible"></path>
  </svg>
);

class JsLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const props = this.props;

    let description;

    switch (props.framework) {
      case 'express':
        description = (
          <div>
            <strong><a href="http://expressjs.com/" target="_blank">Express</a></strong> — A minimal and flexible web
            application framework, providing a robust set of features for building web applications. It is the de facto
            standard framework for Node.js.
          </div>
        );
        break;
      case 'meteor':
        description = (
          <div>
            <strong><a href="https://www.meteor.com/" target="_blank">Meteor</a></strong> — A complete platform for
            building web and mobile apps in pure JavaScript.
          </div>
        );
        break;
      default:
        description = <div className="placeholder"></div>;
    }

    return (
      <div className='zoomInBackwards panel authentication'>
        <div className="panel-heading">
          <h6>{JS_LIBRARY_SVG}{props.library || 'JS Library Options'}</h6>
          <a href="#" className="stats-icon hint--top hinHomet--rounded" data-hint="Download Stats">
            <i className="fa fa-bar-chart"/>
          </a>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-sm-4">
              <label htmlFor="jsLibraryName" className="">Library Name</label>
              <input type="text" id="jsLibraryName" name="jsLibraryName" className="form-control" autoFocus
                     value={props.jsLibraryName} onChange={props.handleChange}/>
            </div>
            <div className="col-sm-4">

              <label htmlFor="jsLibraryAuthor" className="">Author Name</label>&nbsp;
              <span className="help hint--top hint--rounded" data-hint="Your full name is used in the license file." ><i className="fa fa-question-circle"></i></span>
              <input type="text" id="jsLibraryAuthor" name="jsLibraryAuthor" className="form-control" autoFocus
                     value={props.jsLibraryAuthor} onChange={props.handleChange}/>
            </div>
            <div className="col-sm-4">
              <label htmlFor="jsLibraryGithubUsername" className="">GitHub Username</label>&nbsp;
              <span className="help hint--top hint--rounded" data-hint="Your username is used for the GitHub project path." ><i className="fa fa-question-circle"></i></span>
              <input type="text" id="jsLibraryGithubUsername" name="jsLibraryGithubUsername" className="form-control" autoFocus
                     value={props.jsLibraryGithubUsername} onChange={props.handleChange}/>
            </div>
          </div>
          <br/>

          <strong>Additional Features</strong>

          <div className="checkbox">
            <label>
              <input type="checkbox" name="jsLibraryOptionsCheckboxes" value="babel" onChange={props.handleChange}/>
              <span>Babel</span>
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" name="jsLibraryOptionsCheckboxes" value="eslint" onChange={props.handleChange}/>
              <span>ESLint</span>
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" name="jsLibraryOptionsCheckboxes" value="coverage" onChange={props.handleChange}/>
              <span>Code Coverage</span>
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" name="jsLibraryOptionsCheckboxes" value="badges" onChange={props.handleChange}/>
              <span>Shields.io Badges</span>
            </label>
          </div>

          <strong>License</strong>
          <div className="radio-group">
            <label className="radio-inline">
              <input type="radio" name="jsLibraryLicenseRadios" value="none" onChange={props.handleChange} checked={props.jsLibraryLicense === 'none'}/>
              <span>None</span>
            </label>
            <label className="radio-inline">
              <input type="radio" name="jsLibraryLicenseRadios" value="mit" onChange={props.handleChange} checked={props.jsLibraryLicense === 'mit'}/>
              <span>MIT</span>
            </label>
            <label className="radio-inline">
              <input type="radio" name="jsLibraryLicenseRadios" value="apache" onChange={props.handleChange} checked={props.jsLibraryLicense === 'apache'}/>
              <span>Apache License 2.0</span>
            </label>
            <label className="radio-inline">
              <input type="radio" name="jsLibraryLicenseRadios" value="gplv3" onChange={props.handleChange} checked={props.jsLibraryLicense === 'gplv3'}/>
              <span>GNU GPLv3</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default JsLibrary;
