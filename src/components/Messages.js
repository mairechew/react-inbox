import React from 'react'

const Messages = ({messages,update}) => {
  // console.log(messages)

  function Checked(each) {
    var status = ""
    if (each.selected) {
      status += "checked"
    } else {
      status += ""
    }
    return status
  }

  const changeCheck = message => {
    if (message.selected) {
      message.selected = false
    } else {
      message.selected = true
    }
    update(message)
  }

  function Read (each) {
    var status = "row message "
    if (each.read) {
      status += "read"
    } else {
      status += "unread"
    }
    return status
  }

  // function colorSelected (each) {
  //   var status = ""
  //   if (each.selected) {
  //     status += "selected"
  //   } else {
  //     status += ""
  //   }
  //   return status
  // }

  // const changeRead = message => {
  //   if (message.read) {
  //     message.read = false
  //   } else {
  //     message.read = true
  //   }
  //   update(message)
  // }

  function Starred(each) {
    var status = ""
    if (each.starred) {
      status += "star fa fa-star-o"
    } else {
      status += "star fa fa-star"
    }
    return status
  }

  const changeStar = message => {
    if (message.starred) {
      message.starred = false
    } else {
      message.starred = true
    }
    update(message)
  }

  function GetLabels(each) {
    var singleLabel = each.labels.map(label =>
    <span className="label label-warning" key={label}>{label}</span>)
    return singleLabel
  }

  return messages.map(message =>
    <div key={message.id} className={Read(message)}>
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input type="checkbox" onChange={changeCheck.bind(this,message)} checked={Checked(message)}/>
          </div>
          <div className="col-xs-2">
             <i className={Starred(message)} onClick={changeStar.bind(this,message)} ></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        {GetLabels(message)}
        <a>
          {message.subject}
        </a>
      </div>
    </div>
  )
}

export default Messages
