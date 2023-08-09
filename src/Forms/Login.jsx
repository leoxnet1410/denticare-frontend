import {Col, Form, FormControl, Row} from 'react-bootstrap'
export const LoginForm =()=>{
    return(
        <Form>
            <div>
                <h1>Registro de usuario</h1>
                <FormControl type="text" placeholder="Nombre de usuario" className="mr-sm-2" />
                <FormControl type="password" placeholder="Contraseña" className="mr-sm-2" />
            </div>

        </Form>
    )
}

