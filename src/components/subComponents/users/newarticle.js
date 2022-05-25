import React, {useState} from 'react';
import '../subStyles/users/newarticle.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function Newarticle(props) { 
    const [editorState, setEditorState] = useState("");
    const modules = {
        toolbar: [
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'font': [] }],
          ['bold', 'italic', 'underline','strike', 'formula', 'blockquote', 'code'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image', 'video', 'code-block', ],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'align': [] }],
        ],
      };
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent', 'font',
        'link', 'image', 'video', 'code-block', 'code', 'clean'
      ];
    
    return (
        <div className='dashboardcontent'>
            <h4 className='newarticle-intro'> Create a New Article </h4>
            <form className = 'addnew' action = '' method = 'post' encType='multipart/form-data'>
                <input type = 'text' placeholder='Give your article a title' name = 'topic' className = 'newarticle-input' required/>
                <input type = 'text' placeholder= 'Article Thumbnail' className='newarticle-input' required />
                <select id="ddl" className='newarticle-input'>
                    <option value="">Select a Category for your Post</option>
                    <option value="Colours">Colours</option>
                    <option value="Shapes">Shapes</option>
                    <option value="Names">Names</option>
                </select>
                <ReactQuill theme='snow' 
                        formats={formats}
                        modules={modules}
                        //value = {editorState}
                        placeholder = 'Write Something'
                        defaultValue = {editorState}>
                </ReactQuill>
                <input type = 'submit' className='newarticle-input-submit' value = 'Submit Article' />       </form>
        </div>
    )
}

export default Newarticle;