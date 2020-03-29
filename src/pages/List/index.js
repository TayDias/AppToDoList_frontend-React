import React, { useEffect, useState } from 'react'
import MaterialTable from 'material-table'

import MainNavbar from '../Navbar/Main'
//import GroupsNavbar from '../Navbar/Groups'

import api from '../../services/api'

function List (props){
    let { idL, nome, publica } = props.location.state

    const [data, setData] = React.useState([])
    let [columns] = useState([
        { title: 'Nome', field: 'nome' },
        { title: 'Detalhes', field: 'detalhes' },
        { title: 'Status', field: 'status' }       
    ])
    //let [columnsPublica] = useState([
    //    { title: 'Responsável', field: 'nomeP' }
    //])

    if(publica){       
    //    columns = columns.concat(columnsPublica)
    }

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
                {/*publica === true ? <GroupsNavbar idLista={idL}/> : null*/}

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