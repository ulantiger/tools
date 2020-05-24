import React, {useRef, useState} from 'react'
import './code.styles.scss'

const ShowCode = ({boxBG, background, boxShadow, height, width, borderRadius, txtColor, txt, clickHandler}) => {
  const con = '.Container{\n  display: flex;\n  justify-content: center;\n'+
              '  align-items: center;\n  margin: 0;\n  padding: 0;\n'+
              '  background-size: cover;\n  background: '+boxBG+';\n  color: '+txtColor+';\n'+
              '}\n'+
              '.Box{\n'+ 
              '  align-items: center;\n  text-align: center;\n  display: flex;\n'+
              '  justify-content: center;\n  margin: 25px;\n  padding: 0;\n'+
              '  overflow: hidden;}\n'+
              '.Circle{\n  background: '+background+';\n  box-shadow: '+boxShadow+';\n'+
              '  height: '+height+';\n  width: '+height+';\n  border-radius: 50%;\n'+
              '}\n'+
              '.Rectangle{\n  background: '+background+';\n  box-shadow: '+boxShadow+';\n'+
              '  height: '+height+';\n  width: '+width+';\n  border-radius: '+borderRadius+';\n'+
              '}\n'+
              '<div class="Container">\n  <div class="Box Circle">'+txt+'</div>\n'+
              '  <div class="Box Rectangle">'+txt+'</div>\n</div>\n'
  const textAreaRef = useRef(null);
  const [copied, setCopied] = useState(false)
  
  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopied(true)
    setTimeout(()=> clickHandler(),1000)

  };           

  return (
    <div className='box Code_Box inset'>
      <div className="overlaycontent code">
        <textarea ref={textAreaRef} id='txtArea' value={con} readOnly />
      </div>
      {copied
      ?<p>Code copied into clipboard</p>
      :
      <button className="flat btn-style" 
              style={{width: 200}}
              onClick={copyToClipboard}>Copy to clipboard&close</button>}
    </div>
  )
}

export default ShowCode
