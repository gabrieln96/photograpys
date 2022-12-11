import styles from "./EditPost.module.css";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useInsertDocument } from '../../hooks/useInsertDocument';
import { useFetchDocument } from "../../hooks/useFetchDocument";


const EditPost = () => {
    const {id} = useParams()
    const {document: post} = useFetchDocument ("posts", id)

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    useEffect (() => {
        if (post) {
            setTitle(post.title);
            setBody(post.body);
            setImage(post.image);

            const textTags = post.tagsArray.join(", ");

            setTags(textTags);
        }
    }, [post]);

    const {user} = useAuthValue()

    const {insertDocument, response} = useInsertDocument("posts");

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError("")

        // validando URL da imagem
        try {
            new URL(image);
        } catch (error) {
            setFormError("A imagem precisa ser uma URL!")
            
        }

        // array de tags
        const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

        // checando valores
        if(!title || !image || !tags || !body){
            setFormError("Por favor, preencha todos os campos!")
        }

        if(formError) return;

        insertDocument({
            title,
            image,
            body,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName
        })

        //redirect to home
        navigate("/");
    };


  return (
    <div className={styles.edit_post}>
       {post && (
        <>
         <h2>Editar post: {post.title}</h2>
        <p>Altere o seu post</p>
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
            <p className={styles.preview_title}>Preview da imagem:</p>
            <img className={styles.image_preview} src={post.image} alt={post.title} />
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
              {!response.loading && <button className='btn'>Editar</button>}
              {response.loading && <button className='btn' disabled>Aguarde...</button>}
              {response.error && <p className='error'>{response.error}</p>}
              {formError && <p className='error'>{formError}</p>}
        </form>
        </>
       )}
    </div>
  )
}

export default EditPost