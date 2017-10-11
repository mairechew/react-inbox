import React from 'react'


const Messages = (props) => {
  console.log(props.messages)
  var messages = props.messages[0].subject
  // var messageList = messages.map(function(message){
    // return
  // })
  return (
    <div className="row message unread">
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input type="checkbox"/>
          </div>
          <div className="col-xs-2">
            <i className="star fa fa-star-o"></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        <a href="#">
          {messages}
        </a>
      </div>
    </div>
  )
}

export default Messages
