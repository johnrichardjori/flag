// Pagination.jsx
import React, { Component } from "react";
import "./Xpagination.css";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentPage: 1,
      totalPages: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          data: data,
          totalPages: Math.ceil(data.length / 10),
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  handleNext = () => {
    if (this.state.currentPage < this.state.totalPages) {
      this.setState((prevState) => ({
        currentPage: prevState.currentPage + 1,
      }));
    }
  };

  handlePrevious = () => {
    if (this.state.currentPage > 1) {
      this.setState((prevState) => ({
        currentPage: prevState.currentPage - 1,
      }));
    }
  };

  render() {
    const { data, currentPage } = this.state;
    const startIndex = (currentPage - 1) * 10;
    const endIndex = Math.min(startIndex + 10, data.length);
    const currentData = data.slice(startIndex, endIndex);

    return (
      <div className="pagination">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination-buttons">
          <button onClick={this.handlePrevious} disabled={currentPage === 1}>
            Previous
          </button>
          <span>Page {currentPage}</span>
          <button
            onClick={this.handleNext}
            disabled={currentPage === this.state.totalPages}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Pagination;
