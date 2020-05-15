import React, { useEffect, useState } from 'react'
import MaterialTable from 'material-table'

import MainNavbar from '../Navbar/Main'

import api from '../../services/api'

function List (props){
    let { idL, nome } = props.location.state

    const [data, setData] = React.useState([])
    let [columns] = useState([
        { title: 'Nome', field: 'nome' },
        { title: 'Detalhes', field: 'detalhes' },
        { title: 'Status', field: 'status' }       
    ])

    useEffect(() => {
        async function retornaTarefas () {
            try {
                const result = await api.get('/tarefa', { 
                    params: { 
                        idLista: idL 
                    } 
                }, api.config)
                
                setData(result.data)
            } catch (e) {
                console.log(e)
            }
        }
        retornaTarefas()
    }, [idL])

    return (
        <>         
            <div style={{ maxWidth: '100%' }}>
                <MainNavbar />

                <MaterialTable
                    title={nome}
                    columns={columns}
                    data={data}
                    actions={[
                        {
                            icon: 'checkcircle',
                            tooltip: 'Realizar',
                            onClick: (event, rowData) => alert(rowData.nome + " realizada ")
                        }
                      ]}
                    options={{
                        actionsColumnIndex: -1
                    }}
                />
            </div>
        </>
    )
}

export default List