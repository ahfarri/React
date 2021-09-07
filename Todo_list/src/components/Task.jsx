import React, {useState} from 'react';

const Task = () => {

const [taskInfo,setTaskInfo] = useState({
        text:"",
        complete:false
});

const [listOfTasks, setListOfTasks] = useState([]);

    const addTask = (e)=>{
        e.preventDefault();
        if(taskInfo.text.length == 0){
            return;
        }
        setListOfTasks([...listOfTasks,taskInfo ])
        setTaskInfo({
            text:"",
            complete:false
        });
    }

    const changeHandler = (e)=> {
        setTaskInfo({
            ...taskInfo,
            [e.target.name]:e.target.value,
        })
    }

    const completed = (i)=>{
        let updatedListOfTasks = listOfTasks.map((task,idx)=>{
            if (idx == i) {
                task.complete = !task.complete;}
            return task;
            });
        setListOfTasks(updatedListOfTasks);
    }

    const deleteTask = (e,idx)=>{
        let newListOfTasks = listOfTasks.filter((task,index)=>{
            return index !== idx
        });
        setListOfTasks(newListOfTasks);
    }

    return (
        <div>
            <form onSubmit={(e)=>addTask(e)}>
                <div className="form-group">
                    <input onChange= {(e)=>changeHandler(e)} type="text" id="" name="text" className="form-control" value ={taskInfo.text} />
                </div>
                <input type="submit" value="Add to List" className= "btn btn-light mt-3" />
            </form>
            <hr />

            {
                listOfTasks.map((Task,i) =>{
                    return <div key = {i}>
                        <div>
                        {Task.complete ==true?<label style={{textDecoration:"line-through"}}>{Task.text}</label>:
                            <label>{Task.text}</label> }
                            <input type="checkbox" style={{margin:"5px"}} onChange={()=> completed(i)}/>
                            <button style={{marginLeft:"10px", marginBottom:"10px"}} onClick = {(e)=>deleteTask(e,i)} className="btn btn-dark">Delete</button>
                        </div>
                    </div>
                })
            }
        </div>
    );
}
export default Task

