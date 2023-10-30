import React, { useState, useEffect } from 'react';

import './FormTurma.css';
import { Link } from 'react-router-dom';
// import api from '../../services/api';

const FormTurma = ({ props }) => {
  // const { handleSubmit } = props;

  // const [listSelectStreamings, setListSelectStreamings] = useState([]);
  // const [isEnableButton, setIsEnableButton] = useState(false);

  // const [errorMessages, setErrorMessages] = useState({});

  const [form, setForm] = useState({
      organizacao: '',
      esporte: '',
      horario: '',
      localizacao: '',
      descricao: ''
  });

  // const [srcImage, setSrcImage] =  useState('');

  // useEffect(() => {
  //     const user = JSON.parse(localStorage.getItem('user'));
  // api.get("/streaming", { params: { 'idUser': user?.id} })
  // .then((response) =>response.data)
  // .then((data) => setListSelectStreamings(data?.content))
  // .catch((err) => {
  //   console.error("ops! ocorreu um erro" + err);
  // });
  // }, []);

  // useEffect(() => {
  //     const areAllInputsHaveValues = Object.values(formData).every(element => element !== '');
  //     setIsEnableButton(areAllInputsHaveValues);
  // }, [formData]);

  // useEffect(()=> {
  //     if(serie){
  //         setFormData({
  //             'name': serie?.nome,
  //             'image': serie?.image,
  //             'category': serie?.categoria && serie?.categoria.toLowerCase(),
  //             'comments': serie?.comment,
  //             'idStreaming': serie?.streaming?.id
  //         })
  //     }
  //     setSrcImage(serie?.image?.encondingImage)
  // },[serie])

  // function handleOnChangeInput({ target }) {
  //     const { name, value } = target;

  //     setFormData({ ...formData, [name]: value });

  //     const msg = value === '' ? 'Campo Obrigatório' : '';
  //     setErrorMessages({ ...errorMessages, [name]: msg });
  // }

  // function handleOnFocusInput({ target }) {
  //     const { name, value } = target;

  //     const msg = value === '' ? 'Campo Obrigatório' : '';
  //     setErrorMessages({ ...errorMessages, [name]: msg });
  // }

  // const handleImageUpload = ({target}) => {
  //     const file = target.files[0];

  //     if(!file.name.match(/\.(png)$/)){
  //         const msg = "Apenas é possível utilizar imagem no formato .png";
  //         setErrorMessages({ ...errorMessages, 'image': msg });
  //         return;
  //     }
  //     const reader = new FileReader();

  //     reader.onload = (e) => {
  //         const base64 = e.target.result;
  //         setFormData({...formData, 'image':{ 'name': file.name, 'encondingImage': base64}});
  //         setSrcImage(base64);
  //     };
  //     reader.readAsDataURL(file);
  // };

  return (
    // <form onSubmit={e => handleSubmit(e, formData)}>
    <div className='FormTurma'>
      <form>
        {/* <Link to="/" className="btn mt-4 btn-outline-dark float-start d-none d-sm-inline" >Voltar</Link> */}
        {/* <button className="btn mt-4 btn-primary float-end" disabled={!isEnableButton}>Salvar</button> */}
        <button className="btn botao-cadastro">Cadastrar</button>
        <div className="form-coluna">
          <div className="form-coluna-1">
            <div className="field">
              <label htmlFor="organizacao" className="form-label">Organização</label>
              <input type="text" className="form-control form-name" id="organizacao" name="organizacao" required />
              {/* <input type="text" className="form-control form-name" id="nameSerie" name="name" onChange={handleOnChangeInput} onFocus={handleOnFocusInput} value={formData?.name} required /> */}
              {/* <span className="error" id="error-nameSerie">{errorMessages?.name}</span> */}
            </div>

            <div className="field">
              <label htmlFor="esporte" className="form-label">Esporte</label>
              <input type="text" className="form-control form-name" id="esporte" name="esporte" required />
              {/* <input type="text" className="form-control form-name" id="nameSerie" name="name" onChange={handleOnChangeInput} onFocus={handleOnFocusInput} value={formData?.name} required /> */}
              {/* <span className="error" id="error-nameSerie">{errorMessages?.name}</span> */}
            </div>

            <div className="field">
              <label htmlFor="horarios" className="form-label">Horários</label>
              <textarea className="form-control" id="horarios" name="horarios" required placeholder='Dia - XH às XH'></textarea>
              {/* <textarea className="form-control" id="comentarioSerie" name="comments" onChange={handleOnChangeInput} onFocus={handleOnFocusInput} value={formData.comments} required></textarea> */}
              {/* <span className="error" id="error-comentarioSerie">{errorMessages?.comments}</span> */}
            </div>
          </div>

          <div className="form-coluna-2">
            <div className="field">
              <label htmlFor="localizacao" className="form-label">Localização</label>
              <input type="text" className="form-control form-name" id="localizacao" name="localizacao" required />
              {/* <input type="text" className="form-control form-name" id="nameSerie" name="name" onChange={handleOnChangeInput} onFocus={handleOnFocusInput} value={formData?.name} required /> */}
              {/* <span className="error" id="error-nameSerie">{errorMessages?.name}</span> */}
            </div>

            <div className="field">
              <label htmlFor="dataFechamento" className="form-label">Data de Fechamento</label>
              <input type="date" className="form-control form-name" id="dataFechamento" name="dataFechamento" required />
              {/* <input type="text" className="form-control form-name" id="nameSerie" name="name" onChange={handleOnChangeInput} onFocus={handleOnFocusInput} value={formData?.name} required /> */}
              {/* <span className="error" id="error-nameSerie">{errorMessages?.name}</span> */}
            </div>

            <div className="field">
              <label htmlFor="descricao" className="form-label">Descrição e Requisitos</label>
              <textarea className="form-control" id="descricao" name="descricao" required></textarea>
              {/* <textarea className="form-control" id="comentarioSerie" name="comments" onChange={handleOnChangeInput} onFocus={handleOnFocusInput} value={formData.comments} required></textarea> */}
              {/* <span className="error" id="error-comentarioSerie">{errorMessages?.comments}</span> */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormTurma;