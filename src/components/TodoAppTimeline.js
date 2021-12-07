import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export function TodoAppTimeline() {
    const { data, setData } = useContext(TodoContext);
    const completeClick = (e) => {
        const newValue = data;
        newValue[e].isCompleted=true;
        setData([...newValue]);
    }
    const incompleteClick = (e) => {
        const newValue = data;
        newValue[e].isCompleted=false;
        setData([...newValue]);
    }
    const deleteClick = (e) => {
        if(e<0) return;
        const newValue = data;
        newValue.splice(e,1);
        setData([...newValue]);
    }
    return (
        <div style={{ backgroundColor: "#E26A2C" }}>
            <h2>TODO TIMELINE</h2>
            <VerticalTimeline>
                {data.map((event, idx) => (
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={event.deadline}
                    iconStyle={{ background: "#FF8243", color: "#F1F7E7" }}
                >
                    <h3
                    className="vertical-timeline-element-title"
                    dangerouslySetInnerHTML={{ __html: event.name }}
                    />
                    <h4>Status: {event.isCompleted? 'complete' : 'incomplete'}</h4>
                    {!event.isCompleted? (<button style={{cursor:'pointer', backgroundColor:'red', border:'none', borderRadius:'3px', color:'white', padding: '5px', textAlign: 'center', display:'inline-block', fontSize:'15px', paddingLeft:'10px', paddingRight:'10px'}} onClick = {()=>completeClick(idx)}>Completed</button>) : (<button style={{cursor:'pointer', backgroundColor:'green', border:'none', borderRadius:'3px', color:'white', padding: '5px', textAlign: 'center', display:'inline-block', fontSize:'15px', paddingLeft:'10px', paddingRight:'10px'}} onClick = {()=>incompleteClick(idx)}>Incomplete</button>)}
                    <button style={{marginLeft:'10px', cursor:'pointer', backgroundColor:'gray', border:'none', borderRadius:'3px', color:'white', padding: '5px', textAlign: 'center', display:'inline-block', fontSize:'15px', paddingLeft:'10px', paddingRight:'10px'}} onClick = {() => deleteClick(idx)}>Delete</button>
                </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};