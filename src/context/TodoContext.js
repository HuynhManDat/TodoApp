import { createContext, useState } from "react";

export const TodoContext = createContext({
    data: [],
    setData: () => { },
    name: [],
    setName: () => { },
    deadline: [],
    setDeadline: () => { }
});


const initData = [
    {
        "id": 1,
        "name": "React Hooks (useEffect)",
        "isCompleted": false,
        "deadline": '2021-10-10'
    },
    {
        "id": 2,
        "name": "React Hooks (useContext)",
        "isCompleted": false,
        "deadline": '2021-10-11'
    },
    {
        "id": 3,
        "name": "React Hooks (useState)",
        "isCompleted": true,
        "deadline": '2021-10-12'
    },
    {
        "id": 4,
        "name": "FastAPI Basic",
        "isCompleted": false,
        "deadline": '2021-10-17'
    },
    {
        "id": 5,
        "name": "Material UI",
        "isCompleted": true,
        "deadline": '2021-10-19'
    }
];

export const TodoContextProvider = ({ children }) => {
    const [myData, setMyData] = useState(initData);
    const [myName, setMyName] = useState();
    const [myDeadline, setMyDeadline] = useState();
    return (
        <TodoContext.Provider value={{
            data: myData,
            setData: setMyData,
            name: myName,
            setName: setMyName,
            deadline: myDeadline,
            setDeadline: setMyDeadline
        }}>
            {children}
        </TodoContext.Provider>
    )
};