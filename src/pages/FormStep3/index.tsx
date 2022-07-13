import * as C from './styles'
import { Theme } from '../../components/Theme'
import { useNavigate } from 'react-router-dom'
import { FormActions, useForm } from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const FormStep3 = () => {
  const navigate = useNavigate()
  const { state, dispatch } = useForm()

  useEffect(()=> {
    if(state.name === '') {
      navigate('/')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3
      })
    }
  }, [])

  const handleNextStep = () => {
    if(state.email !== '' && state.github !== '') {
      alert('Cadastro realizado com sucesso!')
      console.log(state)
    } else {
      alert('Preencha todos os dados!')
    }
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    })
  }

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    })
  }

  return (
    <Theme>
      <C.Container>
          <p>Passo {state.currentStep}/3</p>
          <h1>Legal {state.name}, onde te achamos?</h1>
          <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

          <hr />

          <label>
            Qual seu e-mail?
            <input 
              type='email'
              value={state.email}
              onChange={handleEmailChange}
            />
          </label>

          <label>
            Qual seu GitHub?
            <input 
              type='url'
              value={state.github}
              onChange={handleGithubChange}         
            />
          </label>
          <Link to='/step2'>Voltar</Link>
          <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </C.Container>
    </Theme>
  )
}