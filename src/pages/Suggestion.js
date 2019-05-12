import React, { Component } from 'react';

export default class Suggestion extends Component {
  render() {
    return (
      <div className="contact-us">
        <form className="contact-form">
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Email
            </label>
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                id="inputEmail3"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Phone
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputPassword3"
                placeholder="Phone"
              />
            </div>
          </div>
          <fieldset class="form-group">
            <div class="row">
              <legend class="col-form-label col-sm-2 pt-0">Prefer</legend>
              <div class="col-sm-10">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="option1"
                    checked
                  />
                  <label class="form-check-label" for="gridRadios1">
                    Email{' '}
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="option2"
                  />
                  <label class="form-check-label" for="gridRadios2">
                    Phone
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              How would you like to help ?
            </label>
            <div class="col-sm-10">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-6 col-form-label" />
            <div class="col-sm-6">
              <input
                type="button"
                value="Submit"
                onClick={() => this.props.history.push('/')}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
