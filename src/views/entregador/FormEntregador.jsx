import InputMask from 'comigo-tech-react-input-mask';
import React from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';


export default function FormEntregador () {

    const estados = [
  { key: "ac", value: "AC", text: "Acre" },
  { key: "al", value: "AL", text: "Alagoas" },
  { key: "ap", value: "AP", text: "Amapá" },
  { key: "am", value: "AM", text: "Amazonas" },
  { key: "ba", value: "BA", text: "Bahia" },
  { key: "ce", value: "CE", text: "Ceará" },
  { key: "df", value: "DF", text: "Distrito Federal" },
  { key: "es", value: "ES", text: "Espírito Santo" },
  { key: "go", value: "GO", text: "Goiás" },
  { key: "ma", value: "MA", text: "Maranhão" },
  { key: "mt", value: "MT", text: "Mato Grosso" },
  { key: "ms", value: "MS", text: "Mato Grosso do Sul" },
  { key: "mg", value: "MG", text: "Minas Gerais" },
  { key: "pa", value: "PA", text: "Pará" },
  { key: "pb", value: "PB", text: "Paraíba" },
  { key: "pr", value: "PR", text: "Paraná" },
  { key: "pe", value: "PE", text: "Pernambuco" },
  { key: "pi", value: "PI", text: "Piauí" },
  { key: "rj", value: "RJ", text: "Rio de Janeiro" },
  { key: "rn", value: "RN", text: "Rio Grande do Norte" },
  { key: "rs", value: "RS", text: "Rio Grande do Sul" },
  { key: "ro", value: "RO", text: "Rondônia" },
  { key: "rr", value: "RR", text: "Roraima" },
  { key: "sc", value: "SC", text: "Santa Catarina" },
  { key: "sp", value: "SP", text: "São Paulo" },
  { key: "se", value: "SE", text: "Sergipe" },
  { key: "to", value: "TO", text: "Tocantins" },
];


    return(
        <div>
            <div style={{marginTop:'3%'}}>

                <Container textAlign='justified'>
                <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                <Divider></Divider>
                <div style={{marginTop:'4%'}}>

                    
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Input
                            required
                            fluid
                            label='Nome'
                            maxLength="100"
                            />

                           <Form.Input
                           required
                           fluid
                           label='CPF'
                           width={6}
                           >
                            <InputMask 
                            mask="999-999-999-99" 
                            maskChar={null}
                            /> 
                            </Form.Input>

                            <Form.Input
                           fluid
                           label='RG'
                           width={6}
                           >
                            <InputMask 
                            mask="99-999-999" 
                            maskChar={null}
                            /> 
                            </Form.Input>

                        </Form.Group>

                        <Form.Group>
                            <Form.Input
                           fluid
                           label='DT Nascimento'
                           width={6}
                           >
                            <InputMask 
                            mask="99-99-9999" 
                            maskChar={null}
                            placeholder='Ex: 20/06/2006'
                            /> 
                            </Form.Input>
                            <Form.Input
                           required
                           fluid
                           label='Fone Celular'
                           width={6}
                           >
                            <InputMask 
                            mask="(99)99999-9999" 
                            maskChar={null}
                            /> 
                            </Form.Input>
                             <Form.Input
                           fluid
                           label='Fone Fixo'
                           width={6}
                           >
                            <InputMask 
                            mask="9999-9999" 
                            maskChar={null}
                            /> 
                            </Form.Input>
                             <Form.Input
                           fluid
                           label='QNTD Entregs Realizadas'
                           width={6}
                           >
                            <InputMask 
                            mask="99999" 
                            maskChar={null}
                            /> 
                            </Form.Input>
                             <Form.Input
                           fluid
                           label='Valor por frete'
                           width={6}
                           >
                            <InputMask 
                            mask="999,999" 
                            maskChar={null}
                            /> 
                            </Form.Input>
                        </Form.Group>

                        <Form.Group>
                            <Form.Input
                            required
                            fluid
                            label='Rua'
                            width={6}
                           >
                
                        </Form.Input>
                            <Form.Input
                            fluid
                            label='Número'
                            width={6}
                           >
                                <InputMask 
                                mask="999" 

                            /> 
                            </Form.Input>
                        
                        </Form.Group>

                        <Form.Group>
                            <Form.Input
                            required
                            fluid
                            label='Bairro'
                            width={6}
                           >
                
                        </Form.Input>
                            <Form.Input
                            fluid
                            label='Cidade'
                            width={6}
                           >
        
                            </Form.Input>
                               <Form.Input
                            fluid
                            label='CEP'
                            width={6}
                           >
                                <InputMask 
                                mask="99-999-999" 

                            /> 
                            </Form.Input>
                        
                        </Form.Group>

                        <Form.Group widths="equal">
                            <Form.Select
                            fluid
                            label="UF"
                            options={estados}
                            placeholder="Selecione o estado"
                            />
                            </Form.Group>
                            
                          <Form.Group>
                            <Form.Input
                            required
                            fluid
                            label='Complemento'
                            width={6}
                           >

                            </Form.Input>
                            
                        </Form.Group>

                        <Form.Group>
                            <label>Ativo</label>
                           <Form.Radio label="Sim" name="ativo" value="sim" />
                           <Form.Radio label="Não" name="ativo" value="nao" />
                            
                        </Form.Group>
                   </Form>
                   <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Voltar
                            </Button>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>


            </Container>

            </div>
        </div>

    );

}