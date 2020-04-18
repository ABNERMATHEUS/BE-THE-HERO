import React,{useState} from 'react';
import './style.css';
import {Link,useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function NewIncidents(){
  const [title,setCaso] = useState('');
  const [description,setDesc] = useState('');
  const [value,setValue] = useState('');
  const ongid = localStorage.getItem('ongId')
  const history = useHistory();

  

  async function HeadleCreate (e){
    e.preventDefault();
    const data = {
      title,
      description,
      value
    }

    try {
      await api.post('casos',data , {
        headers:{
          auth: ongid
        },
      })
      history.push('/profile')


      
    } catch (error) {
      alert("erro ao cadastrar caso, tente novamente");
    }


  }
  





    return  <div className="new-incident-container">
    <div className="content">

      <section>
          <img src={logoImg} alt="Be the Hero"/>
          <h1>Cadastrar novo caso </h1>
          <p>Descreva o caso detalhamente para encontrar um herói para resolver isso.</p>
          
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041"/> 
            Voltar para home
          </Link>
     </section>
     

      <form onSubmit={HeadleCreate}>
          
          <input type="text" value={title} onChange={e=>setCaso(e.target.value)} placeholder="Título do caso " />
          
          <textarea  value={description} onChange={e=>setDesc(e.target.value)}placeholder="Descrição"/>
         
          
          <input type="text" value={value} onChange={e=>setValue(e.target.value)}placeholder="Valor em reais"/>
            
             
           
          <button className="button" type="submit">Cadastrar</button>
      </form>


    </div>
</div>
}