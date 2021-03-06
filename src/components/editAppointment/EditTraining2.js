import React from "react";
import "../../css/bookAppointment.css";
import { Link } from "react-router-dom";

class EditTraining2 extends React.Component {
  state = {
    dog: "",
    startTime: "",
    endTime: new Date(),

    dogs: [],
    comments: "",
    selectedDogs: [],
    selectedOption: null,
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(
      this.state.dog,
      this.state.startTime,
      this.state.endTime,
      this.state.grooming,
      this.state.comments
    );
  };

  render() {
    return (
      <div
        className="ui segment contBookTraining"
        style={{ backgroundColor: "#ECEBE7" }}
      >
        <form
          onSubmit={this.onFormSubmit}
          className="ui form"
          style={{ backgroundColor: "#ECEBE7 " }}
        >
          <div className="container bookAppointmentContainer">
            <h1>Edit Training: Step 2</h1>
            <br />

            <label>
              Please select training items to focus on from the following list:
            </label>

            <div className="row">
              <div className="col-sm">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>Barking:</td>
                      <td>
                        <input
                          type="radio"
                          name="barking"
                          value="Yes"
                          checked={this.props.barking === "Yes"}
                          onChange={this.props.onChangeBarking}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="barking"
                          value="No"
                          checked={this.props.barking === "No"}
                          onChange={this.props.onChangeBarking}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Chewing Destruction:</td>
                      <td>
                        <input
                          type="radio"
                          name="destruction"
                          value="Yes"
                          checked={this.props.destruction === "Yes"}
                          onChange={this.props.onChangeDestruction}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="destruction"
                          value="No"
                          checked={this.props.destruction === "No"}
                          onChange={this.props.onChangeDestruction}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Counter Surfing:</td>
                      <td>
                        <input
                          type="radio"
                          name="surfing"
                          value="Yes"
                          checked={this.props.surfing === "Yes"}
                          onChange={this.props.onChangeSurfing}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="surfing"
                          value="No"
                          checked={this.props.surfing === "No"}
                          onChange={this.props.onChangeSurfing}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Digging:</td>
                      <td>
                        <input
                          type="radio"
                          name="digging"
                          value="Yes"
                          checked={this.props.digging === "Yes"}
                          onChange={this.props.onChangeDigging}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="digging"
                          value="No"
                          checked={this.props.digging === "No"}
                          onChange={this.props.onChangeDigging}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Jumping:</td>
                      <td>
                        <input
                          type="radio"
                          name="jumping"
                          value="Yes"
                          checked={this.props.jumping === "Yes"}
                          onChange={this.props.onChangeJumping}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="jumping"
                          value="No"
                          checked={this.props.jumping === "No"}
                          onChange={this.props.onChangeJumping}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Pulling on Leash:</td>
                      <td>
                        <input
                          type="radio"
                          name="pulling"
                          value="Yes"
                          checked={this.props.pulling === "Yes"}
                          onChange={this.props.onChangePulling}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="pulling"
                          value="No"
                          checked={this.props.pulling === "No"}
                          onChange={this.props.onChangePulling}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Building Confidence:</td>
                      <td>
                        <input
                          type="radio"
                          name="confidence"
                          value="Yes"
                          checked={this.props.confidence === "Yes"}
                          onChange={this.props.onChangeConfidence}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="confidence"
                          value="No"
                          checked={this.props.confidence === "No"}
                          onChange={this.props.onChangeConfidence}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Chewing:</td>
                      <td>
                        <input
                          type="radio"
                          name="chewing"
                          value="Yes"
                          checked={this.props.chewing === "Yes"}
                          onChange={this.props.onChangeChewing}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="chewing"
                          value="No"
                          checked={this.props.chewing === "No"}
                          onChange={this.props.onChangeChewing}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Handling:</td>
                      <td>
                        <input
                          type="radio"
                          name="handling"
                          value="Yes"
                          checked={this.props.handling === "Yes"}
                          onChange={this.props.onChangeHandling}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="handling"
                          value="No"
                          checked={this.props.handling === "No"}
                          onChange={this.props.onChangeHandling}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Play:</td>
                      <td>
                        <input
                          type="radio"
                          name="play"
                          value="Yes"
                          checked={this.props.play === "Yes"}
                          onChange={this.props.onChangePlay}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="play"
                          value="No"
                          checked={this.props.play === "No"}
                          onChange={this.props.onChangePlay}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col-sm">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>House Training:</td>
                      <td>
                        <input
                          type="radio"
                          name="houseTraining"
                          value="Yes"
                          checked={this.props.houseTraining === "Yes"}
                          onChange={this.props.onChangeHouseTraining}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="houseTraining"
                          value="No"
                          checked={this.props.houseTraining === "No"}
                          onChange={this.props.onChangeHouseTraining}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Mouthing:</td>
                      <td>
                        <input
                          type="radio"
                          name="mouthing"
                          value="Yes"
                          checked={this.props.mouthing === "Yes"}
                          onChange={this.props.onChangeMouthing}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="mouthing"
                          value="No"
                          checked={this.props.mouthing === "No"}
                          onChange={this.props.onChangeMouthing}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Socialization:</td>
                      <td>
                        <input
                          type="radio"
                          name="socialization"
                          value="Yes"
                          checked={this.props.socialization === "Yes"}
                          onChange={this.props.onChangeSocialization}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="socialization"
                          value="No"
                          checked={this.props.socialization === "No"}
                          onChange={this.props.onChangeSocialization}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Distraction Strategies:</td>
                      <td>
                        <input
                          type="radio"
                          name="distraction"
                          value="Yes"
                          checked={this.props.distraction === "Yes"}
                          onChange={this.props.onChangeDistraction}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="distraction"
                          value="No"
                          checked={this.props.distraction === "No"}
                          onChange={this.props.onChangeDistraction}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Exercise:</td>
                      <td>
                        <input
                          type="radio"
                          name="exercise"
                          value="Yes"
                          checked={this.props.exercise === "Yes"}
                          onChange={this.props.onChangeExercise}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="exercise"
                          value="No"
                          checked={this.props.exercise === "No"}
                          onChange={this.props.onChangeExercise}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Focus Strategies:</td>
                      <td>
                        <input
                          type="radio"
                          name="focus"
                          value="Yes"
                          checked={this.props.focus === "Yes"}
                          onChange={this.props.onChangeFocus}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="focus"
                          value="No"
                          checked={this.props.focus === "No"}
                          onChange={this.props.onChangeFocus}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Loose Leash Walking:</td>
                      <td>
                        <input
                          type="radio"
                          name="walking"
                          value="Yes"
                          checked={this.props.walking === "Yes"}
                          onChange={this.props.onChangeWalking}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="walking"
                          value="No"
                          checked={this.props.walking === "No"}
                          onChange={this.props.onChangeWalking}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Mat Work:</td>
                      <td>
                        <input
                          type="radio"
                          name="matWork"
                          value="Yes"
                          checked={this.props.matWork === "Yes"}
                          onChange={this.props.onChangeMatWork}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="matWork"
                          value="No"
                          checked={this.props.matWork === "No"}
                          onChange={this.props.onChangeMatWork}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Stealing Items Chase Game:</td>
                      <td>
                        <input
                          type="radio"
                          name="stealing"
                          value="Yes"
                          checked={this.props.stealing === "Yes"}
                          onChange={this.props.onChangeStealing}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="stealing"
                          value="No"
                          checked={this.props.stealing === "No"}
                          onChange={this.props.onChangeStealing}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bookAppointmentFooter">
              <div className="row">
                <div className="col-sm">
                  <button
                    type="button"
                    onClick={this.props.onClick}
                    className="btn mb-3"
                    style={{
                      marginRight: "3%",
                      marginLeft: "-50%",
                      fontWeight: "bold",
                      backgroundColor: "#1D3461",
                      color: "#ECEBE7",
                      boxShadow:
                        "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                    }}
                  >
                    Previous Step
                  </button>
                  <Link
                    to="ViewAppointments"
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
                    Cancel
                  </Link>
                </div>
                <div className="col-sm"></div>
                <button
                  type="button"
                  onClick={this.props.toDetails}
                  className="btn mb-3"
                  style={{
                    marginRight: "2%",
                    fontWeight: "bold",
                    backgroundColor: "#1D3461",
                    color: "#ECEBE7",
                    boxShadow:
                      "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditTraining2;
