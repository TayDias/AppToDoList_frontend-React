import React, { useEffect } from 'react'

import api from 'services/api'

function UserDetails(userName) {
    const [usuario, setUsuario] = React.useState([])

    useEffect(() => {
        async function getUsuario () {
            try {
                const result = await api.get('/usuario', { 
                    params: {
                        username: userName
                    }
                }, api.config)
    
                setUsuario(result.data)
            }
            catch(err) {
                console.log(err)
            }
        }
        getUsuario()
    }, [userName])

    return usuario

}

export default UserDetails