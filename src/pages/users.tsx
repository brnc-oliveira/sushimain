import axios from "axios";
import { useEffect, useState } from "react";
import { FaUserCircle } from 'react-icons/fa'
<<<<<<< HEAD
import { MdEmail, MdDelete } from 'react-icons/md'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

import styles from './users.module.css'
=======
import { MdEmail } from 'react-icons/md'
import { ImLocation2 } from 'react-icons/im'
import { RiDeleteBinFill } from 'react-icons/ri'

import styles from './users.module.css'
import { Header } from "./header";
>>>>>>> cc871c4 (commit)

interface userProps {
    id: string;
    name: string;
    username: string;
    email: string;
<<<<<<< HEAD
}

export default function Users() {
    const [users, setUsers] = useState([]);
=======
    address: {
        street: string;
        suite: string;
        city: string;
        zipecode: string;
    };
}

export default function Users() {
    const [users, setUsers] = useState<userProps[]>([]);
>>>>>>> cc871c4 (commit)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((result) => {
            setUsers(result.data);
        })
    }, [])

<<<<<<< HEAD
    const user: Array<userProps> = users.map(user => {
=======
    const user = users.map(user => {
>>>>>>> cc871c4 (commit)
        return {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
<<<<<<< HEAD
        }
    })

    console.log(user)

    return (
        user.map(user => {
            return (
                <div className={styles.container} key={user.id}>
                    <p><FaUserCircle /> {user.username}</p>
                    <p>{user.name}</p>
                    <p><MdEmail /> {user.email}</p>
                    <button><MdDelete /></button>
=======
            address: {
                street: user.address.street,
                suite: user.address.suite,
                city: user.address.city
            }
        }
    })

    return (
        user.map(user => {
            return (
                <div className={styles.container} key={user.id}> 
                    <div>
                        <h2>{user.username}</h2>
                        <p><FaUserCircle /> {user.name}</p>
                        <p><MdEmail /> {user.email}</p>
                        <p><ImLocation2 />{user.address.street}, {user.address.suite}, {user.address.city}</p>
                    </div>
                    <div className={styles.deleteButton}>
                        <a><RiDeleteBinFill size={20} /></a>
                    </div> 
>>>>>>> cc871c4 (commit)
                </div>
            )
        })
    );
}