import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { type User } from './types.d'
import { UsersList } from './components/UsersList'

const App = () => {
    const [users, setUsers] = useState<User[]>([])
    const [showColors, setShowColors] = useState(false)
    const [sortByCountry, setSortByCountry] = useState(false)
    const [filterCountry, setFilterCountry] = useState<string | null>(null)
    const originalUsers = useRef<User[]>([])
    // useref cuando cambia no se renderiza el valor nuevamente
    // para acceder a su valor hay que hacerlo con el .current
    // guarda un valor que se mantendrá entre renderizados

    const ToggleColors = () => {
        setShowColors(!showColors)
    }

    const toggleSortByCountry = () => {
        setSortByCountry((prevState) => !prevState)
    }

    const handleReset = () => {
        setUsers(originalUsers.current)
    }

    const handleDelete = (email: string) => {
        const filteredUsers = users.filter((user) => user.email !== email)
        setUsers(filteredUsers)
    }

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=100 ')
            .then((res) => res.json())
            .then((data) => {
                setUsers(data.results)
                originalUsers.current = data.results
            })
            .catch((err) => console.log(err))
    }, [])

    const filteredUsers = useMemo(() => {
        return filterCountry !== null && filterCountry.length > 0
            ? users.filter((user) =>
                  user.location.country
                      .toLowerCase()
                      .includes(filterCountry.toLowerCase())
              )
            : users
    }, [filterCountry, users])

    const sortedUsers = useMemo(() => {
        return sortByCountry
            ? filteredUsers.toSorted((a, b) =>
                  a.location.country.localeCompare(b.location.country)
              )
            : filteredUsers
    }, [filteredUsers, sortByCountry])

    return (
        <div className='App'>
            <h1>Prueba Técnica</h1>

            <header>
                <button onClick={ToggleColors}>Colorear filas</button>
                <button onClick={toggleSortByCountry}>
                    {sortByCountry ? 'No ordenar por pais' : 'Ordenar por pais'}
                </button>
                <button onClick={handleReset}>Reset</button>
                <input
                    type='text'
                    placeholder='Filtrar por Pais'
                    onChange={(e) => setFilterCountry(e.target.value)}
                />
            </header>
            <main>
                <UsersList
                    deleteUsers={handleDelete}
                    showColors={showColors}
                    users={sortedUsers}
                />
            </main>
        </div>
    )
}
export default App
