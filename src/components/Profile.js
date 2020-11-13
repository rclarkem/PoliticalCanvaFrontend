import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import { Button } from 'react-bootstrap';

export default class Profile extends Component {
  state = {
    candidateID: '',
  };

  handleOnChange = (e) => {
    this.setState({
      candidateID: e.target.value,
    });
  };

  submitCandidate = (e) => {
    e.preventDefault();
    if (!this.props.userInfo.admin) {
      fetch(`http://localhost:3000/users/${this.props.userInfo.id}/edit`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: this.props.token,
        },
        body: JSON.stringify({
          candidate_id: this.state.candidateID,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          this.setState({
            disabled: true,
          });
          this.props.updateUserCandidate();
          this.props.history.push('/');
        });
    } else {
      fetch(`http://localhost:3000/users/admin/${this.props.userInfo.id}/edit`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: this.props.token,
        },
        body: JSON.stringify({
          candidate_id: this.state.candidateID,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          this.setState({
            disabled: true,
          });
          this.props.updateUserCandidate();
          this.props.history.push('/');
        });
    }
  };

  disableInput = () => {
    if (this.props.userInfo.candidate_id) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    const { candidateID, disabled } = this.state;
    const { userInfo } = this.props;
    const candidateTrue = this.props.userInfo.candidate_id !== null;
    return (
      <Item.Group>
        <Item>
          <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />

          <Item.Content>
            <Item.Header as='a'>{`${userInfo.first_name} ${userInfo.last_name}`}</Item.Header>
            <Item.Description>
              <form onSubmit={this.submitCandidate}>
                {candidateTrue
                  ? `${userInfo['candidate?'].first_name} ${userInfo['candidate?'].last_name}`
                  : null}
                <br></br>
                <input
                  placeholder='enter candidate code'
                  name={candidateID}
                  onChange={this.handleOnChange}
                  value={candidateID}
                  type='text'
                  disabled={this.disableInput()}></input>
                <p>Email: {userInfo.email}</p>
                <p>Username: {userInfo.username}</p>
                <Button type='submit'>Submit</Button>
              </form>
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }
}
