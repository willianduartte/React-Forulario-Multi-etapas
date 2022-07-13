import * as C from './style'
import { ReactNode } from 'react'
import { useForm } from '../../contexts/FormContext'
import { Header } from '../Header'
import { SidebarItem } from '../SidebarItem'

type Props = {
  children: ReactNode
}

export const Theme = ({ children }: Props) => {
  const { state } = useForm()

  return (
    <C.Container>
      <C.Area>
        <Header  />
        <C.Steps>
          <C.SideBar>
              <SidebarItem active={state.currentStep === 1} title='Pessoal' description='Se identifique' icon='profile' path='/' />
              <SidebarItem active={state.currentStep === 2} title='Profissional' description='Seu nível' icon='book' path='/step2' />
              <SidebarItem active={state.currentStep === 3} title='Contatos' description='Como te achar' icon='mail' path='/step3' />
          </C.SideBar>
          <C.Page>
            {children}
          </C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  )
}