import React, { useState } from "react";
import styles from "./index.module.css";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
function TextEditor() {
  const [check, setcheck] = useState(false);
  const[inpvalue,setinpvalue]=useState("")
  const[checkInpText,setcheckInpText]=useState(false)
  const[totalWord,setword]=useState(0)
  const[clearSpace,setclearSpace]=useState()
  // const[uppercase,setUpperCase]=useState("")
  // const[customizeText,setcustomizeText]=useState("")
  const[btnCheck,setBtnCheck]=useState(false)
  const changeMode = () => {
    setcheck(!check);
  };
  const handleChange=(e)=>{
setinpvalue(e.target.value)
console.log(inpvalue);
setcheckInpText(true)
let splitWords=inpvalue.trim().split(" ");
const countWord=splitWords.length
// console.log(countWord)
    setword(countWord);

  }
  const convertCase=(text)=>{
    let input;
    setBtnCheck(true)
    if(text==='UPPER CASE'){
      toast.success("successfully text converted into upper case ")
      input=inpvalue.toUpperCase()
      setinpvalue(input)
    }
  
    else if(text==="LOWER CASE"){
      toast.success("successfully text converted into lower case ")
      input=inpvalue.toLowerCase()
      setinpvalue(input)

 
    }
    else if(text==="CLEAR"){
      toast.success("successfully text has been cleared ")
      input=""
      setinpvalue(input)
    }
   else if(text==="COPY TEXT"){
    window.navigator.clipboard.writeText(inpvalue).then(()=>{alert("copied")}).catch((err)=>console.log(err))
    window.navigator.clipboard.readText(inpvalue).then(()=>{alert("copied")}).catch((err)=>console.log(err))
   }
   else if(text=="CLEAR SPACES"){
      let clearExtraSpace= inpvalue.replace(/\s+/g,' ').trim()
      setinpvalue(clearExtraSpace)
   }
  }
  return (
    <>
      <div className={ styles.container}>
        <div className={!check?styles.header:styles.bgColor}>
          <div className={styles.text}>
            <h1>Text Editor</h1>
            <span>.com</span>
            <p>Home</p>
          </div>
          <div className={styles.button}>
            <label>
              <input
                className={styles.toggleCheckbox}
                type="checkbox"  
                onClick={changeMode}
              />
              <div className={styles.toggleSlot}>
                <div className={styles.sunIconWrapper}>
                  <div
                    className={` styles.iconify ${styles.sunIcon} `}
                    data-icon="feather-sun"
                    data-inline="false"
                  ></div>
                </div>
                <div className={styles.toggleButton}></div>
                <div className={styles.moonWconWrapper}>
                  <div
                    className={`styles.iconify ${styles.moonIcon}`}
                    data-icon="feather-moon"
                    data-inline="false"
                  ></div>
                </div>
              </div>
            </label>
            <p>Disable Dark Mode</p>
          </div>
        </div>
        <div className={styles.bodyContainer}>
          <div className={styles.body}>
            <h1>Enter Text Below To Customize</h1>
           <textarea type="textbox" onChange={handleChange} 
           value={inpvalue}></textarea>
           <div className={styles.btn}>
            <button disabled={inpvalue.length>0?false:true} 
            onClick={()=>convertCase("UPPER CASE")}>UPPER CASE</button>
            <button  disabled={inpvalue.length>0?false:true} onClick={()=>convertCase("LOWER CASE")} >LOWER CASE</button>
            <button disabled={inpvalue.length>0?false:true}  onClick={()=>convertCase("CLEAR")} > CLEAR</button>
            <button disabled={inpvalue.length>0?false:true} onClick={()=>convertCase("COPY TEXT")} >COPY TEXT</button>
            <button disabled={inpvalue.length>0?false:true} onClick={()=>convertCase("CLEAR SPACES")} >CLEAR SPACES</button>
            <button disabled={inpvalue.length>0?false:true} >PASTE</button>
           </div>
           <div className={styles.textCont}>
          <h1 className={styles.headingText}> Your Text Summary</h1>
      <p>{inpvalue.length>0?totalWord:0} words and {inpvalue.length} characters</p>
          <p>{inpvalue.length>0?totalWord*0.008:0} minutes read</p>
          <h1 className={styles.headingText}>Preview</h1>
          {
           checkInpText?<p>{inpvalue}</p>:"Nothing to preview"
          }
          
          </div>
          </div>
          
        
        </div>
        
      </div>
      <ToastContainer/>
    </>
  );
}

export default TextEditor;
