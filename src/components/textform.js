// shorcut for this is rfc for full
// imr is for 2 line only
import React,{useState} from 'react';
// import PropTypes from 'prop-types';
// import PropTypes from 'prop-types'  
// impt
// const [text,setText]= useState('enter text here');
// setText("new text");


// 

export default function Textform(props) {
  
  const handleUpClick=()=>{
    console.log("uppercase was clicked" + text)
    let newtext=text.toUpperCase();
    setText(newtext);
    // const capitalizedText = text.replace(/\b\w/g, (match) => match.toUpperCase());
    // setText(capitalizedText);
   
  }
  const handleLoClick=()=>{
    console.log("lowercase was clicked" + text)
    let newtext=text.toLowerCase();
    setText(newtext);
  
   
  }
  const handOnChange=(event)=>{
    console.log("change was there")
    // setText("you have click on handochange")
    setText(event.target.value);
  }
  const [text,setText]= useState('enter text here');
  //  setText("new text");
  return (
    
    <div className= "box">
        <h1>{props.title}</h1>
        <div>
        {/* <label for ="mybox" class="form"><h1>Example Textarea</h1> </label> */}
        <textarea  style={{ width: '1300px',margin :'50px' }} value={text} onChange={handOnChange} className='box2' id='mybox'  rows='7'></textarea>
        </div>
        <button className="but" style= {{margin:'20px'}} onClick={handleUpClick}>convert to upper case</button>
        <button className="but" style= {{margin:'20px'}} mx-2 onClick={handleLoClick}>convert to lower case</button>
        
      <h1>Preview</h1>
      <p>{text}</p>
      <div className='container'>
          <p>{text.split(" ").length} words and {text.length} characters </p>
          <p>{0.008 *text.split(" ").length} minutes to read</p>
          <p>{0.028 *text.split(" ").length} minutes to speak</p>
      </div>

     </div>  
      

  )
};
