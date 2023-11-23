import React from 'react'

export default function Alerts(props) {
    const mystyle={height:'50px'}
  return (
    <div className='container' style={mystyle}>
           { props.Alert &&  <div class="alert alert-success bg-dark my-1" role="alert">
           {props.Alert.type}! {props.Alert.msg}
           </div>  }
    </div>
  
  )
}
