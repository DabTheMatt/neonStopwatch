import React, { Component } from "react";

class Writing extends Component {
  state = {
    startId: 0,
    days: [],
    divs: [],
    x: "",
    clickedBoxes: 0,
    threeInRow: false,
    sixInRow: false,
    title: "",
    month: new Date().getMonth(),
    day: Number(new Date().getDate()),
    dayOfWeek: new Date().getDay(),
    dayNames: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    monthShrNames: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    monthFullNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  };

  componentDidMount() {
    this.addDiv();
    
        
    const timer = setInterval(()=>{
        if(this.state.days.length > 29){
            clearInterval(timer)
        }
        this.addDiv();}, 20)
        
  }

  addOne = () => {
      const temp = this.state.divs
      const div = {
          id: "1",
          text: "fd"
      }
      temp.push(div)
      this.setState({
          divs: temp
      })
  }

  addDiv = () => {
    
    const tempDays = this.state.days;
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + this.state.startId);

      const box = {
        id: this.state.startId,
        text: "",
        clicked: false,
        day: tomorrow.getDate(),
        month: tomorrow.getMonth(),
        dayOfWeek: tomorrow.getDay(),
      };
      tempDays.push(box);

      this.setState({
        day: tomorrow,
      });

    

    this.setState({
      days: tempDays,
      startId: this.state.startId+1
    });

  };

  handleBoxClick = (el) => {
    console.log("el", el);
    const tempTasks = this.state.days;
    tempTasks.map((task) => {
      if (task.id === el.id) {
        task.clicked === true ? (task.clicked = false) : (task.clicked = true);
      }
    });
    this.setState({
      days: tempTasks,
    });
    console.log(this.state.days);
    this.calcGoal();
  };

  calcGoal() {
    const temp = this.state.days;
    const clicked = [];

    temp.map((el) => {
      if (el.clicked === true) {
        clicked.push(el);
      }
    });

    for (let i = 0; i < temp.length; i++) {
      if (temp[i].clicked === true) {
        if (temp[i + 1] && temp[i + 1].clicked === true) {
          if (temp[i + 2] && temp[i + 2].clicked === true) {
            this.setState({
              threeInRow: true,
            });
            if (temp[i + 3] && temp[i + 3].clicked === true) {
              if (temp[i + 4] && temp[i + 4].clicked === true) {
                if (temp[i + 5] && temp[i + 5].clicked === true) {
                  this.setState({
                    sixInRow: true,
                  });
                }
              }
            }
          }
        }
      }
    }

    if (this.state.threeInRow === true) {
      this.setState({
        title: "king of the week",
      });
    }

    console.log("temp", temp);
    console.log("clicked", clicked);

    this.setState({
      clickedBoxes: clicked.length,
    });
  }

  render() {
    return (
      <div>
          {this.state.divs.map(el=>{
              return(<div>{el.text}</div>)
              
          })}
        <div className="topCounter">
          <div>
            You practiced {this.state.clickedBoxes} days out of{" "}
            {this.state.days.length}
          </div>
          <div>
            {this.state.sixInRow === true ? (
              <p>
                You've been exercising for 6 consecutive days. You are{" "}
                <span className="title">Programming Baron of the week</span>
              </p>
            ) : (
              <p></p>
            )}
          </div>
        </div>
        <div className="boxWrapper">
          {this.state.days.map((el) => {
            return (
              <div key={el.id} className="animate__animated animate__flipInY">
                <div className="box " 
                style={{background: `#fb5607`}}
                onClick={() => this.handleBoxClick(el)}>
                  <p>
                    {el.clicked ? (
                      "x"
                    ) : (
                      <div className="date">
                        <span className="month">
                          {this.state.dayNames[el.dayOfWeek]}
                        </span>
                        <div>{el.day}</div>
                        <div className="month">
                          {this.state.monthFullNames[el.month]}
                        </div>
                      </div>
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Writing;
