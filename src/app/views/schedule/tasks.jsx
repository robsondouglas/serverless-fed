import { ScheduleComponent, Week, Inject, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective } from '@syncfusion/ej2-react-schedule';
import {add, list, remove} from './service';
import { useState } from 'react';
import { useEffect } from 'react';
import { fill, uniqueId } from 'lodash';
import useToast from 'app/hooks/useToast';
import { subscribe } from 'app/utils/utils';
const Tasks = () => {   
    const[eventSettings, setEventSettings] = useState({dataSource: []})
    const {success, error} = useToast();

    const resourceData = [
        { GroupText: 'Comercial',       GroupId: 1, GroupColor: '#1aaa55' },
        { GroupText: 'Desenvolvimento', GroupId: 2, GroupColor: '#357cd2' },
        { GroupText: 'Planejamento',    GroupId: 3, GroupColor: '#ff3535' },
    ];
    
    const fill = (date) => {
        list({
            Scene: 'WEEK',
            DateRef: date
        })
        .then( (days) => {
            setEventSettings({dataSource: days, fields:{id: 'IdTask'}})
        })
        .catch(e => {
            error('Falha ao listar a agenda')
        });
    }

    const handleEvent = (itm)=>{
        const handle = {
            eventRemoved: async (data)=>{
                
                try{
                    await remove(data.map(m=>({IdTask: m.IdTask})))
                    success('Evento removido com sucesso!')
                    return true;
                }
                catch(e){
                    error('Erro ao excluir o evento');
                    return false;
                }
            }
        }

        
        return handle[itm.requestType]?.(itm.data) ;
        
        
    }

    const calcGuid = (length)=>Array.from({length}).map(_=>Math.floor(Math.random() * 16).toString(16)).join('');
    const uuid = ()=> `${calcGuid(8)}-${calcGuid(4)}-${calcGuid(4)}-${calcGuid(4)}-${calcGuid(12)}`

    const handleBegin = (itm) =>{
        
        const handle = {
            eventCreate: async(data)=>{
                itm.cancel = true;

                try{
                    for(const itm of data)
                    { itm.IdTask = uuid(); }
                    console.log(data)
                    await add(data);
                    setEventSettings({...eventSettings, dataSource: [...eventSettings.dataSource, ...data]});
                    success('Evento criado com sucesso!')
                }
                catch(e){
                    error('Erro ao incluir o evento');
                    console.log(e);
                }
            }
        }

        
        return handle[itm.requestType]?.(itm.data) ;
 
            
    }

    const navigatingHandle = (args)=> fill(args.currentDate)

    useEffect(()=>{
        subscribe('task')
        .then(()=>console.log('inscrito'))
        .catch(()=>console.log('NÃO inscrito'));
        fill(new Date())
    }, [])

    return (<ScheduleComponent  startHour='07:00' endHour='19:00' dateFormat="dd/MM/yyyy"  actionBegin={handleBegin} actionComplete={handleEvent} eventSettings={eventSettings} navigating={navigatingHandle} >
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