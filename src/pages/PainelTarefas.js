import React, { useEffect, useState, setState } from 'react'
import MaterialTable from 'material-table'
import NavApp from 'componentes/NavApp'
import GroupBar from 'componentes/GroupBar'

import api from 'services/api'

function Lista (props){
    let { idL, nome, publica } = props.location.state
    const [data, setData] = React.useState([])
    let [columns] = useState([
        { title: 'Nome', field: 'nome' },
        { title: 'Detalhes', field: 'detalhes' },
        { title: 'Status', field: 'status' }       
    ])
    let [columnsPublica] = useState([
        { title: 'Responsável', field: 'nomeP' }
    ])

    if(publica){       
        columns = columns.concat(columnsPublica)
    }

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
                {publica === true ? <GroupBar idL={idL}/> : null}

                <MaterialTable
                    title={nome}
                    columns={columns}
                    data={data}
                    actions={[
                        {
                            icon: 'lock1',
                            tooltip: 'Assumir',
                            onClick: (event, rowData) => alert(rowData.nome + " assumida "),
                            hidden: !publica
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