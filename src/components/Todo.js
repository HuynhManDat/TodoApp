import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import Button from 'mui-button';

export const ToDoList = () => {
    const { data, setData, name, setName, deadline, setDeadline } = useContext(TodoContext);
    const handleClick = (e) => {
        e.preventDefault();
        const newItem = {
            id: data.length + 1,
            name: name,
            deadline: deadline,
            isCompleted: false
        };
        setData([...data, newItem]);
        setName('');
        setDeadline('');
    }
    
    return (
        <div>
            <h2>ToDo List</h2>
            {/* 
            
            */}
            <table style={{border: '1px solid blue', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.15', width:'300px', padding: '20px', paddingLeft:'50px', paddingRight:'50px', border: '2px dotted #b1154a', boxShadow:'4px 4px 10px rgba(0,0,0,0.4)', borderRadius: '10px'}}>
                <tbody>
                    <tr>
                        <td><i>Name:</i></td>
                        <td>
                        <input style={{width:'200px' ,display:'inline-block', border: 'none', resize:'vertical', padding: '15px', borderRadius:'15px', border: '0', boxShadow:'4px 4px 10px rgba(0,0,0,0.2)'}} value={name} onChange={(e) => {
                            setName(e.target.value);
                        }} />
                        </td>
                    </tr>
                    <br/>
                    <tr>
                        <td><i>Deadline:</i></td>
                        <td>
                            <input style={{width:'200px' ,display:'inline-block', border: 'none', resize:'vertical', padding: '15px', borderRadius:'15px', border: '0', boxShadow:'4px 4px 10px rgba(0,0,0,0.2)'}} value={deadline} onChange={(e) => {
                                setDeadline(e.target.value);
                            }} />
                        </td>
                        <br/>
                    </tr>
                </tbody>
                <tfoot>
                    <br/>
                    <tr>
                        <td colSpan="2">
                            <button className="btn" onClick={handleClick}>Thêm</button>
                        </td>
                    </tr>
                </tfoot>
             </table>
             <br/>
            {data.map((item) => {
                //process js

                return (
                    <div>
                        
                        {item.name} - {item.deadline} : { item.isCompleted ? 'COMPLETED' : 'IN-COMPLETE'}
                        <br/>
                        <br/>
                    </div>

                )
            })}
        </div>
    )
};