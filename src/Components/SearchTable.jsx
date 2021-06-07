import React, { useState } from 'react'
import MockData from '../MOCK_DATA.json';

export default function SearchTable() {

    const [search, setSearch] = useState('')

    return (
        <div className='container'>
        <input 
        type='text' 
        className='form-control my-4' 
        placeholder='Search...'
        onChange={ (e) => setSearch(e.target.value)} />
            <table className='table table-bordered'>
            <thead className='thead-dark'>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                { MockData.filter(n => {
                    if(
                        // میتوان tolowercase بعد از search را پاک کرد !!!!
                        n.first_name.toLowerCase().includes(search.toLowerCase()) ||
                        n.last_name.toLowerCase().includes(search.toLowerCase()) ||
                        n.email.toLowerCase().includes(search.toLowerCase())
                    ) {
                        return n;
                    } 
                }).map(m => (
                    <tr>
                        <th>{m.first_name}</th>
                        <th>{m.last_name}</th>
                        <th>{m.email}</th>
                        <th>{m.gender}</th>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
        
}
