import { post } from "app/utils/utils";




export const add  = (items)    => post('task/add', items.map(itm=>({...itm, StartTime: itm.StartTime.valueOf(), EndTime: itm.EndTime.valueOf() })));
export const list = (filter) => post('task/list', {...filter, DateRef: filter.DateRef.valueOf()}).then(res => res?.map( itm => ({...itm, StartTime: new Date(itm.StartTime), EndTime: new Date(itm.EndTime)}) ) );
export const remove = (keys) => post('task/remove', keys);

