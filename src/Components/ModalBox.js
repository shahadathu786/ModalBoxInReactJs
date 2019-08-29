import React, { Component } from "react";
import Modal from "react-awesome-modal";

export default class modalBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  openModal() {
    this.setState({
      visible: true
    });
  }
  closeModal() {
    this.setState({
      visible: false
    });
  }

  render() {
    return (
      <section>
        <h1>React Modal Example</h1>
        <input type="button" value="Open" onClick={() => this.openModal()} />

        <Modal
          visible={this.state.visible}
          width="400"
          height="300"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <div>
            <h1>Title</h1>
            <p>Some Contant</p>
            <a href="javascript:void(0);" onClick={() => this.closeModal()}>
              Close
            </a>
          </div>
        </Modal>
      </section>
    );
  }
}
