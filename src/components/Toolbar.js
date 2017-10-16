import React from 'react'


const Toolbar = ({messages,update}) => {
// console.log(messages)


//const svc = MessageService()


const MarkRead = messages => {
    messages.map((single) =>
      single.selected ? single.read = true : null)
      update(messages)
}

const MarkUnread = messages => {
    messages.map((single) =>
      single.selected ? single.read = false : null)
      update(messages)
}

// function ApplyLabel(each) {
//   var singleLabel = each.labels.map(label =>
//   <span className="label label-warning">{label}</span>)
//   return singleLabel
// }

const ApplyLabel = (e) => {
  messages.forEach(m=> {
    if (m.selected && !m.labels.includes(e.target.value)) {
      m.labels.push(e.target.value)
    }
  })
  update(messages)
  e.target.children[0].selected = true
}

const RemoveLabel = (e) => {

  messages.forEach(m=> {
    if (m.selected && m.labels.includes(e.target.value)) {
      var index = parseInt(e.target.value, 10)
      m.labels.splice(index, 1)
    }
  })
  update(messages)
  e.target.children[0].selected = true
}

  return (
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">2</span>
          unread messages
        </p>

        <a className="btn btn-danger">
          <i className="fa fa-plus"></i>
        </a>

        <button className="btn btn-default">
          <i className="fa fa-minus-square-o"></i>
        </button>

        <button className="btn btn-default" onClick={MarkRead.bind(this,messages)}>Mark As Read</button>

        <button className="btn btn-default" onClick={MarkUnread.bind(this,messages)}>Mark As Unread</button>

          {/* <select className="form-control label-select"> */}

        <select className="form-control label-select" onChange={e=> ApplyLabel(e)} >
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select" onChange={e=> RemoveLabel(e)}>
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default">
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </div>
  )
}

export default Toolbar
