import React, { Component } from 'react';
import { Button, Icon, Transition } from 'semantic-ui-react';
import marked from 'marked';
import {
  NoteWrapper,
  NoteTextArea,
  ButtonWrapper,
  NoteViewerWrapper,
  NoteViewer,
  IconWrapper
} from '../Styled';

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.static ? this.props.static : this.props.noteRegister,
      status: 'viewing'/*this.props.static ? 'viewing' : 'typing'*/,
      visible: true
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.toggleVisibility(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  handleChange = event => {
    this.setState({ value: event.target.value, status: 'typing' });
    if (!this.props.static) this.props.noteRegist(event.target.value);
  };

  handleSubmit = event => {
    clearInterval(this.timerID);

    this.setState(prevState => ({
      status: prevState.status === 'typing' ? 'viewing' : 'typing'
    }));
    event.preventDefault();
  };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  renderButton = () => {
    if (this.props.static) {
      return (
        <IconWrapper>
          {/*<Transition
            animation="tada"
            duration={500}
            visible={this.state.visible}>
            <Icon size="huge" name="arrow right" />
          </Transition>
          <Button circular icon="exchange" size="huge" />*/}
        </IconWrapper>
      );
    }
    return <Button circular floated="right" icon="exchange" size="huge" />;
  };

  render() {
    const markedValue = marked(this.state.value);
    return (
      <NoteWrapper>
        <form onSubmit={this.handleSubmit}>
          {this.state.status === 'viewing' ? (
            <NoteViewerWrapper>
              <NoteViewer dangerouslySetInnerHTML={{ __html: markedValue }} />
            </NoteViewerWrapper>
          ) : (
            <NoteTextArea
              value={this.state.value}
              onChange={this.handleChange}
              autoFocus={true}
              placeholder="Please write simply."
            />
          )}
          <ButtonWrapper>{this.renderButton()}</ButtonWrapper>
        </form>
      </NoteWrapper>
    );
  }
}

export default Note;
