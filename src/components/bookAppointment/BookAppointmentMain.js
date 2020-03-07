import React from "react";

import BasePath from "../../api/BasePath";
import BookAppointment1 from "./BookAppointment1";
import BookAppointment2 from "./BookAppointment2";
import { Redirect } from "react-router-dom";
import Popup from "../PopUp";

class BookAppointmentMain extends React.Component {
  state = {
    response: "",
    fieldName: [],
    page: "",
    showPopup: false,
    cn: "",

    dog: "",
    dogs: [],
    initialStates: false
  };

  getDogs = async () => {
    var token = localStorage.getItem("token");
    const response = await BasePath.get(`/webresources/RetrieveDogs/${token}`);
    //console.log(response.data[0].name);

    const dogs = response.data;
    var dogArray = [];
    dogs.map(doggy => dogArray.push(doggy.name));

    if (!this.state.initialStates) {
      this.setState({ dogs: dogArray, initialStates: true, dog: dogArray[0] });
    }

    //console.log(this.state.dogs);
  };

  onSearchSubmit1 = async () => {
    this.setState({
      fieldName: [
        this.state.dog,
        this.state.startTime,
        this.state.endTime,
        this.state.sessionId
      ]
    });

    var token = localStorage.getItem("token");

    var dog = this.state.dog;
    var startTime = this.state.startTime;
    var endTime = this.state.endTime;
    var grooming = false;
    if (this.state.grooming === "Yes") {
      grooming = true;
    }
    var comments = this.state.comments;

    console.log(this.state.dog);

    const response = await BasePath.put("/webresources/bookboarding", {
      token,
      dog,
      startTime,
      endTime,
      grooming,
      comments
    });

    //console.log(response.data);

    this.setState({ response: response.data });

    if (this.state.response === "Old startTime is incorrect") {
      this.setState({ cn: "popup4" });
      this.togglePopup();
    } else if (this.state.response === "New startTimes do not match") {
      this.setState({ cn: "popup5" });
      this.togglePopup();
    }
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  handleChangeDog = event => {
    this.setState({ dog: event.target.value });
  };

  handleChangeStartTime = event => {
    this.setState({ startTime: event.target.value });
  };

  handleChangeEndTime = event => {
    this.setState({ endTime: event.target.value });
  };

  handleChangeGrooming = event => {
    this.setState({ grooming: event.target.value });
  };

  handleChangeComments = event => {
    this.setState({ comments: event.target.value });
  };

  render() {
    this.getDogs();

    var isValid = this.state.response;

    if (isValid === "Valid") {
      return (
        <div style={{ marginTop: "10px" }}>
          <BookAppointment2
            dog={this.state.dog}
            startTime={this.state.startTime}
            endTime={this.state.endTime}
            grooming={this.state.grooming}
            comments={this.state.comments}
          />
        </div>
      );
    } else if (isValid === "Pay Later") {
      return (
        <div style={{ marginTop: "10px" }}>
          <Redirect
            to={{
              pathname: "/",
              state: { message: "Appointment is now waiting for approval" }
            }}
          />
        </div>
      );
    } else {
      return (
        <div style={{ marginTop: "10px" }}>
          <BookAppointment1
            onChangeDog={this.handleChangeDog}
            onChangeStartTime={this.handleChangeStartTime}
            onChangeEndTime={this.handleChangeEndTime}
            onChangeGrooming={this.handleChangeGrooming}
            onChangeComments={this.handleChangeComments}
            onSubmit={this.onSearchSubmit1}
            dogs={this.state.dogs}
          />
          <div>
            {this.state.showPopup ? (
              <Popup
                cn={this.state.cn}
                text={this.state.response}
                closePopup={this.togglePopup.bind(this)}
                bgColor="red"
              />
            ) : null}
          </div>
        </div>
      );
    }
  }
}

export default BookAppointmentMain;
