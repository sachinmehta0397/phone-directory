import React, { Component} from 'react';
import Header from './Header';
import './ShowSubscribers.css';
import {Link} from 'react-router-dom';

// let subscribers = [
//   {
//     id: 1,
//     name: 'shilpa',
//     phone: '8888888888'
//   },
//   {
//     id: 2,
//     name: 'shrishti',
//     phone: '1929191991'
//   },
//   {
//     id: 3,
//     name: 'sachin',
//     phone: '9736962808' 
//   }
// ]


class ShowSubscribers extends Component {
  
  onDeletedClick = (subscriberId) => {
    this.props.deleteSubscriberHandler(subscriberId);
  }

  render(){

  return (
    <div>
      <Header heading = "phone directory"/>
      <div className='component-body-container'>
        <Link to="/add"><button className='customButtons addButton'> Add </button></Link>
 
        <div className='gridContainer headingContainer'>
          <span className='gridItem name '>Name</span>
          <span className='gridItem phone'>Phone </span>
        </div>

        {
          this.props.subscribersList.map(sub => {
            return <div key={sub.id} className='gridContainer'>
            <span className='gridItem'>{sub.name}</span>
            <span className='gridItem'>{sub.phone} </span>
            <button className='customButtons deleteButton' onClick={this.onDeletedClick.bind(this, sub.id)} > Delete </button>
          </div>
          })
        }
      </div>
    </div>
  );
}
}

export default ShowSubscribers;
            