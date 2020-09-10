import React from 'react';
import { DatePicker, TimePicker, Card } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import moment from 'moment';
import { Input } from 'antd';

const { TextArea } = Input;


function App(props) {

  function disabledDate(current) {
    return current && current.valueOf() < Date.now();
  }
  return (
    <div className="App" style={{marginLeft:200, marginRight:200}}>
      <h1>Social App</h1>
      <ol>
        {props.tasks.map(task => {
          if (moment().isBefore(moment(task.date + 'T' + task.time + '.000Z'))) {
            return (
              <Card >
                <h1>{task.text}</h1>
                <h1></h1>
                <h3>{task.date} {task.time}</h3>
              </Card>
            )
          }
        })}
      </ol>
        <TextArea rows={4} value={props.data} onChange={event => { props.changeTextValue(event.target.value) }} />
      <DatePicker disabledDate={disabledDate} onChange={(date, dateString) => { props.changeDateValue(dateString) }} />
      <TimePicker onChange={(time, timeString) => { props.changeTimeValue(timeString) }} />
      <button disabled={props.data === ""} onClick={() => { props.addTask() }} >Tweet</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    date: state.date,
    time: state.time,
    tasks: state.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTextValue : (text) => {dispatch({type:'CHANGE_TEXT',payload:text})},
    changeDateValue : (date) => {dispatch({type:'CHANGE_DATE',payload:date})},
    changeTimeValue : (time) => {dispatch({type:'CHANGE_TIME',payload:time})},
    addTask : () => {dispatch({type:'ADD_TASK',payload:null})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
