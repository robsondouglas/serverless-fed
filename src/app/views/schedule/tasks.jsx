import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective } from '@syncfusion/ej2-react-schedule';
import {add, list, remove} from './service';
import { uniqueId } from 'lodash';
import { useState } from 'react';
import { useEffect } from 'react';
const Tasks = () => {   

    const[eventSettings, setEventSettings] = useState({dataSource: []})

    const resourceData = [
        { GroupText: 'Comercial',       GroupId: 1, GroupColor: '#1aaa55' },
        { GroupText: 'Desenvolvimento', GroupId: 2, GroupColor: '#357cd2' },
        { GroupText: 'Planejamento',    GroupId: 3, GroupColor: '#ff3535' },
        
    ];


    
    const handleEvent = (itm)=>{
        console.log(itm)
        const handle = {
            eventRemoved: (data)=>{
                //data.map(m=>console.log(m));
                
            },
            eventCreated: async(data)=>{
                await add({...data[0], IdTask: uniqueId()})
            }
        }

        try{
            handle[itm.requestType]?.(itm.data);
        }
        catch(e){            
            itm.cancel = true
        }
        
    }

    useEffect(()=>{
        list({
            minDate: new Date(2023, 3, 30), 
            maxDate: new Date(2023, 4, 7)
        }).then( days => {
            const data = [];
            for(const d of days){
                d.Tasks.forEach(t => {
                    data.push({
                        Id: t.IdTask,
                        GroupId: t.GroupId,
                        Subject: t.Subject,
                        StartTime: new Date(t.StartTime),
                        EndTime: new Date(t.EndTime)
                    })
                });
            }
            setEventSettings({dataSource: data})
        } );
        
    }, [])

    return (<ScheduleComponent startHour='07:00' endHour='19:00'   actionComplete={handleEvent} eve eventSettings={eventSettings} >
        <ViewsDirective>
            <ViewDirective option='Week' />
        </ViewsDirective>
        <ResourcesDirective>
            <ResourceDirective field="GroupId" title='Grupo' dataSource={resourceData} textField='GroupText' idField='GroupId' colorField='GroupColor'/>
        </ResourcesDirective>
        <Inject services={[Week]}/>
      </ScheduleComponent>);
}

export default Tasks;