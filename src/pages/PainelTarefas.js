import React, { useEffect, useState } from 'react'
import MaterialTable from 'material-table'
import NavApp from 'componentes/NavApp'

import api from 'services/api'

function Lista (props){
    let { idL, nome } = props.location.state
    const [data, setData] = React.useState([])
    const [columns] = useState([
        { title: 'ID', field: 'id' },
        { title: 'Nome', field: 'nome' },
        { title: 'Detalhes', field: 'detalhes' },
        { title: 'Status', field: 'status' }
    ])   

    useEffect(() => {
        async function retornaTarefas () {
            try {
                const result = await api.get('/tarefa', { params: { idLista: idL } }, api.config)
                setData(result.data)
            } catch (e) {
                console.log(e)
            }
        }
        retornaTarefas()
    }, [])

    return (
        <>         
            <div style={{ maxWidth: '100%' }}>
                <NavApp />
                <MaterialTable
                    title={nome}
                    columns={columns}
                    data={data}
                    actions={[
                        {
                            icon: 'lock1',
                            tooltip: 'Assumir',
                            onClick: (event, rowData) => alert(rowData.nome + " assumida ")
                        },
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

export default Lista 