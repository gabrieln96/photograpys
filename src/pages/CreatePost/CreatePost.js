import styles from './CreatePost.module.css';

import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };


  return (
    <div className={styles.create_post}>
        <h2>Criar post</h2>
        <p>Escreva sobre o que quiser e compartilhe seus momentos!</p>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Titulo:</span>
                <input type="text" name="title" required placeholder='Pense em um título...' 
                onChange={(e) => setTitle(e.target.value)}/>
            </label>
            <label>
                <span>URL da imagem:</span>
                <input type="text" name="image" required placeholder='Insira uma imagem' 
                onChange={(e) => setImage(e.target.value)}/>
            </label>
            <label>
                <span>Conteúdo:</span>
                <textarea name="body" required placeholder='Insira o conteúdo do post'
                onChange={(e) => setBody(e.target.value)}
                valur={body}>
                </textarea>
            </label>
            <label>
                <span>Tags:</span>
                <input type="text" name="tags" required placeholder='Insira as Tags separadas por vígulas' 
                onChange={(e) => setTags(e.target.value)}/>
            </label>
            <button className='btn'>Cadastrar</button>
              {/* {!loading && <button className='btn'>Cadastrar</button>}
              {loading && <button className='btn' disabled>Aguarde...</button>}
              {error && <p className='error'>{error}</p>} */}
        </form>
    </div>
  )
}

export default CreatePost