    import React,{useState} from 'react'


    export default function TextUtils(props){
        const [text,setText]=useState("")
        function handleClickUpper(){
            const newText= text.toUpperCase();
            setText(newText)
        }
        function handleOnChange(event){
            setText(event.target.value)
        }
        function handleClickLower(){
            const newText2=text.toLowerCase();
            setText(newText2)
        }

        function handleClickClear(){
            const clear='';
            setText(clear)
        }
    return(
        <>
        <div className='conatiner'>
        <div className="container mb-3">
            <h1>{props.title}</h1>
            <textarea name='form-control' id='mybox' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey'}} rows='8'  ></textarea>
        
        <button className='btn btn-primary mx-2' onClick={handleClickUpper} id='mybutton'>Convert to uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleClickLower} id='mybutton'>Convert to lowercase</button>
        <button className='btn btn-primary' onClick={handleClickClear} id='mybutton'>Clear Text</button>
        </div>
        </div>
        <div className='container my-3'>
            <h2>Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    );

    }