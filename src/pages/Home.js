import { UserContext } from "../context/user.context"
import { useContext } from 'react'
import ProgressBar from '../components/home/ProgressBar'

export const Home = () => {
 
    const value = useContext(UserContext)

    return (
        <>
        <h4>Welcome to StrongLiftr</h4>
        <h2>{value.user? `${value.user.firstName} ${value.user.lastName}` : null}</h2>
        <ProgressBar />
        </>
    )
}