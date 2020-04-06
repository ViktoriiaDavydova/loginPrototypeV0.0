import React from "react";
import Testimonial from "./Testimonial";
import BasePath from "../../api/BasePath";

class ManageTestimonials extends React.Component {
  state = {
    testimonialsList: [],
    test_id: {},
    username: {},
    contents: ""
  };

  componentWillMount = () => {
    var token = localStorage.getItem("token");
    BasePath.get(`/webresources/PendingTestimonials/${token}`)
      .then(result => {
        console.log(result.data);
        this.setState({ testimonialsList: result.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  approveTestimonial = testimonial => {
    var token = localStorage.getItem('token');
    var id = testimonial.id;
    BasePath.put(`/webresources/ApproveTestimonial/${token}/${id}`).then(result => {
      console.log(result.data);
    });
  };

  deleteTestimonial = testimonial => {
    var token = localStorage.getItem('token');
    var id = testimonial.id;
    BasePath.put(`/webresources/DeleteTestimonial/${token}/${id}`).then(result => {
      console.log(result.data);
    });
  };

  render() {
    return (
      <div
        className="ui segment p-3 mb-2 "
        style={{ backgroundColor: "#ECEBE7" }}
      >
        <div>
          <div>
            <h3>Manage Testimonials</h3>
            <br />
          </div>
          {this.state.testimonialsList.map(testimonial => (
            <Testimonial
              chosenTestimonial={testimonial}
              approveTestimonial={this.approveTestimonial}
              deleteTestimonial={this.deleteTestimonial}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ManageTestimonials;
