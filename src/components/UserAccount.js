import React from "react";
import "../css/reg.css";
import "../css/userAccount.css";
import DogProfile from "./DogProfile";
import BasePath from "../api/BasePath";
import { Link } from "react-router-dom";
import Popup from "./PopUp";

class UserAccount extends React.Component {
  state = {
    userList: [],
    dogList: [],
    user: {},
    address: {},
    message: "",
    cn: "",
    bgColor: "blue",
  };

  UNSAFE_componentWillMount() {
    var token = localStorage.getItem("token");
    BasePath.get(`/webresources/RetrieveUser/${token}`)
      .then((result) => {
        this.setState({ user: result.data });
        this.setState({ address: this.state.user.address });
      })
      .catch((err) => {
        console.log(err);
      });
    var token = localStorage.getItem("token");
    BasePath.get(`/webresources/RetrieveDogs/${token}`)
      .then((result) => {
        this.setState({ dogList: result.data });
      })
      .catch((err) => {
        console.log(err);
      });

    if (
      typeof this.props.location.state == "undefined" ||
      this.props.location.state === null
    ) {
      this.setState({ message: "" });
    } else {
      this.setState({ message: this.props.location.state.message });
      this.setState({ cn: "popup3" });
      this.togglePopup();
    }
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  updateList = () => {
    var token = localStorage.getItem("token");
    BasePath.get(`/webresources/RetrieveDogs/${token}`).then((result) => {
      this.setState({ dogList: result.data });
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-sm-5">
          <div
            className="ui segment p-3 mb-2 "
            style={{ backgroundColor: "#ECEBE7" }}
          >
            <div>
              <h1>{this.state.user.username}</h1>
            </div>
            <br />
            <div className="left">
              <div className="row">
                <div className="col-sm">
                  <b>Username: </b>
                </div>
                <div className="col-sm">{this.state.user.username}</div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <b>Email: </b>
                </div>
                <div className="col-sm">{this.state.user.email}</div>
              </div>
              <br />
              <div className="row">
                <div className="col-sm">
                  <b>First Name: </b>
                </div>
                <div className="col-sm">{this.state.user.firstName}</div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <b>Last Name: </b>
                </div>
                <div className="col-sm">{this.state.user.lastName}</div>
              </div>

              <div className="row">
                <div className="col-sm">
                  <b>Address: </b>
                </div>
                <div className="col-sm">
                  {this.state.address.appt} {this.state.address.building}{" "}
                  {this.state.address.street} {this.state.address.city}{" "}
                  {this.state.address.province} {this.state.address.post}
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <b>Phone: </b>
                </div>
                <div className="col-sm">{this.state.user.phoneNumber}</div>
              </div>
              <br />
              <br />
              <div className="row">
                <div className="col-sm">
                  <b>Emergency name: </b>
                </div>
                <div className="col-sm">{this.state.user.emergencyName}</div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <b>Emergency phone #: </b>
                </div>
                <div className="col-sm">{this.state.user.emergencyPhone}</div>
              </div>
            </div>
            <br />
            <br />
            <Link
              to="EditCustomer"
              type="button"
              className="btn "
              style={{
                fontWeight: "bold",
                backgroundColor: "#1D3461",
                color: "#ECEBE7",
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                width: "50%",
              }}
            >
              Edit customer information
            </Link>
            <br />
            <br />
            <Link
              to="ChangePass"
              type="button"
              className="btn "
              style={{
                fontWeight: "bold",
                backgroundColor: "#1D3461",
                color: "#ECEBE7",
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                width: "50%",
              }}
            >
              Change password
            </Link>
          </div>
        </div>
        <div className="col-sm-7">
          <div
            className="ui segment p-3 mb-2 "
            style={{ backgroundColor: "#ECEBE7" }}
          >
            <div className="row">
              <div className="col-sm">
                <div className="left">
                  <h1>Your dogs: </h1>
                </div>
              </div>
              <div className="col-sm">
                <div className="left">
                  <Link
                    to="AddDog"
                    type="button"
                    className="btn mb-3"
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#1D3461",
                      color: "#ECEBE7",
                      boxShadow:
                        "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                    }}
                  >
                    Add new dog
                  </Link>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div>
              {this.state.dogList.map((dog) => (
                <DogProfile
                  key={dog.idNumber}
                  chosenDog={dog}
                  allergies={dog.allergies}
                  updateList={this.updateList}
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          {this.state.showPopup ? (
            <Popup
              cn={this.state.cn}
              text={this.state.message}
              closePopup={this.togglePopup.bind(this)}
              bgColor={this.state.bgColor}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default UserAccount;
