import  React,{useEffect,useState} from "react";
import  logoImg from '../../assets/logo.svg';
import {FiPower,FiTrash2} from 'react-icons/fi';
import {Link,useHistory} from 'react-router-dom';
import './style.css'
import api from '../../services/api';

export default function Profile(){

    
    const [incidents,setIncidents] = useState([]);

    const ongname = localStorage.getItem('ongName')
    const ongid  = localStorage.getItem('ongId')
    const history = useHistory();
 


    useEffect(()=>{
        api.get('profile',{
            headers:{
                auth: ongid,
            }
        }).then(response=>{
            setIncidents(response.data);
        })
    },[ongid]);



   async function handleDeleteIncident(id) {

        try {
            await api.delete(`casos/${id}`,{
                headers:{
                auth:ongid,
            }})

            setIncidents(incidents.filter(incidents=> incidents.id !== id)) ///Retirando os incedentes do front ou poderia rodar o useEfect
        } catch (error) {
            alert("erro ao deletar o caso tente novamente.")
        }

    }

    function handleLogout(){
        localStorage.clear();
        history.push('/')

    }


    return <div className="profile-container">
        <header>

            <img src={logoImg} alt="BE THE HERO"/>
            <span>{ongname}</span>
            <Link className="button" to ="/incidents/new">Cadastrar novo caso</Link>
           <button type="button"onClick={handleLogout} >
               <FiPower size={18} color="#E02041" />

               
           </button>
        
        </header>

        <h1>Casos cadastrados</h1>
        <ul>
            {incidents.map(incidents=>(
                <li  key={incidents.id}>
                <strong>Caso :</strong>
                <p>{incidents.title}</p>
                
                <strong>Descrição</strong>
                <p>{incidents.description}</p>

                <strong>Valor</strong>
                <p>{Intl.NumberFormat('pt-BR',{style: 'currency',currency:'BRL'}).format(incidents.value)}</p>
                <button type="button" onClick= {()=>handleDeleteIncident(incidents.id)}>
                    <FiTrash2 size={20} color="#a8a8b3"/>
                </button>
            </li>
            ))}
            
        </ul>
        
    </div>
}